"use client"

import Link from "next/link"
import Image from "next/image"

const mocks = [
  { id: "2", name: "Táo đỏ Hòa Bình", price: 130000, img: "/monki.png" },
  { id: "3", name: "Táo Fuji Nhật", price: 200000, img: "/monki.png" },
  { id: "4", name: "Táo Gala Mỹ", price: 170000, img: "/monki.png" },
]

export default function RelatedProducts() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Sản phẩm liên quan</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {mocks.map((p) => (
          <Link
            key={p.id}
            href={`/product/${p.id}`}
            className="block border rounded overflow-hidden hover:shadow-lg transition"
          >
            <div className="relative w-full h-48">
              <Image src={p.img} alt={p.name} fill className="object-cover" />
            </div>
            <div className="p-4">
              <h3 className="font-medium">{p.name}</h3>
              <p className="text-green-600 font-bold">
                {p.price.toLocaleString()} đ
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}