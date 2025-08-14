'use client';

import { useEffect, useState } from 'react';

import { getCart } from '@/features/cart/api/get-cart';
import { CartForm } from '@/features/cart/ui/cart-form';
import { EmptyCart } from '@/features/cart/ui/empty-cart';

import { useUser } from '@/core/user/model/user.store';

export const CartContainer = () => {
  const [cart, setCart] = useState([]);
  const { user } = useUser();

  useEffect(() => void setCart(getCart()), []);

  return !cart.length ? <EmptyCart /> : <CartForm user={user ?? undefined} />;
};
