'use client'

import { CustomResizable } from "@/components/blog/custom-resizeable";

export default function BlogMain() {
    const smallPosts = [
        {
            title: "5 Bí kíp chăm sóc cây ăn trái mùa khô",
            dateTime: "2023-10-01",
            imageUrl: undefined // Default image will be used
        },
        {
            title: "Nông trại tự động hóa: Xu hướng mới trong sản xuất",
            dateTime: "2023-10-01",
            imageUrl: undefined
        },
        {
            title: "Làm thế nào để thu hoạch hiệu quả trong mùa mưa",
            dateTime: "2023-09-15",
            imageUrl: undefined
        },
        {
            title: "Top 10 loại cây trồng phù hợp cho vùng khô hạn",
            dateTime: "2023-09-10",
            imageUrl: undefined
        },
        {
            title: "Phương pháp tưới nước tiết kiệm cho nông trại",
            dateTime: "2023-09-05",
            imageUrl: undefined
        },
        {
            title: "Hướng dẫn trồng rau sạch tại nhà",
            dateTime: "2023-09-01",
            imageUrl: undefined
        }
    ];
    return (
        <div className="flex justify-center items-center flex-col my-5">
        <h2 className="font-pacifico text-6xl font-semibold text-center my-15 bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent px-3">BZEA BLOG</h2>
        <p className="text-3xl font-mono text-gray-600 text-center my-10">Recent post</p>
        <div className="w-full px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1440px] mx-auto">
            <div className="md:col-span-2 h-[600px]">
                <CustomResizable
                textSize="text-4xl" 
                dateTime ="2023-10-01"
                text="Tổng hợp phương pháp làm vườn hiệu quả tại chuỗi cung ứng khoai tây lớn nhất Đà Lạt" 
                />
            </div>
            <div className="md:col-span-1 flex flex-col gap-6">
            {/* Map through the first 2 small posts */}
            {smallPosts.slice(0, 2).map((post, index) => (
                    <div key={index} className="h-[290px]">
                        <CustomResizable 
                            textSize="text-xl" 
                            text={post.title}
                            dateTime={post.dateTime}
                            imageUrl={post.imageUrl}
                        />
                    </div>
                ))}
            </div>
            </div>
        </div>
        <p className="text-3xl font-mono text-gray-600 text-center my-10">All posts</p>
        {/* All posts section with 3 equal columns */}
        <div className="w-full px-4 mb-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1440px] mx-auto">
                    {smallPosts.map((post, index) => (
                        <div key={index} className="h-[500px]">
                            <CustomResizable 
                                textSize="text-xl" 
                                text={post.title}
                                dateTime={post.dateTime}
                                imageUrl={post.imageUrl}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
    }
