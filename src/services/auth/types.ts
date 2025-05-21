export interface LoginCredentials {
  email: string
  password: string
}

export interface RegisterCredentials {
  email: string
  full_name: string
  role?: string
  password: string
}

export interface User {
  email: string
  full_name: string
  role: string
}

export interface AuthResponse {
  token: string
  user: User
}