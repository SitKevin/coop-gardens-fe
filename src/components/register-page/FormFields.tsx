import {
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
  } from "@/components/ui/form"
  import { Input } from "@/components/ui/input"
  import React from "react"
  import { Control, FieldValues, Path } from "react-hook-form"
  
  export const RenderField = <T extends FieldValues>(props: {
  control: Control<T> // Type cụ thể thay vì any
  name: Path<T> // Path<T> thay vì keyof T để tương thích với react-hook-form
  label: string
  type?: string
  placeholder?: string
  disabled?: boolean
}) => {
    const { control, name, label, type = "text", placeholder } = props
    return (
      <FormField
        control={control}
        name={name}
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