import { User, AuthResponse } from "./types"

export function saveSession(data: AuthResponse) {
  localStorage.setItem("token", data.token)
  localStorage.setItem("user", JSON.stringify(data.user))
}

export function getCurrentUser(): User | null {
  const u = localStorage.getItem("user")
  return u ? JSON.parse(u) : null
}

export function isAuthenticated(): boolean {
  return !!localStorage.getItem("token")
}

export function logout() {
  localStorage.removeItem("token")
  localStorage.removeItem("user")
}