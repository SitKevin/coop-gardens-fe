import { Product } from "@/services/products/types";

// Mock product data for testing
export const mockProducts: Product[] = [
  {
    id: 1,
    name: "Organic Tomatoes",
    description: "Fresh, locally grown organic tomatoes. Perfect for salads and cooking.",
    price: 25000,
    stock: 50,
    farmer_id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    created_at: "2025-05-10T12:00:00Z"
  },
  {
    id: 2,
    name: "Lettuce",
    description: "Crisp and fresh lettuce grown without pesticides.",
    price: 15000,
    stock: 100,
    farmer_id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    created_at: "2025-05-11T12:00:00Z"
  },
  {
    id: 3,
    name: "Carrot Seeds",
    description: "High-quality carrot seeds for your garden. Easy to grow and maintain.",
    price: 12000,
    stock: 200,
    farmer_id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    created_at: "2025-05-12T12:00:00Z"
  },
  {
    id: 4,
    name: "Basil Plant",
    description: "Live basil plant for your herb garden or kitchen window.",
    price: 35000,
    stock: 30,
    farmer_id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    created_at: "2025-05-13T12:00:00Z"
  },
  {
    id: 5,
    name: "Organic Fertilizer",
    description: "Eco-friendly organic fertilizer for all your garden needs.",
    price: 60000,
    stock: 25,
    farmer_id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    created_at: "2025-05-14T12:00:00Z"
  },
  {
    id: 6,
    name: "Apple Tree Sapling",
    description: "Young apple tree sapling ready for planting. Will bear fruit in 2-3 years.",
    price: 120000,
    stock: 10,
    farmer_id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    created_at: "2025-05-15T12:00:00Z"
  }
];