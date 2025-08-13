export type Order = {
  orderId: string;
  service: string;
  price: string;
  date: string;
  status: OrderStatus;
};

export type OrderStatus = 'completed' | 'pending' | 'failed';
