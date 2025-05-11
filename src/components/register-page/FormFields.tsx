import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
  } from "@/components/ui/form"
  import { Input } from "@/components/ui/input"
  import React from "react"
  
  export const RenderField = <T extends {}>(props: {
    control: any
    name: keyof T
    label: string
    type?: string
    placeholder?: string
    disabled?: boolean
  }) => {
    const { control, name, label, type = "text", placeholder } = props
    return (
      <FormField
        control={control}
        name={name as string}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <Input {...field} type={type} placeholder={placeholder} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    )
  }