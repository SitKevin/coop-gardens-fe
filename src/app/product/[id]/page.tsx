"use client"

import ProductGallery from "@/components/product/ProductGallery"
import ProductInfo from "@/components/product/ProductInfo"
import ProductDescription from "@/components/product/ProductDescription"
import RelatedProducts from "@/components/product/RelatedProducts"

export default function ProductDetailPage() {
  // Mock data
  const product = {
    id: "1",
    name: "Chimpanzini bananini - woa woa",
    price: 150000,
    images: [
      "/monki.png",
      "/monki.png",
      "/monki.png",
    ],
    rating: 4.7,
    description: `
      monki monki monki monki monki monki monki monki monki
      monki monki monki monki monki monki monki monki monki
        monki monki monki monki monki monki monki monki monki
    `,
  }
  return (
    <div className="max-w-[1200px] mx-auto py-8 px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
      <ProductGallery images={product.images} />
      <div className="space-y-6">
        <ProductInfo
          name={product.name}
          price={product.price}
          rating={product.rating}
        />
        <ProductDescription text={product.description} />
      </div>
      <div className="lg:col-span-2 mt-12">
        <RelatedProducts />
      </div>
    </div>
  )
}