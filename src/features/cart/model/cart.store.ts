import { create } from 'zustand';

import { getCart } from '../api/get-cart';

export const useCartStore = create<{
  isCartActive: boolean;
  setIsCartActive: (isCartActive: boolean) => void;
}>((set) => ({
  isCartActive: getCart().length > 0,
  setIsCartActive: (isCartActive) => set({ isCartActive }),
}));
