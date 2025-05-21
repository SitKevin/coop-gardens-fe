import type { AuthResponse, User } from "./types"

export function saveSession(auth: AuthResponse): void {
  localStorage.setItem("token", auth.token)
  localStorage.setItem("user", JSON.stringify(auth.user))
}

export function clearSession(): void {
  localStorage.removeItem("token")
  localStorage.removeItem("user")
}

export function getCurrentUser(): User | null {
  const s = localStorage.getItem("user")
  if (!s) return null
  try { return JSON.parse(s) } catch { return null }
}

export function getAuthToken(): string | null {
  return localStorage.getItem("token")
}