'use client';

import { useEffect, useState } from 'react';

import { cookies } from '@/shared/lib/cookies';

export const useUser = () => {
  const [storedUser, setStoredUser] = useState<string | null>(null);

  useEffect(() => {
    const userCookie = cookies.get('user');
    setStoredUser(userCookie ?? null);
  }, []);

  return storedUser ? JSON.parse(storedUser) : null;
};
