import { Button } from '@/components/ui/button';
import type { SidebarButtonProps } from './types';
import { cn } from '@/lib/utils';

export const SidebarButton = ({
  isActive,
  icon,
  title,
  collapsed = false,
  ...props
}: SidebarButtonProps) => (
  <Button
    {...props}
    size={collapsed ? 'icon-lg' : 'default'}
    variant={isActive ? 'default' : 'ghost'}
    className={cn('cursor-pointer', {
      'justify-start w-full': !collapsed,
    })}
  >
    {icon}
    {collapsed ? '' : title}
  </Button>
);
