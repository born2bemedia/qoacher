'use client';

import { getCart } from '@/features/cart/api/get-cart';
import { CartForm } from '@/features/cart/ui/cart-form';
import { EmptyCart } from '@/features/cart/ui/empty-cart';

export const CartContainer = () => {
  const cart = getCart();

  return <section>{cart.length ? <CartForm /> : <EmptyCart />}</section>;
};
