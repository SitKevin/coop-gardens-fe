import { callApi } from "./apiClient"
import { LoginCredentials, LoginResponse } from "./types"

export function login(creds: LoginCredentials): Promise<LoginResponse> {
  return callApi("/v1/auth/login", {
    method: "POST",
    body: JSON.stringify(creds),
  })
}