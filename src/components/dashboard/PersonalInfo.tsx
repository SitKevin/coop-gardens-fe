import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { User } from "@/services/auth/types"

export function PersonalInfo({ profile }: { profile: User }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Thông tin cá nhân</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div>Họ tên: {profile.full_name}</div>
        <div>Email: {profile.email}</div>
        <div>Role: {profile.role}</div>
        {profile.dashboard_url && (
          <div>Dashboard: {profile.dashboard_url}</div>
        )}
      </CardContent>
    </Card>
  )
}