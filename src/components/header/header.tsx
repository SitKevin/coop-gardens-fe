'use client';

import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        
        <div className="flex items-center space-x-4" >
          <Link href="/" className="flex items-center space-x-2"> 
          <Image src="/green-planet.gif" alt="Logo" width={40} height={40} className="h-10" />
          <span className="text-2xl font-bold">B-ZEA</span>
          </Link>
        </div>
        
        {/* NAVIGATION */}
        <nav className="flex space-x-6">
          <Link href="/product" className="flex items-center space-x-1 hover:underline">
            <Image src="/package.gif" alt="product" width={40} height={30} className="h-10" />
            <span><b>Sản Phẩm</b></span>
          </Link>
          <Link href="/blogs" className="flex items-center space-x-1 hover:underline">
            <Image src="/blog.gif" alt="blog" width={40} height={30} className="h-10" />
            <span><b>Blogs</b></span>
          </Link>
          <Link href="#management" className="flex items-center space-x-1 hover:underline">
            <Image src="/tag.gif" alt="management" width={40} height={30} className="h-10" />
            <span><b>Quản Lý</b></span>
          </Link>
          <Link href="#cart" className="flex items-center space-x-1 hover:underline">
            <Image src="/shopping-cart.gif" alt="cart" width={40} height={30} className="h-10" />
            <span><b>Giỏ Hàng</b></span>
          </Link>
        </nav>
      
        {/* SEARCH & BUTTONS */}
        <div className="flex items-center space-x-4">
          {/* SEARCH INPUT */}
          <div className="relative">
            <input
              type="text"
              placeholder="Tìm kiếm"
              className="border rounded-full px-3 py-1 pl-10 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
            <Image
              src="/loupe.png"
              alt="Search Icon"
              width={20}
              height={20}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
            />
          </div>

          {/* LOGIN BUTTON */}
          <button
            onClick={() => console.log("Đăng Nhập được nhấn")}
            className="bg-black text-white rounded-full px-4 py-1 hover:bg-gray-800 transition-colors duration-200"
          >
            Đăng Nhập
          </button>

          {/* THEME BUTTON */}
          <button className="bg-green-700 text-white rounded-full px-4 py-1">
            🌿
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
