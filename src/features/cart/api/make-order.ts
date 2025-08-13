'use server';

import sgMail from '@sendgrid/mail';

import { orderBody } from '@/features/email-letters/order-body';

import { FROM_EMAIL, SENDGRID_API_KEY } from '@/shared/config/env';

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

  sgMail.setApiKey(SENDGRID_API_KEY);

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

  const userMsg = {
    to: billing.email,
    from: FROM_EMAIL,
    subject: 'Qoacher: Your Request Has Been Received',
    html: orderBody({
      username: billing.firstName,
      discount: '0',
      total: totalPrice.toString(),
      datePurchase: new Date().toLocaleDateString(),
      product: products.map((item) => item.title).join(', '),
    }),
  };

  await sgMail.send(userMsg);

  return await res.json();
};
