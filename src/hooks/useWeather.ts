"use client";

import { useState, useEffect } from "react";
import { ProcessedWeatherData } from "@/services/garden/types";
import { getWeatherByLocation, getMockWeatherData } from "@/services/garden/weather";

export function useWeather(location: string) {
  const [weatherData, setWeatherData] = useState<ProcessedWeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchWeatherData() {
      if (!location) return;
      
      setLoading(true);
      setError(null);
      
      try {
        // Thử gọi API thật
        const data = await getWeatherByLocation(location);
        setWeatherData(data);
      } catch (err) {
        console.error("Lỗi khi lấy dữ liệu thời tiết, sử dụng mock data:", err);
        
        // Nếu API thất bại, dùng mock data
        const mockData = getMockWeatherData(location);
        setWeatherData(mockData);
        
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    }
    
    fetchWeatherData();
  }, [location]);

  return { weatherData, loading, error };
}