import { callApi } from "./apiClient"
import type { User } from "./types"

export async function getProfile(): Promise<User> {
  const token = localStorage.getItem("token") || ""
  
  // Gọi API với endpoint chính xác
  const response = await callApi<any>("/v1/common/profile", {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  })
  
  // Log để debug
  console.log("Profile API response:", response)
  
  // Xử lý response từ API để map sang kiểu User
  // Nếu response trả về dạng { user: { ... } }
  const userData = response.user || response
  
  // Map dữ liệu vào User object
  const user: User = {
    id: userData.id || "",
    email: userData.email || "",
    full_name: userData.full_name || "",
    // Lấy role từ mảng roles nếu có, nếu không thì lấy từ trường role
    role: userData.roles?.[0]?.name || userData.role || "",
  }
  
  return user
}