'use client';

import * as React from 'react';
import * as SheetPrimitive from '@radix-ui/react-dialog';
/*import { XIcon } from "lucide-react"*/
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

import { IoMdClose } from 'react-icons/io';

function Sheet({ ...props }) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />;
}

function SheetTrigger({ ...props }) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />;
}

function SheetClose({ ...props }) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />;
}

function SheetPortal({ ...props }) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />;
}

function SheetOverlay({ className, ...props }) {
  return (
    <SheetPrimitive.Overlay
      data-slot="sheet-overlay"
      className={cn(
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50',
        className
      )}
      {...props}
    />
  );
}

function SheetContent({ className, children, side = 'right', ...props }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Prevent mismatch by skipping SSR rendering

  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        data-slot="sheet-content"
        className={cn(
          'bg-black shadow-lg fixed z-50 flex flex-col gap-4 transition-all duration-500 ease-in-out',
          side === 'right' &&
            'translate-x-full data-[state=open]:translate-x-0 right-0 top-0 h-full w-3/4 sm:max-w-sm',
          side === 'left' &&
            '-translate-x-full data-[state=open]:translate-x-0 left-0 top-0 h-full w-3/4 sm:max-w-sm',
          side === 'top' &&
            '-translate-y-full data-[state=open]:translate-y-0 top-0 left-0 w-full h-auto',
          side === 'bottom' &&
            'translate-y-full data-[state=open]:translate-y-0 bottom-0 left-0 w-full h-auto',
          className
        )}
        {...props}
      >
        <SheetTitle></SheetTitle>
        {children}
        <SheetPrimitive.Close className="absolute right-8 top-8 transition-opacity outline-none">
          <IoMdClose className="text-3xl text-violet-500" />
          <span className="sr-only">Close</span>
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </SheetPortal>
  );
}

function SheetHeader({ className, ...props }) {
  return (
    <div
      data-slot="sheet-header"
      className={cn('flex flex-col gap-1.5 p-4', className)}
      {...props}
    />
  );
}

function SheetFooter({ className, ...props }) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn('mt-auto flex flex-col gap-2 p-4', className)}
      {...props}
    />
  );
}

function SheetTitle({ className, ...props }) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn('text-foreground font-semibold', className)}
      {...props}
    />
  );
}

function SheetDescription({ className, ...props }) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  );
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};
