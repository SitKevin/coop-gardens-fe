import { callApi } from "./apiClient"
import { LoginCredentials, AuthResponse } from "./types"

export function login(creds: LoginCredentials): Promise<AuthResponse> {
  return callApi("/v1/auth/login", {
    method: "POST",
    body: JSON.stringify(creds),
  })
}