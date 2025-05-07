import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import React from "react"

export const FormCard: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <Card className="w-full max-w-md">
    <CardHeader className="pb-2">
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>{children}</CardContent>
  </Card>
)