"use client"

import { useState } from "react"
import { Check, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button"

type CategoryItemProps = {
  name: string;
  subCategories?: { name: string }[];
}

const categories: CategoryItemProps[] = [
  {
    name: "Cây ăn quả",
    subCategories: [
      { name: "Cây ăn quả nhiệt đới" },
      { name: "Cây ăn quả ôn đới" },
      { name: "Cây có múi" },
      { name: "Cây ăn quả thân gỗ" },
    ]
  },
  {
    name: "Rau củ quả",
    subCategories: [
      { name: "Rau ăn lá" },
      { name: "Rau ăn củ" },
      { name: "Rau gia vị"},
    ]
  },
  {
    name: "Cây cảnh",
    subCategories: [
      { name: "Cây cảnh nội thất" },
      { name: "Cây cảnh ngoại thất" },
      { name: "Cây bonsai"},
    ]
  },
  {
    name: "Hạt giống",
    subCategories: [
      { name: "Hạt giống rau" },
      { name: "Hạt giống hoa" },
      { name: "Hạt giống cây ăn quả" },
    ]
  },
  {
    name: "Phân bón",
    subCategories: [
      { name: "Phân hữu cơ" },
      { name: "Phân vô cơ" },
      { name: "Phân vi sinh" },
    ]
  },
]

export function CategoryFilter() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategories(prev => 
      prev.includes(categoryName)
        ? prev.filter(cat => cat !== categoryName)
        : [...prev, categoryName]
    )
  }

  return (
    <div className="space-y-4 border rounded-lg p-4 bg-white">
      <h2 className="font-bold text-xl pb-2 border-b flex justify-center">Danh Mục Sản Phẩm</h2>
      
      <div className="space-y-2">
        {categories.map((category) => (
          <Collapsible key={category.name} className="w-full">
            <div className="flex items-center relative">
              <Button
                variant="ghost"
                className={cn(
                  "flex items-center justify-between w-full px-2 py-1 text-left font-medium",
                  selectedCategories.includes(category.name) && "text-green-600"
                )}
                onClick={() => handleCategoryClick(category.name)}
              >
                <div className="flex items-center">
                  <div className={cn(
                    "w-5 h-5 border rounded-md mr-2 flex items-center justify-center",
                    selectedCategories.includes(category.name) ? "bg-green-600 border-green-600" : "border-gray-300"
                  )}>
                    {selectedCategories.includes(category.name) && <Check className="h-4 w-4 text-white" />}
                  </div>
                  <span>{category.name}</span>
                </div>
              </Button> 
              {category.subCategories && category.subCategories.length > 0 && (
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" size="sm" className="px-2 absolute right-0 top-1/2 transform -translate-y-1/2">
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </CollapsibleTrigger>
              )}
            </div>
            
            {category.subCategories && (
              <CollapsibleContent>
                <div className="pl-7 mt-1 space-y-1">
                  {category.subCategories.map((subCategory) => (
                    <Button
                      key={subCategory.name}
                      variant="ghost"
                      className={cn(
                        "flex items-center justify-between w-full px-2 py-1 text-left text-sm",
                        selectedCategories.includes(subCategory.name) && "text-green-600"
                      )}
                      onClick={() => handleCategoryClick(subCategory.name)}
                    >
                      <div className="flex items-center">
                        <div className={cn(
                          "w-4 h-4 border rounded-md mr-2 flex items-center justify-center",
                          selectedCategories.includes(subCategory.name) ? "bg-green-600 border-green-600" : "border-gray-300"
                        )}>
                          {selectedCategories.includes(subCategory.name) && <Check className="h-3 w-3 text-white" />}
                        </div>
                        <span>{subCategory.name}</span>
                      </div>
                    </Button>
                  ))}
                </div>
              </CollapsibleContent>
            )}
          </Collapsible>
        ))}
      </div>
    </div>
  )
}