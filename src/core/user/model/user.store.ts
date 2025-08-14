import { create } from 'zustand';

import type { User } from './types';

export const useUser = create<{
  user: User | null;
  setUser: (user: User | null) => void;
}>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
