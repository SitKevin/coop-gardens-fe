"use client"

import { Calendar, Home, Inbox, Leaf, Search, Settings, ShoppingBag, ShoppingBasket } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
  } from "@/components/ui/sidebar"
// Menu items.
const items = [
  {
    title: "Cây trồng",
    url: "#",
    icon: ShoppingBag,
    subItems: [
      {
        title: "Cây ăn quả nhiệt đới",
        url: "#tropical-fruits"
      },
      {
        title: "Rau hữu cơ",
        url: "#organic-veggies"
      },
      {
        title: "Cây cảnh",
        url: "#ornamental-plants"
      },
      {
        title: "Cây giống",
        url: "#seeds"
      }
    ]
  },
  {
    title: "Phân bón",
    url: "#",
    icon: ShoppingBasket,
    subItems: [
        {
          title: "Phân hữu cơ",
          url: "#tropical-fruits"
        },
        {
          title: "Phân vô cơ",
          url: "#organic-veggies"
        },
        {
          title: "Phân lá",
          url: "#ornamental-plants"
        },
        {
          title: "Phân từ hợp tác xã",
          url: "#seeds"
        }
      ]
  },
  {
    title: "Công cụ",
    url: "#",
    icon: Search,
    subItems: [
        {
          title: "Chậu",
          url: "#tropical-fruits"
        },
        {
          title: "Vật liệu",
          url: "#organic-veggies"
        },
        {
          title: "Công cụ lao động",
          url: "#ornamental-plants"
        },
      ]
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
    subItems: [
      {
        title: "Quản lý danh mục",
        url: "#category-management"
      },
      {
        title: "Cập nhật thông tin cây trồng",
        url: "#plant-info-update"
      }
    ]
  },
]

export function AppSidebar() {
    return (
      <Sidebar className="w-auto pl-10 bg-green-200">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel className="text-4xl font-bungee py-10 text-green-400">B-Zea Farm</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    {item.subItems ? (
                      <>
                        <SidebarMenuButton className="text-2xl font-nunito font-semibold py-5 flex items-center">
                          <item.icon className="h-10 w-10 mr-3" />
                          <span>{item.title}</span>
                        </SidebarMenuButton>
                        <SidebarMenuSub>
                          {item.subItems.map((subItem) => (
                            <SidebarMenuSubItem key={subItem.title}>
                              <SidebarMenuSubButton asChild>
                                <a href={subItem.url} className="text-xl font-nunito py-5 pl-8 hover:bg-gray-100 dark:hover:bg-gray-800 block w-full text-left">
                                  {subItem.title}
                                </a>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </>
                    ) : (
                      <SidebarMenuButton asChild>
                        <a href={item.url} className="text-base py-3 flex items-center">
                          <item.icon className="h-10 w-10 mr-3" />
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    )}
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    )
  }