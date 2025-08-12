'use client';

import { useEffect, useState } from 'react';

import { getCart } from '@/features/cart/api/get-cart';
import { CartForm } from '@/features/cart/ui/cart-form';
import { EmptyCart } from '@/features/cart/ui/empty-cart';

export const CartContainer = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => void setCart(getCart()), []);

  return !cart.length ? <EmptyCart /> : <CartForm />;
};
