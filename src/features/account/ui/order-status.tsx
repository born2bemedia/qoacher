'use client';

import { cn } from '@/shared/lib/utils';
import { Text } from '@/shared/ui/components/atoms/text';

import type { OrderStatus as OrderStatusDef } from '../model/types';

export const OrderStatus = ({ value }: { value: OrderStatusDef }) => (
  <Text
    className={cn(
      'capitalize',
      value === 'completed' && 'text-[#32B13B]',
      value === 'failed' && 'text-danger'
    )}
  >
    {value}
  </Text>
);
