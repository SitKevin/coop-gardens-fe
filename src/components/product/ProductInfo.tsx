"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Star } from "lucide-react"

export default function ProductInfo({
  name,
  price,
  rating,
}: {
  name: string
  price: number
  rating: number
}) {
  const [qty, setQty] = useState(1)
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-semibold">{name}</h1>
      <div className="flex items-center space-x-2">
        <Star className="h-5 w-5 text-yellow-400" />
        <span className="font-medium">{rating.toFixed(1)}</span>
      </div>
      <p className="text-2xl font-bold text-green-600">
        {price.toLocaleString()} đ
      </p>
      <div className="flex items-center space-x-4">
        <Input
          type="number"
          min={1}
          value={qty}
          onChange={(e) => setQty(Number(e.target.value))}
          className="w-20"
        />
        <Button className="px-6">Thêm vào giỏ</Button>
      </div>
    </div>
  )
}