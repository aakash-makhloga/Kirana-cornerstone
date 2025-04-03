
export interface Product {
  id: string;
  name: string;
  description?: string;
  price: number;
  originalPrice?: number;
  discount: number;
  category: string;
  image: string;
  stock?: number;
  rating?: number;
  reviews?: number;
}
