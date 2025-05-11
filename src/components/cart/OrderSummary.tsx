"use client"

import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CartItemType } from "./CartList"

export default function OrderSummary({ items }: { items: CartItemType[] }) {
  const subtotal = items.reduce((sum, it) => sum + it.price * it.quantity, 0)
  const shipping = items.length ? 20000 : 0
  const total = subtotal + shipping

  return (
    <Card className="p-4">
      <CardHeader>
        <CardTitle>Tóm Tắt Đơn Hàng</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex justify-between">
          <span>Thành tiền:</span>
          <span>{subtotal.toLocaleString()} đ</span>
        </div>
        <div className="flex justify-between">
          <span>Phí vận chuyển:</span>
          <span>{shipping.toLocaleString()} đ</span>
        </div>
        <hr />
        <div className="flex justify-between font-bold text-lg">
          <span>Tổng cộng:</span>
          <span>{total.toLocaleString()} đ</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Thanh Toán</Button>
      </CardFooter>
    </Card>
  )
}