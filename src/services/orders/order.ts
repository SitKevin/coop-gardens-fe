import { callApi } from "../auth/apiClient"
import { 
  CreateOrderRequest,
  CreateOrderResponse,
  GetOrdersResponse,
  GetOrderResponse
} from "./types"

// API functions
export function createOrder(data: CreateOrderRequest): Promise<CreateOrderResponse> {
  return callApi("/v2/product-order/orders", {
    method: "POST",
    body: JSON.stringify(data),
  })
}

export function getOrders(): Promise<GetOrdersResponse> {
  return callApi("/v2/product-order/orders", {
    method: "GET",
  })
}

export function getOrderById(id: number): Promise<GetOrderResponse> {
  return callApi(`/v2/product-order/orders/${id}`, {
    method: "GET",
  })
}