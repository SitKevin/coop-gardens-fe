import { callApi } from "./apiClient"
import type { LoginCredentials, AuthResponse, User } from "./types"
import { getProfile } from "./profile"

export async function login(creds: LoginCredentials): Promise<AuthResponse> {
  // 1) Lấy token
  const { token } = await callApi<{ token: string }>("/v1/auth/login", {
    method: "POST",
    body: JSON.stringify(creds),
  })
  localStorage.setItem("token", token)

  // 2) Fetch profile, map về User
  const p: User = await getProfile()
  const user: User = {
    id: p.id,
    email: p.email,
    full_name: p.full_name,
    role: p.role,
  }
  return { token, user }
}