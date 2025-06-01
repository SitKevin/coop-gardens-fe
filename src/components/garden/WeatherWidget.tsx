"use client";

import { useState, useMemo } from "react";
import { useWeather } from "@/hooks/useWeather";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Droplets, Wind, Calendar } from "lucide-react";
import { getWeatherIconUrl } from "@/services/garden/weather";


// Danh sách các tỉnh thành của Việt Nam
const vietnamProvinces = [
  "Hà Nội", "TP Hồ Chí Minh", "Đà Nẵng", "Hải Phòng", "Cần Thơ", 
  "An Giang", "Bà Rịa - Vũng Tàu", "Bắc Giang", "Bắc Kạn", "Bạc Liêu",
  "Đồng Nai", "Lâm Đồng", "Quảng Nam", "Huế", "Nha Trang", "Đà Lạt",
  "Vũng Tàu", "Hạ Long", "Buôn Ma Thuột", "Quy Nhơn", "Tam Kỳ", "Vinh", 
  "Thanh Hóa", "Hải Dương", "Thái Nguyên"
];

// Helper để lấy màu sắc dựa trên thời tiết
// Helper để lấy màu sắc dựa trên thời tiết
const getWeatherColor = (condition: string) => {
  // Mưa - gradient màu xanh đậm
  if (condition.includes("mưa") || condition.includes("mua")) 
    return "bg-gradient-to-br from-gray-800 to-blue-900 text-white";
  
  // Nhiều mây - gradient nhẹ nhàng hơn
  if (condition.includes("mây") || condition.includes("may")) 
    return "bg-gradient-to-br from-blue-300 to-gray-100";
  
  // Trời nắng - gradient xanh dương với trắng
  if (condition.includes("nắng") || condition.includes("nang")) 
    return "bg-gradient-to-br from-blue-400 to-white";
  
  if (condition.includes("sương") || condition.includes("suong")) 
    return "bg-gradient-to-br from-indigo-200 to-white";
  
  // Mặc định
  return "bg-gradient-to-br from-blue-200 to-white";
};

// Helper để lấy màu chữ dựa trên nhiệt độ
const getTempColor = (temp: number) => {
  if (temp >= 30) return "text-yellow-500";
  if (temp >= 25) return "text-white/70";
  if (temp >= 20) return "text-amber-500";
  if (temp >= 15) return "text-emerald-600";
  if (temp >= 10) return "text-blue-500";
  return "text-indigo-600";
};

