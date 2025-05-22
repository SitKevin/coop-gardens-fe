"use client"
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react"
import { useRouter } from "next/navigation"
import { jwtDecode } from "jwt-decode"
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
  token: string | null
  isAuthenticated: boolean
  login: (creds: LoginCredentials) => Promise<void>
  logout: () => void
  updateUser: (userData: Partial<User>) => void
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  token: null,
  isAuthenticated: false,
  login: async () => {},
  logout: () => {},
  updateUser: () => {},
})

export function AuthProvider({ children }: { children: ReactNode }) {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)

  // restore on load
  useEffect(() => {
    const storedToken = getAuthToken()
    if (!storedToken) return
    
    setToken(storedToken)
    
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
          saveSession({ token: storedToken, user: u2 })
          setUser(u2)
        })
        .catch(() => {
          clearSession()
          setToken(null)
        })
    }
  }, [])

  // login → lưu session + cập nhật state
  async function login(creds: LoginCredentials) {
    const auth: AuthResponse = await loginService(creds)
    saveSession(auth)
    setUser(auth.user)
    setToken(auth.token)
  }

  function logout() {
    clearSession()
    setUser(null)
    setToken(null)
    router.push("/login")
  }
  
  // Hàm cập nhật thông tin người dùng
  const updateUser = (userData: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...userData }
      setUser(updatedUser)
      
      // Cập nhật thông tin user trong session storage
      const currentToken = getAuthToken()
      if (currentToken) {
        saveSession({ token: currentToken, user: updatedUser })
      }
    }
  }

  return (
    <AuthContext.Provider value={{ 
      user, 
      token, 
      isAuthenticated: !!token, 
      login, 
      logout,
      updateUser
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)