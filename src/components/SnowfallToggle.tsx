import { Button } from '@/components/ui/button';
import { SnowflakeIcon } from 'lucide-react';
import SimplelTooltip from './SimplelTooltip';
import { cn } from '@/lib/utils';
import { useSnowfall } from '@/features/Sidebar/SidebarProvider';

export default function SnowfallToggle() {
  const { toggleSnowfall, isSnowfallEnabled } = useSnowfall();

  return (
    <SimplelTooltip title="Christmas mood">
      <Button
        onClick={toggleSnowfall}
        variant="ghost"
        size="lg"
        className="cursor-pointe"
      >
        <SnowflakeIcon
          className={cn('text-blue-300', {
            'animate-slow-spin': isSnowfallEnabled,
          })}
        />
      </Button>
    </SimplelTooltip>
  );
}
