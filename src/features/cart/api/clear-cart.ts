'use client';

import { lsWrite } from '@/shared/lib/utils/browser';

export const clearCart = () => lsWrite('cart', '[]');
