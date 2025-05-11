import { useState, useEffect } from "react"

type Profile = {
  id: string
  name: string
  email: string
  role: "farmer" | "user"
}

const mockProfile: Profile = {
  id: "1",
  name: "Nguyễn Văn A",
  email: "a@example.com",
  role: "farmer", // Hoặc "farmer"
}

export function useProfile() {
  const [profile, setProfile] = useState<Profile | null>(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    // Giả lập delay như gọi API
    const t = setTimeout(() => {
      setProfile(mockProfile)
      setLoading(false)
    }, 200) 
    return () => clearTimeout(t)
  }, [])

  return { profile, isLoading }
}