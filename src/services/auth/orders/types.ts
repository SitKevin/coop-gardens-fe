export interface OrderItem {
  id?: number;
  order_id?: number;
  product_id: number;
  quantity: number;
  price: number;
}

export interface Order {
  id?: number;
  user_id: string;
  total?: number;
  status?: string;
  created_at?: string;
  items: OrderItem[];
}

export interface CreateOrderRequest {
  user_id: string;
  items: {
    product_id: number;
    quantity: number;
    price: number;
  }[];
}

export interface CreateOrderResponse {
  order: Order;
}

export interface GetOrdersResponse {
  orders: Order[];
}

export interface GetOrderResponse {
  order: Order;
}