export function WeatherWidget() {
  const [selectedLocation, setSelectedLocation] = useState<string>("Hà Nội");
  const [searchInput, setSearchInput] = useState<string>("");
  const { weatherData, loading, error } = useWeather(selectedLocation);

  // Xử lý tìm kiếm - thêm "Vietnam" vào chuỗi tìm kiếm để giới hạn ở VN
  const handleSearch = () => {
    if (searchInput.trim()) {
      // Thêm ", Vietnam" vào chuỗi tìm kiếm nếu người dùng chưa thêm
      const query = searchInput.trim().toLowerCase().includes("vietnam") || 
                    searchInput.trim().toLowerCase().includes("việt nam") ?
                      searchInput.trim() : 
                      `${searchInput.trim()}, Vietnam`;
      
      setSelectedLocation(query);
    }
  };

  // Tính màu sắc background dựa trên điều kiện thời tiết
  const weatherBg = useMemo(() => {
    if (!weatherData) return "bg-gradient-to-br from-blue-50 to-green-50";
    return getWeatherColor(weatherData.condition);
  }, [weatherData]);

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <span className="bg-gradient-to-r from-green-600 to-blue-500 bg-clip-text text-transparent">
          Thời tiết khu vực
        </span>
      </h2>
      
      <Tabs defaultValue="select" className="mb-6">
        <TabsList className="mb-2">
          <TabsTrigger value="select">Chọn thành phố</TabsTrigger>
          <TabsTrigger value="search">Tìm kiếm</TabsTrigger>
        </TabsList>

        <TabsContent value="select">
          <Select value={selectedLocation} onValueChange={setSelectedLocation}>
            <SelectTrigger className="w-full md:w-[250px]">
              <SelectValue placeholder="Chọn tỉnh/thành phố" />
            </SelectTrigger>
            <SelectContent>
              {vietnamProvinces.map(province => (
                <SelectItem key={province} value={province}>
                  {province}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </TabsContent>

        <TabsContent value="search">
          <div className="flex space-x-2">
            <div className="relative flex-1">
              <Input
                type="text"
                placeholder="Nhập tên thành phố (vd: Đà Lạt, Cần Thơ...)"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSearch();
                  }
                }}
                className="pr-10"
              />
            </div>
            <Button onClick={handleSearch} type="button" className="bg-green-600 hover:bg-green-700">
              <Search className="h-4 w-4 mr-1" /> Tìm
            </Button>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Tự động thêm &quot;Vietnam&quot; vào từ khóa tìm kiếm
          </p>
        </TabsContent>
      </Tabs>
      
      {/* Hiển thị vị trí hiện tại */}
      <div className="text-sm text-gray-500 mb-4">
        Đang xem thời tiết cho: <span className="font-medium">{selectedLocation}</span>
      </div>
      
      {/* Loading state */}
      {loading && (
        <Card>
          <CardContent className="py-8">
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
            </div>
            <p className="text-center mt-4">Đang tải dữ liệu thời tiết...</p>
          </CardContent>
        </Card>
      )}
      
      {/* Error state */}
      {error && !loading && (
        <Card className="bg-red-50 border border-red-200 shadow-sm">
          <CardContent className="py-4">
            <p className="text-red-500 font-medium">Lỗi: {error}</p>
            <p className="text-gray-600 mt-1">Không thể tìm thấy thông tin thời tiết cho &quot;{selectedLocation}&quot;.</p>
            <Button 
              variant="outline"
              size="sm" 
              className="mt-2 border-red-300 hover:bg-red-100"
              onClick={() => setSelectedLocation("Hà Nội")}
            >
              Quay lại Hà Nội
            </Button>
          </CardContent>
        </Card>
      )}
      
      {/* Weather data */}
      {weatherData && !loading && (
        <Card className={`shadow-md overflow-hidden ${weatherBg}`}>
        <div className="absolute top-0 right-0 w-32 h-32 -mr-8 -mt-8 bg-gradient-to-br from-yellow-300/20 to-amber-500/30 rounded-full blur-2xl"></div>
          
        <CardHeader className="pb-2">
            <CardTitle className="flex items-center justify-between">
                <div className="flex items-center">
                {/* Cải thiện icon chính */}
                <div className="relative mr-2">
                    <div className="absolute inset-0 bg-white rounded-full blur-sm opacity-10"></div>
                    <img 
                        src={getWeatherIconUrl(weatherData.icon)} 
                        alt={weatherData.condition}
                        className="h-16 w-16 relative z-10 drop-shadow-lg" 
                    />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold">{weatherData.location}</h3>
                        <p className="text-sm font-medium capitalize mt-1 text-gray-600">{weatherData.condition}</p>
                    </div>
                </div>
                <span className={`text-4xl font-bold ${weatherBg.includes('text-white') ? 'text-white' : getTempColor(weatherData.temperature)}`}>
                    {weatherData.temperature}°C
                </span>
            </CardTitle>
        </CardHeader>
          
          <CardContent>
            <div className="grid grid-cols-2 gap-4 mb-6 mt-2">
                <div className="flex items-center p-4 bg-white/60 rounded-lg backdrop-blur-sm shadow-sm">
                <Droplets className="h-8 w-8 mr-4 text-blue-500" />
                <div>
                <div className="text-gray-600">Độ ẩm</div>
                <div className="font-bold text-blue-700 text-xl">{weatherData.humidity}%</div>
            </div>
            </div>
            <div className="flex items-center p-4 bg-white/60 rounded-lg backdrop-blur-sm shadow-sm">
                <Wind className="h-8 w-8 mr-4 text-emerald-500" />
                <div>
                    <div className="text-gray-600">Gió</div>
                    <div className="font-bold text-emerald-700 text-xl">{weatherData.windSpeed} m/s</div>
                </div>
            </div>
            </div>
            
            <div className="mt-6">
              <div className="flex items-center mb-3">
                <Calendar className="h-4 w-4 mr-2 text-purple-600" />
                <h3 className="font-medium">Dự báo 4 ngày tới</h3>
              </div>
              
              <div className="grid grid-cols-4 gap-2">
                {weatherData.forecast.map((day, index) => (
                <div key={index} 
                 className="text-center p-2 bg-white/60 rounded-lg backdrop-blur-sm border border-gray-100 transition-transform hover:scale-105">
                 <div className="font-medium text-gray-700">{day.day}</div>
                  {/* Cải thiện icon dự báo */}
                  <div className="relative my-2 h-12">
                  <div className="absolute inset-0 mx-auto w-10 h-10 bg-white rounded-full blur-sm opacity-70"></div>
               <img 
                 src={getWeatherIconUrl(day.icon)} 
                alt={day.condition}
                className="h-12 w-12 mx-auto relative z-10 drop-shadow-md" 
              />
             </div>
                <div className={`font-bold ${getTempColor(day.temp)}`}>{day.temp}°C</div>
             <div className="text-xs truncate text-gray-500">{day.condition}</div>
             </div>
             ))}
            </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}