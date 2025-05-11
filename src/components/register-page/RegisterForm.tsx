"use client"

import { useRouter } from "next/navigation"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { FormCard } from "./FormCard"
import { RenderField } from "./FormFields"
import { Form } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { register as registerUser } from "@/api/auth" // Rename to avoid conflict

type RegisterValues = {
  full_name: string
  email: string
  password: string
  confirm: string
}

export function RegisterForm() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  const form = useForm<RegisterValues>({
    defaultValues: { full_name: "", email: "", password: "", confirm: "" },
  })

  const onSubmit = async (data: RegisterValues) => {
    if (data.password !== data.confirm) {
      form.setError("confirm", { type: "manual", message: "Mật khẩu không khớp" })
      return
    }
    
    setIsSubmitting(true)
    setError(null)
    
    try {
      // Call the register function from our auth API
      const response = await registerUser({
        full_name: data.full_name,
        email: data.email,
        password: data.password,
      })
      
      // Store authentication data
      localStorage.setItem("token", response.token)
      localStorage.setItem("user", JSON.stringify(response.user))
      
      // Redirect to dashboard or home page after successful registration
      router.push("/dashboard")
    } catch (err) {
      console.error(err)
      setError(err instanceof Error ? err.message : "Đã xảy ra lỗi khi đăng ký")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <FormCard title="Đăng Ký Tài Khoản">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-2 rounded-md mb-4">
          {error}
        </div>
      )}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <RenderField<RegisterValues>
            control={form.control}
            name="full_name"
            label="Họ và tên"
            placeholder="Nguyễn Văn A"
            disabled={isSubmitting}
          />
          <RenderField<RegisterValues>
            control={form.control}
            name="email"
            type="email"
            label="Email"
            placeholder="you@example.com"
            disabled={isSubmitting}
          />
          <RenderField<RegisterValues>
            control={form.control}
            name="password"
            type="password"
            label="Mật khẩu"
            disabled={isSubmitting}
          />
          <RenderField<RegisterValues>
            control={form.control}
            name="confirm"
            type="password"
            label="Xác nhận mật khẩu"
            disabled={isSubmitting}
          />
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Đang đăng ký..." : "Đăng Ký"}
          </Button>
        </form>
      </Form>
      <p className="mt-4 text-sm text-center text-gray-600">
        Bạn đã có tài khoản?{" "}
        <Link href="/login" className="text-green-600 hover:underline">
          Đăng nhập
        </Link>
      </p>
    </FormCard>
  )
}