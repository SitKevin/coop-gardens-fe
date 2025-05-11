"use client"

import CartItem from "./CartItem"
import { Card } from "@/components/ui/card"

export type CartItemType = {
  id: string
  name: string
  price: number
  quantity: number
  imageUrl: string
}

export default function CartList({
  items,
  onQtyChange,
  onRemove,
}: {
  items: CartItemType[]
  onQtyChange: (id: string, qty: number) => void
  onRemove: (id: string) => void
}) {
  if (items.length === 0)
    return <p className="text-center text-gray-500">Giỏ hàng trống</p>

  return (
    <div className="space-y-4">
      {items.map(item => (
        <Card key={item.id} className="flex p-4">
          <CartItem
            item={item}
            onQtyChange={onQtyChange}
            onRemove={onRemove}
          />
        </Card>
      ))}
    </div>
  )
}