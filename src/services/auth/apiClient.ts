"use client"
export const API_BASE = "https://coop-gardens-be-no2t.onrender.com"
export async function callApi<T>(path: string, opts: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...opts,
  })
  if (!res.ok) throw new Error((await res.json()).message)
  return res.json()
}