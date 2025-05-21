export interface Product {
  id?: number;
  name: string;
  description?: string;
  price: number;
  stock: number;
  farmer_id: string;
  created_at?: string;
}

export interface CreateProductRequest {
  name: string;
  description?: string;
  price: number;
  stock: number;
  farmer_id: string;
}

export interface CreateProductResponse {
  product: Product;
}

export interface GetProductsResponse {
  products: Product[];
}

export interface GetProductResponse {
  product: Product;
}