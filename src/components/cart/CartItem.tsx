import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Trash2 } from "lucide-react"
import { CartItemType } from "./CartList"

export default function CartItem({
  item,
  onQtyChange,
  onRemove,
}: {
  item: CartItemType
  onQtyChange: (id: string, qty: number) => void
  onRemove: (id: string) => void
}) {
  return (
    <div className="flex w-full items-center">
      {/* Ảnh sản phẩm */}
      <div className="w-24 h-24 relative flex-shrink-0">
        <Image
          src={item.imageUrl}
          alt={item.name}
          fill
          className="object-cover rounded"
        />
      </div>

      {/* Thông tin & controls đẩy lề phải */}
      <div className="flex-1 flex justify-between pl-4">
        <div className="text-left">
          <h2 className="font-medium text-lg">{item.name}</h2>
          <p className="text-green-600 font-bold">
            {item.price.toLocaleString()} đ
          </p>
        </div>
        <div className="flex items-center justify-end space-x-4">
        <span className="text-sm font-medium">Số lượng:</span>
          <Input
            type="number"
            min={1}
            value={item.quantity}
            onChange={e => onQtyChange(item.id, Number(e.target.value))}
            className="w-16"
          />
          <Button
            variant="ghost"
            size="sm"
            className="text-red-500 flex items-center"
            onClick={() => onRemove(item.id)}
          >
            <Trash2 className="mr-1 h-4 w-4" />
            Xóa
          </Button>
        </div>
      </div>
    </div>
  )
}