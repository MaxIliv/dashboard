import { Button } from '@/components/ui/button';
import type { SidebarButtonProps } from './types';
import { cn } from '@/lib/utils';

export const SidebarButton = ({
  Icon,
  title,
  isActive = false,
  collapsed = false,
  ...props
}: SidebarButtonProps) => (
  <Button
    {...props}
    title={title}
    size={collapsed ? 'icon-lg' : 'lg'}
    variant={isActive ? 'default' : 'ghost'}
    className={cn('cursor-pointer w-full', {
      'justify-start': !collapsed,
    })}
  >
    <Icon />
    {!collapsed &&  title}
  </Button>
);
