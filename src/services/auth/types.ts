/** payload gửi lên */
export interface LoginCredentials {
  email: string
  password: string
}
export interface RegisterCredentials {
  email: string
  password: string
  full_name: string
  role?: string
}

/** role đơn giản, tuy nhiên app chỉ cần 1 role là string trên User */
export interface Role {
  id: number
  name: string
  dashboard_url: string
}

/** Response API từ backend cho endpoint profile */
export interface ProfileApiResponse {
  id?: string
  email?: string
  full_name?: string
  is_verified?: boolean
  created_at?: string
  updated_at?: string
  // Backend trả về roles có ID viết hoa
  roles?: Array<{
    ID?: number
    Name?: string
    dashboard_url?: string
  }>
  // Trường hợp nested user
  user?: {
    id: string
    email: string
    full_name: string
    roles: Array<{
      ID: number
      Name: string
      dashboard_url?: string
    }>
  }
}

/** User mà UI sử dụng – mỗi user chỉ có 1 role (string) */
export interface User {
  id: string
  email: string
  full_name: string
  role: string
  dashboard_url?: string
}

/** Response chung của login/register */
export interface AuthResponse {
  token: string
  user: User
}

/** Kết quả signup giống AuthResponse */
export type RegisterResponse = AuthResponse