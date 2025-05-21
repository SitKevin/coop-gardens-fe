import { callApi } from "../apiClient"
import { 
  CreateProductRequest, 
  CreateProductResponse, 
  GetProductsResponse, 
  GetProductResponse 
} from "./types"

// API functions
export function createProduct(data: CreateProductRequest): Promise<CreateProductResponse> {
  return callApi("/v2/product-order/products", {
    method: "POST",
    body: JSON.stringify(data),
  })
}

export function getProducts(): Promise<GetProductsResponse> {
  return callApi("/v2/product-order/products", {
    method: "GET",
  })
}

export function getProductById(id: number): Promise<GetProductResponse> {
  return callApi(`/v2/product-order/products/${id}`, {
    method: "GET",
  })
}