"use client"
import type { AuthResponse, User } from "./types"

export function saveSession(auth: AuthResponse): void {
  if (typeof window === 'undefined') return
  localStorage.setItem("token", auth.token)
  localStorage.setItem("user", JSON.stringify(auth.user))
}

export function clearSession(): void {
  if (typeof window === 'undefined') return
  localStorage.removeItem("token")
  localStorage.removeItem("user")
}

export function getCurrentUser(): User | null {
  if (typeof window === 'undefined') return null
  
  const s = localStorage.getItem("user")
  if (!s) return null
  try { return JSON.parse(s) } catch { return null }
}

export function getAuthToken(): string | null {
  if (typeof window === 'undefined') return null
  return localStorage.getItem("token")
}