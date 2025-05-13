import React from "react"

export default function ProductDescription({ text }: { text: string }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Mô tả sản phẩm</h2>
      <p className="text-gray-700 whitespace-pre-line">{text}</p>
    </div>
  )
}