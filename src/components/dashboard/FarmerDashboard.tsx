import { PersonalInfo } from "./PersonalInfo"
import { User } from "@/services/auth/types"

export default function FarmerDashboard({ profile }: { profile: User }) {
  // Phần còn lại của component...
  return (
    <div className="p-6 space-y-6">
      <PersonalInfo profile={profile} />
      {/* Nội dung khác */}
    </div>
  )
}