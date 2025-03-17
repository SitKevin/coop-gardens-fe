import { CarouselDemo, CarouselSize, ModeToggle } from "@/app/home/home"

export default function Home () {
  return (
    <div>
      <h1 className="text-4xl font-semibold text-center my-4">
        <img
          src={`/homeImage/h1.jpg`}
          alt={`h1`}
          className="w-full h-full object-cover"
        />
        <hr className="my-4 border-t-2 border-gray-300 w-[1152px] mx-auto" />Welcome to Coop Gardens
      </h1>
      <CarouselDemo />
      <p className="text-3xl font-semibold text-center my-4">Sản phẩm</p>
      <CarouselSize />
      <div className="flex justify-center my-4">
        <ModeToggle />
      </div>
    </div>
  )
} 
