"use client";

import { useState } from "react";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { WeatherWidget } from "@/components/garden/WeatherWidget";

// Định nghĩa kiểu dữ liệu cho nông sản
interface CropItem {
  id: string;
  name: string;
  type: string;
  plantedDate: string;
  area: string;
  status: "growing" | "harvested" | "problem";
}

// Dữ liệu mẫu
const sampleCrops: CropItem[] = [
  {
    id: "1",
    name: "Cà chua",
    type: "Rau củ",
    plantedDate: "2023-05-10",
    area: "Khu A",
    status: "growing"
  },
  {
    id: "2",
    name: "Xà lách",
    type: "Rau ăn lá",
    plantedDate: "2023-05-15",
    area: "Khu B",
    status: "growing"
  },
  {
    id: "3",
    name: "Ớt chuông",
    type: "Rau củ",
    plantedDate: "2023-04-20",
    area: "Khu A",
    status: "harvested"
  },
  {
    id: "4",
    name: "Dưa leo",
    type: "Rau củ",
    plantedDate: "2023-05-05",
    area: "Khu C",
    status: "problem"
  }
];

export default function GardenPage() {
  const [selectedArea, setSelectedArea] = useState<string>("all");
  const [crops] = useState<CropItem[]>(sampleCrops);
  
  // Lọc nông sản theo khu vực
  const filteredCrops = selectedArea === "all" 
    ? crops 
    : crops.filter(crop => crop.area === selectedArea);
  
  // Danh sách tất cả các khu vực
  const areas = ["Khu A", "Khu B", "Khu C", "Khu D"];
  
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Khu vườn của tôi</h1>
      
      {/* Component thời tiết */}
      <WeatherWidget />
      
      {/* Chọn khu vực */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">
          Chọn khu vực:
        </label>
        <Select value={selectedArea} onValueChange={setSelectedArea}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Chọn khu vực" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tất cả khu vực</SelectItem>
            {areas.map(area => (
              <SelectItem key={area} value={area}>{area}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      {/* Grid các ô nông sản */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCrops.map(crop => (
          <Card key={crop.id} className={`
            ${crop.status === "growing" ? "border-green-500" : ""}
            ${crop.status === "harvested" ? "border-yellow-500" : ""}
            ${crop.status === "problem" ? "border-red-500" : ""}
            border-2
          `}>
            <CardHeader>
              <CardTitle className="flex justify-between">
                {crop.name}
                <span className={`text-sm rounded-full px-3 py-1 
                  ${crop.status === "growing" ? "bg-green-100 text-green-800" : ""}
                  ${crop.status === "harvested" ? "bg-yellow-100 text-yellow-800" : ""}
                  ${crop.status === "problem" ? "bg-red-100 text-red-800" : ""}
                `}>
                  {crop.status === "growing" && "Đang phát triển"}
                  {crop.status === "harvested" && "Đã thu hoạch"}
                  {crop.status === "problem" && "Có vấn đề"}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p><span className="font-semibold">Loại:</span> {crop.type}</p>
              <p><span className="font-semibold">Ngày trồng:</span> {new Date(crop.plantedDate).toLocaleDateString("vi-VN")}</p>
              <p><span className="font-semibold">Khu vực:</span> {crop.area}</p>
            </CardContent>
            <CardFooter className="flex justify-end space-x-2">
              <Button variant="outline" size="sm">Cập nhật</Button>
              <Button variant="ghost" size="sm">Chi tiết</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}