"use client";

import { ForecastData, ProcessedWeatherData, WeatherData, ForecastItem } from "./types";

// Xử lý dữ liệu thô từ API thành dạng dễ dùng
export function processWeatherData(
  currentData: WeatherData, 
  forecastData: ForecastData
): ProcessedWeatherData {
  return {
    location: currentData.name,
    temperature: Math.round(currentData.main.temp),
    condition: currentData.weather[0].description,
    humidity: currentData.main.humidity,
    windSpeed: currentData.wind.speed,
    icon: currentData.weather[0].icon,
    forecast: forecastData.list
      .filter((_: ForecastItem, index: number) => index % 8 === 0) // Lấy dữ liệu mỗi 24h (8 * 3h)
      .slice(0, 4) // 4 ngày tiếp theo
      .map(day => ({
        day: new Date(day.dt * 1000).toLocaleDateString("vi-VN", { weekday: "short" }),
        temp: Math.round(day.main.temp),
        condition: day.weather[0].description,
        icon: day.weather[0].icon
      }))
  };
}

// Gọi API thời tiết thông qua API Route của Next.js
export async function getWeatherByLocation(location: string): Promise<ProcessedWeatherData> {
  try {
    const response = await fetch(`/api/weather?location=${encodeURIComponent(location)}`);
    
    if (!response.ok) {
      throw new Error("Không thể lấy dữ liệu thời tiết");
    }
    
    const data = await response.json();
    return processWeatherData(data.current, data.forecast);
    
  } catch (error) {
    console.error("Lỗi khi lấy dữ liệu thời tiết:", error);
    throw error;
  }
}

// Data mẫu để sử dụng khi API không hoạt động
export function getMockWeatherData(location: string): ProcessedWeatherData {
  return {
    location: location,
    temperature: 28,
    condition: "Mây rải rác",
    humidity: 75,
    windSpeed: 3.5,
    icon: "04d",
    forecast: [
      { day: "T2", temp: 29, condition: "Trời nắng", icon: "01d" },
      { day: "T3", temp: 30, condition: "Mây rải rác", icon: "02d" },
      { day: "T4", temp: 27, condition: "Mưa nhẹ", icon: "10d" },
      { day: "T5", temp: 26, condition: "Mưa vừa", icon: "09d" }
    ]
  };
}

// Trả về URL của icon thời tiết
export function getWeatherIconUrl(iconCode: string): string {
  return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
}