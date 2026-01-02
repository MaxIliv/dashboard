import { TooltipContent, Tooltip, TooltipTrigger } from '@/components/ui/tooltip';
import type { ReactNode } from 'react';

type TooltipProps = {
  title: string;
  children: ReactNode;
}

export default function SimplelTooltip({ children, title }: TooltipProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent side="left">
        <p>{title}</p>
      </TooltipContent>
    </Tooltip>
  );
}
