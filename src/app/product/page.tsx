"use client"

import { useEffect, useState } from "react"
import { CategoryFilter } from "@/components/product-page/category"
import { getProducts } from "@/services/products/products"
import { Product } from "@/services/products/types"
import { useAuth } from "@/context/AuthContext"
import Image from "next/image"
import Link from "next/link"
import { mockProducts } from "./mock" 


// Set this to true to use mock data, false to use real API
const USE_MOCK_DATA = false

export default function ProductPage() {
  const { token } = useAuth()
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        
        if (USE_MOCK_DATA) {
          // Use mock data
          setTimeout(() => {
            setProducts(mockProducts);
            setLoading(false);
          }, 800); // Add a delay to simulate API call
        } else {
          // Use real API
          const response = await getProducts()
          setProducts(response.products || response || [])
          setLoading(false)
        }
      } catch (err) {
        console.error("Error fetching products:", err)
        setError("Failed to load products. Please try again later.")
        setLoading(false)
      }
    }

    fetchProducts()
  }, [token])

  return (
    <div className="w-full max-w-[1440px] mx-auto">
      {USE_MOCK_DATA && (
        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-4">
          <p className="text-yellow-700">
            <strong>Test Mode:</strong> Using mock data. Set USE_MOCK_DATA to false to use real API.
          </p>
        </div>
      )}
      
      <div className="flex flex-col md:flex-row">
        {/* Sidebar với danh mục sản phẩm */}
        <div className="md:w-80 md:sticky md:top-[64px] md:self-start md:h-[calc(100vh-130px)] md:overflow-y-auto">
          <div className="hidden md:block p-4">
            <CategoryFilter />
          </div>
          
          {/* Filter cho mobile */}
          <div className="md:hidden mb-6">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="font-bold text-lg mb-2">Lọc sản phẩm</h2>
              <select className="w-full p-2 border rounded">
                <option>Tất cả danh mục</option>
                <option>Cây ăn quả</option>
                <option>Rau củ quả</option>
                <option>Cây cảnh</option>
                <option>Hạt giống</option>
                <option>Phân bón</option>
              </select>
            </div>
          </div>
        </div>
        
        {/* Main content */}
        <div className="flex-1 px-2 md:px-4 py-6">
          {/* Tiêu đề căn giữa */}
          <div className="w-full flex justify-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-center">Sản phẩm</h1>
          </div>
          
          {/* Loading state */}
          {loading && (
            <div className="flex justify-center items-center min-h-[400px]">
              <div className="animate-pulse text-xl">Loading products...</div>
            </div>
          )}
          
          {/* Error state */}
          {error && !loading && (
            <div className="flex justify-center items-center min-h-[400px]">
              <div className="text-red-500 text-xl">{error}</div>
            </div>
          )}
          
          {/* No products found */}
          {!loading && !error && (!products || products.length === 0) && (
            <div className="flex justify-center items-center min-h-[400px]">
              <div className="text-gray-500 text-xl">No products available</div>
            </div>
          )}
          
          {/* Danh sách sản phẩm */}
          {!loading && !error && products && products.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {products.map((product) => (
                <Link 
                  href={`/product/${product.id}`}
                  key={product.id} 
                  className="border rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow bg-white flex flex-col"
                >
                  <div className="aspect-square relative bg-gray-100 rounded-lg mb-4 overflow-hidden">
                    <Image 
                      src={"/placeholder-image.png"} 
                      alt={product.name || "Product image"}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{product.name || "Unnamed product"}</h3>
                  <p className="text-gray-600 text-base mt-1 flex-grow">
                    {product.description?.substring(0, 100) || "No description available"}
                    {product.description && product.description.length > 100 ? "..." : ""}
                  </p>
                  <div className="mt-4 text-xl font-bold text-green-600">{(product.price || 0).toLocaleString()} đ</div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}