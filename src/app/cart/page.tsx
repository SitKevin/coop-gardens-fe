"use client"

import { useState } from "react"
import Link from "next/link"
import CartList from "@/components/cart/CartList"
import OrderSummary from "@/components/cart/OrderSummary"
import { Button } from "@/components/ui/button"

export default function CartPage() {
  const [items, setItems] = useState([
    { id: "1", name: "Táo hữu cơ", price: 120000, quantity: 2, imageUrl: "/female-farmer.jpg" },
    { id: "2", name: "Rau muống sạch", price: 45000, quantity: 1, imageUrl: "/female-farmer.jpg" },
    { id: "3", name: "Rau muống sạch", price: 45000, quantity: 1, imageUrl: "/female-farmer.jpg" },
  ])

  const updateQty = (id: string, qty: number) => {
    setItems(prev => prev.map(it => it.id === id ? { ...it, quantity: qty } : it))
  }
  const removeItem = (id: string) => setItems(prev => prev.filter(it => it.id !== id))

  return (
    <div className="max-w-[1200px] mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Giỏ Hàng</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <CartList items={items} onQtyChange={updateQty} onRemove={removeItem} />
        </div>
        <div className="space-y-4">
          <OrderSummary items={items} />
          <Link href="/product">
            <Button className="w-full bg-green-400">Tiếp tục mua sắm</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}