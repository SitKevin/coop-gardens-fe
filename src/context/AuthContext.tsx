"use client"
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react"
import { useRouter } from "next/navigation"
import type { User, LoginCredentials, AuthResponse } from "@/services/auth/types"
import { login as loginService } from "@/services/auth/login"
import { getProfile } from "@/services/auth/profile"
import {
  saveSession,
  clearSession,
  getCurrentUser,
  getAuthToken,
} from "@/services/auth/session"

interface AuthContextType {
  user: User | null
  login: (creds: LoginCredentials) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: async () => {},
  logout: () => {},
})

export function AuthProvider({ children }: { children: ReactNode }) {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)

  // restore on load
  useEffect(() => {
    const token = getAuthToken()
    if (!token) return
    const u = getCurrentUser()
    if (u) {
      setUser(u)
    } else {
      getProfile()
        .then((p) => {
          const u2: User = {
            id: p.id,
            email: p.email,
            full_name: p.full_name,
            role: p.role,
          }
          saveSession({ token, user: u2 })
          setUser(u2)
        })
        .catch(() => clearSession())
    }
  }, [])

  // login → lưu session + cập nhật state
  async function login(creds: LoginCredentials) {
    const auth: AuthResponse = await loginService(creds)
    saveSession(auth)
    setUser(auth.user)
  }

  function logout() {
    clearSession()
    setUser(null)
    router.push("/login")
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)