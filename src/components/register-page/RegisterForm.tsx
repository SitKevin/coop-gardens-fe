"use client"

import { useRouter } from "next/navigation"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { FormCard } from "./FormCard"
import { RenderField } from "./FormFields"
import { Form } from "@/components/ui/form"
import { Button } from "@/components/ui/button"

type RegisterValues = {
  name: string
  email: string
  password: string
  confirm: string
}

export function RegisterForm() {
  const router = useRouter()
  const form = useForm<RegisterValues>({
    defaultValues: { name: "", email: "", password: "", confirm: "" },
  })

  const onSubmit = (data: RegisterValues) => {
    if (data.password !== data.confirm) {
      form.setError("confirm", { type: "manual", message: "Mật khẩu không khớp" })
      return
    }
    console.log("Register data:", data)
    // TODO: gọi API, sau đó redirect
    router.push("/login")
  }

  return (
    <FormCard title="Đăng Ký Tài Khoản">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <RenderField<RegisterValues>
            control={form.control}
            name="name"
            label="Họ và tên"
            placeholder="Nguyễn Văn A"
          />
          <RenderField<RegisterValues>
            control={form.control}
            name="email"
            type="email"
            label="Email"
            placeholder="you@example.com"
          />
          <RenderField<RegisterValues>
            control={form.control}
            name="password"
            type="password"
            label="Mật khẩu"
          />
          <RenderField<RegisterValues>
            control={form.control}
            name="confirm"
            type="password"
            label="Xác nhận mật khẩu"
          />
          <Button type="submit" className="w-full">
            Đăng Ký
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