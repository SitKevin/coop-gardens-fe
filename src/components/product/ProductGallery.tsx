"use client"

import { useState } from "react"
import Image from "next/image"

export default function ProductGallery({ images }: { images: string[] }) {
  const [main, setMain] = useState(images[0])
  return (
    <div className="space-y-4">
      <div className="w-full h-[400px] relative rounded overflow-hidden">
        <Image src={main} alt="main" fill className="object-cover" />
      </div>
      <div className="flex space-x-2">
        {images.map((src) => (
          <div
            key={src}
            onClick={() => setMain(src)}
            className={`w-20 h-20 relative rounded cursor-pointer overflow-hidden border ${
              main === src ? "border-green-600" : "border-gray-300"
            }`}
          >
            <Image src={src} alt="" fill className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  )
}