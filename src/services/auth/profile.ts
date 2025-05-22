"use client"
import { callApi } from "./apiClient"
import type { User, ProfileApiResponse } from "./types"
import { getAuthToken } from "./session"

export async function getProfile(): Promise<User> {
  const token = getAuthToken() || "" 
  
  // Sử dụng type ProfileApiResponse từ types.ts
  const response = await callApi<ProfileApiResponse>("/v1/common/profile", {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  })
  
  console.log("Profile API response:", response)
  
  const userData = response.user || response
  const firstRole = userData.roles?.[0] || {}
  
  const user: User = {
    id: userData.id || "",
    email: userData.email || "",
    full_name: userData.full_name || "",
    // Lấy role từ mảng roles, xử lý cả viết hoa và thường
    role: firstRole.Name || "User",
    dashboard_url: firstRole.dashboard_url || "",
  }
  
  return user
}