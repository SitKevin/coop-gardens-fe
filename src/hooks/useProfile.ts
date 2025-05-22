"use client"
import useSWR from "swr"
import { User } from "@/services/auth/types"
import { getProfile } from "@/services/auth/profile"
import { getAuthToken } from "@/services/auth/session"

export function useProfile() {
  // Chỉ fetch khi có token
  const token = getAuthToken()
  const shouldFetch = !!token

  const { data, error, isLoading, mutate } = useSWR<User>(
    shouldFetch ? "/api/profile" : null, 
    async () => {
      try {
        // Gọi API từ service đã định nghĩa
        return await getProfile()
      } catch (error) {
        console.error("Failed to fetch profile:", error)
        throw error
      }
    },
    {
      revalidateOnFocus: false, // Không tự động fetch khi focus lại tab
      dedupingInterval: 60000,   // Cache trong 1 phút
      errorRetryCount: 2,        // Thử lại 2 lần nếu lỗi
    }
  )

  return {
    profile: data,
    isLoading,
    error,
    mutate
  }
}