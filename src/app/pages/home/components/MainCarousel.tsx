import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

export function MainCarousel() {
  return (
    <Carousel className="w-full max-w-[1440px] mx-auto">
      <CarouselContent>
        {Array.from({ length: 3 }).map((_, index) => (
          <CarouselItem key={index} className="flex justify-center items-center">
            <div className="p-1">
              <Card className="flex justify-center w-[1440px] h-[400px]">
                <CardContent className="flex items-center justify-center w-full h-full">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}