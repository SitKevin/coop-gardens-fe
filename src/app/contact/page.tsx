"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
// Nếu muốn header, import NavigationMenu hoặc Menubar

export default function ContactPage() {
  // Ví dụ: form state, handleSubmit v.v. tuỳ vào bạn dùng React Hook Form hay gì khác
  const onSubmit = (data) => {
    console.log("Submit form data:", data);
  };

  return (
    <div className="container mx-auto py-8">
      {/* Tiêu đề trang */}
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

      {/* Khối thông tin liên hệ */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Địa Chỉ</CardTitle>
          </CardHeader>
          <CardContent>
            <p>123, Đường ABC, Quận X, TP. Y</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Điện Thoại</CardTitle>
          </CardHeader>
          <CardContent>
            <p>+84 123 456 789</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Email</CardTitle>
          </CardHeader>
          <CardContent>
            <p>info@example.com</p>
          </CardContent>
        </Card>
      </div>

      <Separator className="my-8" />

      {/* Khối bản đồ (tuỳ chọn iframe Google Maps hoặc ảnh tĩnh) */}
      <div className="mb-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=..."
          width="100%"
          height="300"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <Separator className="my-8" />

      {/* Khối form liên hệ */}
      <Card>
        <CardHeader>
          <CardTitle>Write a Message</CardTitle>
          <CardDescription>Liên hệ với chúng tôi</CardDescription>
        </CardHeader>
        <CardContent>
          <Form>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-4">
                <FormField
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Họ Tên</FormLabel>
                      <FormControl>
                        <Input placeholder="Nhập họ tên" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="you@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nội Dung</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Nội dung..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <CardFooter className="mt-4">
                <Button type="submit" onClick={onSubmit}>
                  Gửi
                </Button>
              </CardFooter>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
