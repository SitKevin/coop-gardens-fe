import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function PersonalInfo({ profile }: { profile: any }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Thông tin cá nhân</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div>Họ tên: {profile.name}</div>
        <div>Email: {profile.email}</div>
        <div>Role: {profile.role}</div>
      </CardContent>
    </Card>
  )
}