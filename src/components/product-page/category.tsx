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
  count: number;
  subCategories?: { name: string; count: number }[];
}

const categories: CategoryItemProps[] = [
  {
    name: "Cây ăn quả",
    count: 42,
    subCategories: [
      { name: "Cây ăn quả nhiệt đới", count: 18 },
      { name: "Cây ăn quả ôn đới", count: 12 },
      { name: "Cây có múi", count: 8 },
      { name: "Cây ăn quả thân gỗ", count: 4 },
    ]
  },
  {
    name: "Rau củ quả",
    count: 36,
    subCategories: [
      { name: "Rau ăn lá", count: 15 },
      { name: "Rau ăn củ", count: 12 },
      { name: "Rau gia vị", count: 9 },
    ]
  },
  {
    name: "Cây cảnh",
    count: 28,
    subCategories: [
      { name: "Cây cảnh nội thất", count: 14 },
      { name: "Cây cảnh ngoại thất", count: 8 },
      { name: "Cây bonsai", count: 6 },
    ]
  },
  {
    name: "Hạt giống",
    count: 64,
    subCategories: [
      { name: "Hạt giống rau", count: 30 },
      { name: "Hạt giống hoa", count: 20 },
      { name: "Hạt giống cây ăn quả", count: 14 },
    ]
  },
  {
    name: "Phân bón",
    count: 22,
    subCategories: [
      { name: "Phân hữu cơ", count: 10 },
      { name: "Phân vô cơ", count: 8 },
      { name: "Phân vi sinh", count: 4 },
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
      <h2 className="font-bold text-xl pb-2 border-b">Danh Mục Sản Phẩm</h2>
      
      <div className="space-y-2">
        {categories.map((category) => (
          <Collapsible key={category.name} className="w-full">
            <div className="flex items-center justify-between">
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
                <span className="text-gray-500 text-sm">({category.count})</span>
              </Button>
              
              {category.subCategories && category.subCategories.length > 0 && (
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" size="sm" className="px-2">
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
                      <span className="text-gray-500 text-sm">({subCategory.count})</span>
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