// src/orders/orders.events.ts
export interface OrderCreatedEvent {
  orderId: string;
  customerId: string;
  total: number;
  timestamp: Date;
}
