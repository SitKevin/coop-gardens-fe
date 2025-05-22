"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useProfile } from "@/hooks/useProfile"
import FarmerDashboard from "@/components/dashboard/FarmerDashboard"
import UserDashboard from "@/components/dashboard/UserDashboard"
import { useAuth } from "@/context/AuthContext"

export default function DashboardPage() {
  const router = useRouter()
  const { isAuthenticated } = useAuth()
  const { profile, isLoading, error, mutate } = useProfile()

  // Nếu chưa đăng nhập, chuyển đến trang login
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/login?redirect=/dashboard")
    }
  }, [isAuthenticated, isLoading, router])

  // Xử lý loading
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    )
  }

  // Xử lý lỗi
  if (error) {
    return (
      <div className="p-6 bg-red-50 rounded-lg text-center">
        <h2 className="text-xl font-semibold text-red-600">Đã xảy ra lỗi</h2>
        <p className="mt-2">{error.message}</p>
        <button 
          className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md"
          onClick={() => mutate()} // Thử load lại
        >
          Thử lại
        </button>
      </div>
    )
  }

  // Xử lý chưa đăng nhập hoặc chưa load được profile
  if (!profile) {
    return (
      <div className="p-6 bg-yellow-50 rounded-lg text-center">
        <h2 className="text-xl font-semibold">Chưa đăng nhập</h2>
        <p className="mt-2">Vui lòng đăng nhập để xem bảng điều khiển</p>
        <button 
          className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md"
          onClick={() => router.push("/login?redirect=/dashboard")}
        >
          Đăng nhập
        </button>
      </div>
    )
  }

  // Hiển thị dashboard tương ứng với role
  return (
    <div className="container mx-auto py-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      {profile.role.toLowerCase() === "farmer" ? (
        <FarmerDashboard profile={profile} />
      ) : (
        <UserDashboard profile={profile} />
      )}
    </div>
  )
}