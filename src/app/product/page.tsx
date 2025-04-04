"use client"

import { CategoryFilter } from "@/components/product-page/category"

export default function ProductPage() {
  return (
    <div className="w-full max-w-[1440px] mx-auto">
      <div className="flex flex-col md:flex-row">
        {/* Sidebar với danh mục sản phẩm */}
        <div className="md:w-80 md:sticky md:top-[64px] md:self-start md:h-[calc(100vh-130px)] md:overflow-y-auto">
          <div className="hidden md:block p-4">
            <CategoryFilter />
          </div>
          
          {/* Filter cho mobile */}
          <div className="md:hidden mb-6">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="font-bold text-lg mb-2">Lọc sản phẩm</h2>
              <select className="w-full p-2 border rounded">
                <option>Tất cả danh mục</option>
                <option>Cây ăn quả</option>
                <option>Rau củ quả</option>
                <option>Cây cảnh</option>
                <option>Hạt giống</option>
                <option>Phân bón</option>
              </select>
            </div>
          </div>
        </div>
        
        {/* Main content */}
        <div className="flex-1 px-2 md:px-4 py-6">
          {/* Tiêu đề căn giữa */}
          <div className="w-full flex justify-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-center">Sản phẩm</h1>
          </div>
          
          {/* Danh sách sản phẩm */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {Array.from({length: 12}).map((_, index) => (
              <div 
                key={index} 
                className="border rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow bg-white flex flex-col"
              >
                <div className="aspect-square bg-gray-200 rounded-lg mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">Sản phẩm {index + 1}</h3>
                <p className="text-gray-600 text-base mt-1 flex-grow">Mô tả ngắn về sản phẩm nông nghiệp chất lượng cao từ B-Zea Farm.</p>
                <div className="mt-4 text-xl font-bold text-green-600">120.000 đ</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}