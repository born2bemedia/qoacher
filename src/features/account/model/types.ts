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

export type Document = {
  orderId: string;
  service: string[];
  date: string;
  notes: string;
  docs: { summaryUrl: string; planUrl: string; reportUrl: string; roadmapUrl: string };
};
