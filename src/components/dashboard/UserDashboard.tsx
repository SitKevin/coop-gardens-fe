import { PersonalInfo } from "./PersonalInfo"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function UserDashboard({ profile }: { profile: any }) {
  const router = useRouter()
  return (
    <div className="p-6 space-y-6">
      <PersonalInfo profile={profile} />
      <Button onClick={() => router.push("/become-farmer")}>
        Đăng ký làm nông dân
      </Button>
    </div>
  )
}