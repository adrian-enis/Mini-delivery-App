export type OrderStatus = 'pendiente' | 'preparando' | 'enviado' | 'entregado' | "cancelado";

export interface OrderItemSummary {
  productId: string;
  name: string;
  quantity: number;
  unitPrice: number;
}

export interface Order {
  id: string;
  customerName: string;
  address: string;
  phone: string;
  status: OrderStatus;
  total: number;
  createdAt: string;
  items: OrderItemSummary[];
}