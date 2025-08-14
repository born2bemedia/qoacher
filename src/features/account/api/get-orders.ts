'use server';

import { cookies } from 'next/headers';

import { SERVER_URL } from '@/shared/config/env';

import type { Document, FullOrder, Order, OriginalOrder } from '../model/types';

export async function getUserOrders(): Promise<{
  dashboardOrders: Order[];
  fullOrders: FullOrder[];
  originalOrders: OriginalOrder[];
  documents: Document[];
}> {
  const cookieInst = await cookies();

  const user = cookieInst.get('user')?.value;
  const userID = JSON.parse(user ?? '').id;

  const res = await fetch(
    `${process.env.SERVER_URL}/api/orders?where[user.id][in]=${userID}&limit=50`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  const data = await res.json();

  const originalOrders = data.docs.map(
    (item: { items: { productName: string; price: number }[]; orderNumber: string }) =>
      item.items.map((p) => ({
        orderId: item.orderNumber,
        title: p.productName,
        price: p.price,
        quantity: 1,
      }))
  );

  return {
    dashboardOrders: data.docs
      ? data.docs.map(
          (item: {
            orderNumber: string;
            items: { productName: string }[];
            total: number;
            createdAt: string;
            status: string;
          }) => ({
            orderId: item.orderNumber,
            service: item.items.map((bot) => bot.productName),
            price: item.total,
            orderDate: item.createdAt,
            orderStatus: item.status,
          })
        )
      : [],
    fullOrders: data.docs
      ? data.docs.map(
          (item: {
            orderNumber: string;
            items: { productName: string }[];
            total: number;
            createdAt: string;
            status: string;
            invoice: { url: string };
          }) => ({
            orderId: item.orderNumber,
            service: item.items.map((bot) => bot.productName),
            price: item.total,
            orderDate: item.createdAt,
            orderStatus: item.status,
            invoiceUrl: item.invoice ? `${SERVER_URL}${item.invoice.url}` : null,
          })
        )
      : [],
    originalOrders: originalOrders.length > 0 ? originalOrders.flat() : [],
    documents:
      data.docs.length > 0
        ? data.docs.map(
            (item: {
              orderNumber: string;
              items: { productName: string }[];
              createdAt: string;
              orderNotes: string;
              summary: { url: string };
              plan: { url: string };
              report: { url: string };
              roadmap: { url: string };
            }) => ({
              orderId: item.orderNumber,
              service: item.items.map((bot) => bot.productName),
              date: item.createdAt,
              notes: item.orderNotes,
              docs: {
                summaryUrl: item.summary ? `${SERVER_URL}${item.summary.url}` : null,
                planUrl: item.plan ? `${SERVER_URL}${item.plan.url}` : null,
                reportUrl: item.report ? `${SERVER_URL}${item.report.url}` : null,
                roadmapUrl: item.roadmap ? `${SERVER_URL}${item.roadmap.url}` : null,
              },
            })
          )
        : [],
  };
}
