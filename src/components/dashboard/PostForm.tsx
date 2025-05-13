"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function PostForm() {
  const [title, setTitle] = useState("")

  const handleSubmit = () => {
    // chỉ demo UI, không gọi API
    console.log("Thêm bài viết:", title)
    setTitle("")
  }

  return (
    <div className="flex space-x-2">
      <Input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Tiêu đề bài viết"
      />
      <Button onClick={handleSubmit}>Thêm</Button>
    </div>
  )
}