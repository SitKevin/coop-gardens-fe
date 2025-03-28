import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src="/green-planet.gif" alt="Logo" className="h-10" />
          <span className="text-2xl font-bold">B-ZEA</span>
        </div>
        <nav className="flex space-x-6">
          <a href="#products" className="flex items-center space-x-1 hover:underline">
            <img src="/package.gif" alt="product" width={40} height={30} className="h-10" />
            <span><b>Sản Phẩm</b></span>
          </a>
          <a href="#blogs" className="flex items-center space-x-1 hover:underline">
            <img src="/blog.gif" alt="blog" width={40} height={10} className="h-10" />
            <span><b>Blogs</b></span>
          </a>
          <a href="#management" className="flex items-center space-x-1 hover:underline">
            <img src="/tag.gif" alt="management" width={40} height={30} className="h-10" />
            <span><b>Quản Lý</b></span>
          </a>
          <a href="#cart" className="flex items-center space-x-1 hover:underline">
            <img src="/shopping-cart.gif" alt="cart" width={40} height={30} className="h-10" />
            <span><b>Giỏ Hàng</b></span>
          </a>
        </nav>
        <div className="flex items-center space-x-4">
  {/* Container input có icon bên trong */}
  <div className="relative">
    <input
      type="text"
      placeholder="Tìm kiếm"
      className="border rounded-full px-3 py-1 pl-10 focus:outline-none focus:ring-1 focus:ring-indigo-500"
    />
    <img
      src="/loupe.png"
      alt="Search Icon"
      className="absolute left-5 top-1/2 transform -translate-y-1/2 w-5 h-5"
    />
  </div>
  <button   onClick={() => console.log("Đăng Nhập được nhấn")}
 className="bg-black text-white rounded-full px-4 py-1 hover:bg-gray-800 transition-colors duration-200">
    Đăng Nhập
  </button>
  <button className="bg-green-700 text-white rounded-full px-4 py-1">
    🌿
  </button>
</div>

      </div>
    </header>
  );
};

export default Header;
