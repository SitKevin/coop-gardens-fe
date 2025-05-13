"use client"

import { SWRConfig } from "swr";
import { useProfile } from "@/hooks/useProfile";
import FarmerDashboard from "@/components/dashboard/FarmerDashboard";
import UserDashboard from "@/components/dashboard/UserDashboard";

const mockProfile = {
  id: "1",
  name: "Nguyễn Văn A",
  email: "a@example.com",
  role: "farmer", // đổi thành "user" để preview UserDashboard
}

function DashboardInner() {
  const { profile, isLoading } = useProfile()

  if (isLoading) return <div>Loading...</div>
  if (!profile) return <div>Vui lòng đăng nhập</div>

  return profile.role === "farmer"
    ? <FarmerDashboard profile={profile} />
    : <UserDashboard profile={profile} />
}

export default function DashboardPage() {
  return (
    <SWRConfig value={{ fallback: { "/auth/profile": mockProfile } }}>
      <DashboardInner />
    </SWRConfig>
  )
}