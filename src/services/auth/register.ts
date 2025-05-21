import { callApi } from "./apiClient"
import { RegisterCredentials, RegisterResponse } from "./types"

export function signup(
  creds: RegisterCredentials
): Promise<RegisterResponse> {
  const { email, password, full_name, role = "User" } = creds

  return callApi<RegisterResponse>("/v1/auth/signup", {
    method: "POST",
    body: JSON.stringify({ email, password, full_name, role }),
  })
}