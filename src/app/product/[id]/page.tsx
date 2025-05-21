"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import ProductGallery from "@/components/product/ProductGallery"
import ProductInfo from "@/components/product/ProductInfo"
import ProductDescription from "@/components/product/ProductDescription"
import RelatedProducts from "@/components/product/RelatedProducts"
import { getProductById } from "@/services/products/products"
import { Product } from "@/services/products/types"
import { useAuth } from "@/context/AuthContext"
import { mockProducts } from "../mock"

// Set this to true to use mock data, false to use real API
const USE_MOCK_DATA = false;

export default function ProductDetailPage() {
  const { id } = useParams()
  const { token } = useAuth()
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true)
        
        if (USE_MOCK_DATA) {
          // Use mock data - find product by id from mock data
          setTimeout(() => {
            const foundProduct = mockProducts.find(p => p.id === Number(id));
            if (foundProduct) {
              setProduct(foundProduct);
            } else {
              setError("Product not found");
            }
            setLoading(false);
          }, 800); // Add a delay to simulate API call
        } else {
          // Use real API
          const response = await getProductById(Number(id))
          setProduct(response.product)
          setLoading(false)
        }
      } catch (err) {
        console.error("Error fetching product:", err)
        setError("Failed to load product. Please try again later.")
        setLoading(false)
      }
    }

    if (id) {
      fetchProduct()
    }
  }, [id, token])

  // Loading state
  if (loading) {
    return (
      <div className="max-w-[1200px] mx-auto py-8 px-4 flex justify-center items-center min-h-[60vh]">
        <div className="animate-pulse text-xl">Loading product details...</div>
      </div>
    )
  }

  // Error state
  if (error || !product) {
    return (
      <div className="max-w-[1200px] mx-auto py-8 px-4 flex justify-center items-center min-h-[60vh]">
        <div className="text-red-500 text-xl">{error || "Product not found"}</div>
      </div>
    )
  }

  const placeholderImages = ["/placeholder-image.png"]

  return (
    <div className="max-w-[1200px] mx-auto py-8 px-4">
      {USE_MOCK_DATA && (
        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-8">
          <p className="text-yellow-700">
            <strong>Test Mode:</strong> Using mock data. Set USE_MOCK_DATA to false to use real API.
          </p>
        </div>
      )}
    
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ProductGallery images={placeholderImages} />
        <div className="space-y-6">
          <ProductInfo
            name={product.name}
            price={product.price}
            rating={4.5} // Default rating since API doesn't provide it
          />
          <ProductDescription text={product.description || "No description available"} />
        </div>
        <div className="lg:col-span-2 mt-12">
          <RelatedProducts />
        </div>
      </div>
    </div>
  )
}