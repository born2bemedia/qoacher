'use server';

import type { CartSchema } from '../model/cart.schema';
import type { User } from '@/core/user/model/types';

export const makeOrder = async ({
  billing,
  products,
  user,
  totalPrice,
}: {
  billing: Omit<CartSchema, 'isAgreeRefund' | 'isAgreeTerms'>;
  products: { title: string; quantity: number; price: number }[];
  user?: User;
  totalPrice: number;
}) => {
  const orderNumber = String(Date.now());

  const items = products.map((item) => ({
    productName: item.title,
    quantity: 1,
    price: item.price,
  }));

  const res = await fetch(`${process.env.SERVER_URL}/api/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user,
      orderNumber,
      items,
      billingAddress: billing,
      total: totalPrice,
    }),
  });

  return await res.json();
};
