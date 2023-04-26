export const OrderStatus = Object.freeze({
  PENDING: 'PENDING',
  PROCESSING: 'PROCESSING',
  PAID: 'PAID',
  CANCELLED: 'CANCELLED',
  REFUNDED: 'REFUNDED',
  SHIPPED: 'SHIPPED',
  DELIVERED: 'DELIVERED',
  RETURNED: 'RETURNED',
  EXCHANGED: 'EXCHANGED',
  LOST: 'LOST',
  DAMAGED: 'DAMAGED',
  DISPUTED: 'DISPUTED',
  RESOLVED: 'RESOLVED',
});

export type OrderStatus = typeof OrderStatus[keyof typeof OrderStatus];