"use client";

import { MainCarousel } from "@/components/home-page/main-carousel";
import { SplitCarousel } from "@/components/home-page/split-carousel";
import { CustomResizable } from "@/components/home-page/custom-resizeable";
import { ModeToggle } from "@/components/home-page/mode-toggle";
import Header from '@/components/header/header';

export default function Home() {
  return (
    <div>
      <div 
          className="relative h-[900px] bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: "url('/h1background.jpg')" }}>
        <div className="flex flex-col items-center space-y-15">
          <h1 className="font-bungee text-8xl text-white relative z-10 text-center mb-0 py-10"> B-ZEA FARM</h1>
          <p className="font-nunito text-4xl font-stretch-expanded text-white text-center mt-0">Nông sản đến từ thiên nhiên</p>
        </div>
      </div>
      <hr className="my-10 border-t-2 border-gray-300 w-[1440px] mx-auto" />
      <div>
        <h2 className="font-pacifico text-6xl font-semibold text-center my-5 bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">Giới Thiệu</h2>
        <p className="text-3xl font-mono text-gray-600 text-center my-10">B-Zea sẽ mang tới trải nghiệm tuyệt vời!</p>
        <MainCarousel />
      </div>
      <div className="bg-gray-50 p-4 my-5">
        <h2 className="font-pacifico text-6xl text-center my-15">Sản Phẩm Nổi Bật</h2>
        <SplitCarousel />
        <div className="my-20"></div>
      </div>
      <div className="flex justify-center items-center flex-col my-5">
        <h2 className="font-pacifico text-6xl font-semibold text-center my-15 bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent px-3">Blog Mới</h2>
        <div className="w-full px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1440px] mx-auto">
            <div className="md:col-span-2 h-[600px]">
              <CustomResizable 
                textSize="text-4xl" 
                text="Tổng hợp phương pháp làm vườn hiệu quả tại chuỗi cung ứng khoai tây lớn nhất Đà Lạt" 
              />
            </div>
            <div className="md:col-span-1 flex flex-col gap-6">
              <div className="h-[290px]">
                <CustomResizable 
                  textSize="text-xl" 
                  text="5 Bí kíp chăm sóc cây ăn trái mùa khô" 
                />
              </div>
              <div className="h-[290px]">
                <CustomResizable 
                  textSize="text-xl" 
                  text="Nông trại tự động hóa: Xu hướng mới trong sản xuất" 
                  imageUrl="https://porch.com/advice/wp-content/uploads/2021/11/pexels-pixabay-235725.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModeToggle />
    </div>
  );
}