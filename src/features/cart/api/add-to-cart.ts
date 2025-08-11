'use client';

import { lsRead, lsWrite } from '@/shared/lib/utils/browser';
import { notifySuccess, notifyWarning } from '@/shared/lib/utils/notify';

export const addToCart = <T extends { id: string | number }>(data: T) => {
  const cartData = lsRead('cart');
  const cart = cartData ? JSON.parse(cartData) : [];

  if (cart.some((item: T) => item.id === data.id)) {
    notifyWarning('The product already in cart');
    return;
  }

  const newCart = [...cart, data];
  lsWrite('cart', JSON.stringify(newCart));
  notifySuccess('Product added to cart');
};
