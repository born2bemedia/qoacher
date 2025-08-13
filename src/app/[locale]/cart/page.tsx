import type { Metadata } from 'next';

import { CartContainer } from './components/cart-container';

export const metadata: Metadata = {
  title: 'Cart | Qoacher',
  openGraph: {
    title: 'Cart | Qoacher',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cart | Qoacher',
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function CartPage() {
  return <CartContainer />;
}
