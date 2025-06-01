import { NextResponse } from "next/server";

const API_KEY = process.env.WEATHER_API_KEY;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const localLocation = searchParams.get("location");
  
  if (!localLocation) {
    return NextResponse.json(
      { error: "Location parameter is required" },
      { status: 400 }
    );
  }
  
  try {
    // Bước 1: Sử dụng Geocoding API để tìm tọa độ chính xác
    const geoResponse = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(localLocation)}&limit=1&appid=${API_KEY}`
    );
    
    if (!geoResponse.ok) {
      throw new Error("Failed to find location coordinates");
    }
    
    const geoData = await geoResponse.json();
    
    if (!geoData.length) {
      throw new Error(`Location "${localLocation}" not found`);
    }
    
    // Lấy tọa độ từ kết quả geocoding
    const { lat, lon } = geoData[0];
    console.log(`Found coordinates for ${localLocation}: lat=${lat}, lon=${lon}`);
    
    // Bước 2: Sử dụng tọa độ để lấy dữ liệu thời tiết (chính xác hơn dùng tên)
    const currentResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=vi&appid=${API_KEY}`
    );
    
    const forecastResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&lang=vi&appid=${API_KEY}`
    );
    
    if (!currentResponse.ok || !forecastResponse.ok) {
      throw new Error("Failed to fetch weather data");
    }
    
    const current = await currentResponse.json();
    const forecast = await forecastResponse.json();
    
    return NextResponse.json({ current, forecast });
    
  } catch (error) {
    console.error("Weather API error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to fetch weather data" },
      { status: 500 }
    );
  }
}