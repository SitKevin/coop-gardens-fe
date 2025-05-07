"use client"; // Thêm directive này để đánh dấu đây là client component

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Header: React.FC = () => {
  const router = useRouter();
  
  const handleLogin = () => {
    router.push('/login');
  };
  
  return (
    <header className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo và thương hiệu */}
        <div className="flex items-center space-x-4">
          <Image src="/icon/green-planet.gif" alt="Logo" width={40} height={40} className="h-10" />
          <span className="text-2xl font-bold">B-ZEA</span>
        </div>
        
        {/* NAVIGATION */}
        <nav className="flex space-x-6">
          <Link href="product" className="flex items-center space-x-1 hover:underline">
            <Image src="/icon/package.gif" alt="product" width={40} height={30} className="h-10" />
            <span><b>Sản Phẩm</b></span>
          </Link>
          <Link href="blogs" className="flex items-center space-x-1 hover:underline">
            <Image src="/icon/blog.gif" alt="blog" width={30} height={10} className="h-10" />
            <span><b>Blogs</b></span>
          </Link>
          <Link href="management" className="flex items-center space-x-1 hover:underline">
            <Image src="/icon/tag.gif" alt="management" width={50} height={30} className="h-10" />
            <span><b>Quản Lý</b></span>
          </Link>
          <Link href="cart" className="flex items-center space-x-1 hover:underline">
            <Image src="/icon/shopping-cart.gif" alt="cart" width={40} height={30} className="h-10" />
            <span><b>Giỏ Hàng</b></span>
          </Link>
          <Link href="contact" className="flex items-center space-x-1 hover:underline">
          <Image src="/icon/telephone.gif" alt="contact" width={40} height={45} className="h-10" />
          <span><b>Contact</b></span>
          </Link>
        </nav>
        
        {/* Thanh tìm kiếm và đăng nhập */}
        <div className="flex items-center space-x-4">
          <div className="relative hidden sm:block">
            <input
              type="text"
              placeholder="Tìm kiếm"
              className="border rounded-full px-3 py-1 pl-10 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
            <Image
              src="/icon/loupe.png"
              alt="Search Icon"
              width={20}
              height={20}
              className="absolute left-5 top-1/2 transform -translate-y-1/2 w-5 h-5"
            />
          </div>
          
          {/* Nút đăng nhập */}
          <button 
            onClick={handleLogin}
            className="bg-black text-white rounded-full px-4 py-1 hover:bg-gray-800 transition-colors duration-200"
          >
            Đăng Nhập
          </button>
          
          {/* Theme toggle */}
          <button className="bg-green-700 text-white rounded-full px-4 py-1">
            🌿
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;