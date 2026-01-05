import { Button } from '@/components/ui/button';
import type { SidebarButtonProps } from '@/features/Sidebar/types';
import { cn } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export const SidebarButton = ({
  Icon,
  title,
  isActive = false,
  collapsed = false,
  ...props
}: SidebarButtonProps) => {
  const ButtonElement = (
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
      {!collapsed && title}
    </Button>
  );

  if (!collapsed) return ButtonElement;

  return (
    <Tooltip>
      <TooltipTrigger asChild>{ButtonElement}</TooltipTrigger>
      <TooltipContent side="right">
        <p>{title}</p>
      </TooltipContent>
    </Tooltip>
  );
};
