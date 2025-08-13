export type Order = {
  orderId: string;
  service: string;
  price: string;
  date: string;
  status: OrderStatus;
};

export type FullOrder = Order & { invoiceUrl: string };

export type OrderStatus = 'completed' | 'pending' | 'failed';

export type OriginalOrder = {
  orderId: string;
  title: string;
  price: number;
  quantity: number;
};
