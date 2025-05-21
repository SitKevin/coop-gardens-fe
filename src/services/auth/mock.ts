import { LoginCredentials, RegisterCredentials, AuthResponse } from "./types"

export async function mockLogin(creds: LoginCredentials): Promise<AuthResponse> {
  return {
    token: "mock-token",
    user: { email: creds.email, full_name: "Người Dùng Mock", role: "user" },
  }
}

export async function mockRegister(
  creds: RegisterCredentials
): Promise<AuthResponse> {
  return {
    token: "mock-token",
    user: { email: creds.email, full_name: creds.full_name, role: creds.role || "user" },
  }
}