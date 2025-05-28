'use client';

import type { ReactNode } from 'react';
import {
  Content,
  Description,
  Overlay,
  Portal,
  Root,
  Title as DialogTitle,
  Trigger,
} from '@radix-ui/react-dialog';
import { create } from 'zustand';

import { Title } from '@/shared/ui/components/atoms';

type DialogStore = {
  isOpen: boolean;
  children: { title: string | null; content: ReactNode | null } | null;
  setIsOpen: (isOpen: boolean) => void;
  registerContent: (
    args: {
      title: string | null;
      content: ReactNode | null;
    } | null,
  ) => void;
};

export const useDialogStore = create<DialogStore>(set => ({
  isOpen: false,
  children: null,
  setIsOpen: isOpen => set({ isOpen }),
  registerContent: children => set({ children }),
}));

export const Dialog = () => {
  const { isOpen, children, setIsOpen } = useDialogStore();

  return (
    <Root open={isOpen} onOpenChange={setIsOpen}>
      <Trigger />
      <Portal>
        <Overlay className="fixed inset-0 z-[50] animate-[overlayShow_150ms_cubic-bezier(0.16,1,0.3,1)] bg-black/80" />
        <Content className="fixed top-1/2 left-1/2 z-[60] flex w-[90vw] max-w-md -translate-x-1/2 -translate-y-1/2 flex-col gap-3 bg-white p-6 focus:outline-none">
          <DialogTitle />
          <Title as="h3" size="3xl" align="center">
            {children?.title}
          </Title>
          <Description asChild>{children?.content}</Description>
        </Content>
      </Portal>
    </Root>
  );
};
