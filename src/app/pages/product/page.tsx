export default function ProductPage() {
    return (
      <div className="px-4 md:px-8 py-6 w-full max-w-[1600px] mx-auto">
        {/* Tiêu đề căn giữa */}
        <div className="w-full flex justify-center mb-10">
          <h1 className="text-5xl font-bold text-center">Sản phẩm</h1>
        </div>
        
        {/* Grid 2 cột thay vì 3 cột để các item to hơn */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Danh sách sản phẩm */}
          {Array.from({length: 11}).map((_, index) => (
            <div 
              key={index} 
              className="border-2 rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow bg-white min-h-[400px] flex flex-col"
            >
              <div className="aspect-square bg-gray-200 rounded-lg mb-6"></div>
              <h3 className="text-2xl font-semibold mb-2">Sản phẩm {index + 1}</h3>
              <p className="text-gray-600 text-lg mt-2 flex-grow">Mô tả ngắn về sản phẩm nông nghiệp chất lượng cao từ B-Zea Farm.</p>
              <div className="mt-6 text-2xl font-bold text-green-600">120.000 đ</div>
            </div>
          ))}
        </div>
      </div>
    );
  }