"use client"

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

export function SplitCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-[1440px] mx-auto"
    >
      <CarouselContent>
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem key={index} className="flex justify-center items-center md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="w-[400px] h-[400px]">
                <CardContent className="flex flex-col h-full">
                  
                  <div 
                    className="h-4/5 bg-cover bg-center"
                    style={{
                      backgroundImage: `url('https://soyte.hatinh.gov.vn/upload/1000030/20171026/7f916ded027eef14543550b385a4306cqua-cam-1.jpg')`, // Bạn thay URL hình tương ứng
                    }}
                  />
                  <hr className="mx-auto my-4 border-t-3 border-gray-300 w-full" />
                  <div className="h-1/5 flex items-center justify-center">
                    <span className="text-3xl font-semibold">Cam {index + 1}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}