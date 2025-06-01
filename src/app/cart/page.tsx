"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import CartList from "@/components/cart/CartList"
import OrderSummary from "@/components/cart/OrderSummary"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/context/AuthContext"

// Define proper types for cart items
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
  inventory_id?: number;
}

// Define API response type
interface CartApiResponse {
  items: Array<{
    id: number;
    product_name: string;
    price: number;
    quantity: number;
    image_url?: string;
    inventory_id: number;
  }>;
}

export default function CartPage() {
  const { token } = useAuth()
  const [items, setItems] = useState<CartItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCart = async () => {
      try {
        setLoading(true)
        
        // Try to get cart from API
        if (token) {
          try {
            const response = await fetch("/api/v2/product-order/cart", {
              headers: {
                "Authorization": `Bearer ${token}`
              }
            })
            
            if (response.ok) {
              const data = await response.json() as CartApiResponse
              const cartItems = data.items?.map((item) => ({
                id: item.id.toString(),
                name: item.product_name || "Sản phẩm",
                price: item.price || 0,
                quantity: item.quantity || 1,
                imageUrl: item.image_url || "/female-farmer.jpg",
                inventory_id: item.inventory_id
              })) || []
              
              setItems(cartItems)
              setLoading(false)
              return
            }
          } catch (err) {
            console.error("Error fetching cart from API:", err)
          }
        }
        
        // Fallback to localStorage for guests or if API fails
        const localCart = localStorage.getItem('guest_cart')
        if (localCart) {
          setItems(JSON.parse(localCart))
        } else {
          setItems([])
        }
      } finally {
        setLoading(false)
      }
    }

    fetchCart()
  }, [token])

  // Update quantity handler
  const updateQty = (id: string, qty: number) => {
    const updatedItems = items.map(it => it.id === id ? { ...it, quantity: qty } : it)
    setItems(updatedItems)
    
    // Also update localStorage
    localStorage.setItem('guest_cart', JSON.stringify(updatedItems))
  }

  // Remove item handler
  const removeItem = (id: string) => {
    const updatedItems = items.filter(it => it.id !== id)
    setItems(updatedItems)
    
    // Also update localStorage
    localStorage.setItem('guest_cart', JSON.stringify(updatedItems))
  }

  // Loading state
  if (loading) {
    return (
      <div className="max-w-[1200px] mx-auto py-8 px-4 flex justify-center items-center min-h-[400px]">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-green-500 mb-4"></div>
          <p>Đang tải giỏ hàng...</p>
        </div>
      </div>
    )
  }

  // Empty cart state
  if (items.length === 0) {
    return (
      <div className="max-w-[1200px] mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-6">Giỏ Hàng</h1>
        <div className="bg-white rounded-lg shadow p-8 text-center flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          <h2 className="text-2xl font-semibold mb-4">Giỏ hàng đang trống</h2>
          <p className="text-gray-500 mb-6">Hãy thêm sản phẩm vào giỏ hàng để mua sắm</p>
          <Link href="/product">
            <Button className="bg-green-500 hover:bg-green-600">Tiếp tục mua sắm</Button>
          </Link>
        </div>
      </div>
    )
  }

  // Regular cart view with items
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
          <Link href="/checkout">
            <Button className="w-full bg-green-600 hover:bg-green-700">
              Tiến hành thanh toán
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}