import { callApi } from "./apiClient"
import { RegisterCredentials, AuthResponse } from "./types"

export function signup(creds: RegisterCredentials): Promise<AuthResponse> {
  return callApi("/v1/auth/register", {
    method: "POST",
    body: JSON.stringify({ ...creds, role: creds.role || "user" }),
  })
}