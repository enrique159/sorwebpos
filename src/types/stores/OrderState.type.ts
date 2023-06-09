import { Product } from "../Product.type"

export type OrderState = {
  order: Array<OrderItem>;
}

export type OrderItem = {
  item: Product;
  quantity: number;
}