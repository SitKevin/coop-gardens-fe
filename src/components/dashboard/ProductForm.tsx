"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ProductForm() {
  const [name, setName] = useState("")

  const handleSubmit = () => {
    // chỉ demo UI, không gọi API
    console.log("Thêm sản phẩm:", name)
    setName("")
  }

  return (
    <div className="flex space-x-2">
      <Input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Tên sản phẩm mới"
      />
      <Button onClick={handleSubmit}>Thêm</Button>
    </div>
  )
}