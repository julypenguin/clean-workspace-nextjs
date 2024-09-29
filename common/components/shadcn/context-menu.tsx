import * as React from 'react'
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu'
import { Check, ChevronRight, Circle } from 'lucide-react'

import { cn } from '@common/style'

const ContextMenu = ContextMenuPrimitive.Root

const ContextMenuTrigger = ContextMenuPrimitive.Trigger

const ContextMenuGroup = ContextMenuPrimitive.Group

const ContextMenuPortal = ContextMenuPrimitive.Portal

const ContextMenuSub = ContextMenuPrimitive.Sub

const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup

const ContextMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <ContextMenuPrimitive.SubTrigger
    data-sid="-1300021226"
    ref={ref}
    className={cn(
      'flex cursor-default select-none items-center rounded-sm px-8 py-6 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
      inset && 'pl-32',
      className,
    )}
    {...props}>
    {children}
    <ChevronRight className="ml-auto h-16 w-16" />
  </ContextMenuPrimitive.SubTrigger>
))
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName

const ContextMenuSubContent = React.forwardRef<React.ElementRef<typeof ContextMenuPrimitive.SubContent>, React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>>(
  ({ className, ...props }, ref) => (
    <ContextMenuPrimitive.SubContent
      data-sid="711401175"
      ref={ref}
      className={cn(
        'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-4 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-8 data-[side=left]:slide-in-from-right-8 data-[side=right]:slide-in-from-left-8 data-[side=top]:slide-in-from-bottom-8',
        className,
      )}
      {...props}
    />
  ),
)
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName

const ContextMenuContent = React.forwardRef<React.ElementRef<typeof ContextMenuPrimitive.Content>, React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>>(
  ({ className, ...props }, ref) => (
    <ContextMenuPrimitive.Portal data-sid="-558463877">
      <ContextMenuPrimitive.Content
        ref={ref}
        className={cn(
          'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-4 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-8 data-[side=left]:slide-in-from-right-8 data-[side=right]:slide-in-from-left-8 data-[side=top]:slide-in-from-bottom-8',
          className,
        )}
        {...props}
      />
    </ContextMenuPrimitive.Portal>
  ),
)
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName

const ContextMenuItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Item
    data-sid="1158281809"
    ref={ref}
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm px-8 py-6 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      inset && 'pl-32',
      className,
    )}
    {...props}
  />
))
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName

const ContextMenuCheckboxItem = React.forwardRef<React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>, React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>>(
  ({ className, children, checked, ...props }, ref) => (
    <ContextMenuPrimitive.CheckboxItem
      data-sid="1710281396"
      ref={ref}
      className={cn(
        'relative flex cursor-default select-none items-center rounded-sm py-6 pl-32 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        className,
      )}
      checked={checked}
      {...props}>
      <span className="absolute left-8 flex h-14 w-14 items-center justify-center">
        <ContextMenuPrimitive.ItemIndicator>
          <Check className="h-16 w-16" />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.CheckboxItem>
  ),
)
ContextMenuCheckboxItem.displayName = ContextMenuPrimitive.CheckboxItem.displayName

const ContextMenuRadioItem = React.forwardRef<React.ElementRef<typeof ContextMenuPrimitive.RadioItem>, React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>>(
  ({ className, children, ...props }, ref) => (
    <ContextMenuPrimitive.RadioItem
      data-sid="-376314576"
      ref={ref}
      className={cn(
        'relative flex cursor-default select-none items-center rounded-sm py-6 pl-32 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        className,
      )}
      {...props}>
      <span className="absolute left-8 flex h-14 w-14 items-center justify-center">
        <ContextMenuPrimitive.ItemIndicator>
          <Circle className="h-8 w-8 fill-current" />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.RadioItem>
  ),
)
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName

const ContextMenuLabel = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Label data-sid="1549199222" ref={ref} className={cn('px-8 py-6 text-sm font-semibold text-foreground', inset && 'pl-32', className)} {...props} />
))
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName

const ContextMenuSeparator = React.forwardRef<React.ElementRef<typeof ContextMenuPrimitive.Separator>, React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>>(
  ({ className, ...props }, ref) => <ContextMenuPrimitive.Separator data-sid="-1967900057" ref={ref} className={cn('-mx-4 my-4 h-px bg-border', className)} {...props} />,
)
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName

const ContextMenuShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return <span data-sid="92310660" className={cn('ml-auto text-xs tracking-widest text-muted-foreground', className)} {...props} />
}
ContextMenuShortcut.displayName = 'ContextMenuShortcut'

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
}
