'use client';

import { type ReactNode, useState } from 'react';
import {
  Content,
  Item,
  Portal,
  Root,
  Trigger,
} from '@radix-ui/react-dropdown-menu';

export const Dropdown = ({
  trigger,
  values,
}: {
  trigger: ReactNode;
  values: { label: ReactNode; value?: string }[];
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Root open={open} onOpenChange={setOpen}>
      <Trigger asChild>{trigger}</Trigger>
      <Portal>
        <Content
          className="z-[900] flex max-w-[226px] animate-[slideDownAndFade_400ms_cubic-bezier(0.16,1,0.3,1)] flex-col bg-white shadow-[0px_10px_25px_0px_rgba(0,0,0,0.10)] data-[side=bottom]:animate-[slideUpAndFade_400ms_cubic-bezier(0.16,1,0.3,1)] data-[side=left]:animate-[slideRightAndFade_400ms_cubic-bezier(0.16,1,0.3,1)] data-[side=right]:animate-[slideLeftAndFade_400ms_cubic-bezier(0.16,1,0.3,1)] data-[side=top]:animate-[slideDownAndFade_400ms_cubic-bezier(0.16,1,0.3,1)]"
          sideOffset={5}
        >
          {values.map(v => (
            <Item
              key={v.value}
              className="border-light-gray hover:bg-whisper-gray cursor-pointer border-b px-4 py-3 transition duration-300 ease-in-out hover:outline-none"
            >
              {v.label}
            </Item>
          ))}
        </Content>
      </Portal>
    </Root>
  );
};
