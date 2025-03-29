'use client'

import { CustomResizable } from "@/components/blog/custom-resizeable";

export default function BlogMain() {
    return (
        <div className="flex justify-center items-center flex-col my-5">
        <h2 className="font-pacifico text-6xl font-semibold text-center my-15 bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent px-3">BZEA BLOG</h2>
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
    );
    }
