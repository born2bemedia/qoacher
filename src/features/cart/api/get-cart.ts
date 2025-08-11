'use client';

import { lsRead } from '@/shared/lib/utils/browser';

export const getCart = () => {
  const cart = lsRead('cart');
  return cart ? JSON.parse(cart) : [];
};
