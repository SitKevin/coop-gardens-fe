'use client'
import { LoginForm } from "@/components/login-page/login-form";

export default function LoginPage() {
    return (
      <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
        <div className="w-full max-w-xm md:max-w-6xl">
          <LoginForm />
        </div>
      </div>
    )
  }