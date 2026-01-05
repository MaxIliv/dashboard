import { useAppSidebar } from '@/app/providers/AppProvider';
import SimplelTooltip from '@/components/SimplelTooltip';
import { Button } from '@/components/ui/button';
import { PanelLeftClose, PanelLeftOpen } from 'lucide-react';

export default function SidebarToggle() {
  const { isSidebarCollapsed, toggleSidebar } = useAppSidebar();
  const ToggleIcon = isSidebarCollapsed ? PanelLeftOpen : PanelLeftClose;
  const title = `Click to ${isSidebarCollapsed ? 'Open' : 'Close'} sidebar`;

  return (
    <SimplelTooltip title={title}>
      <Button
        onClick={toggleSidebar}
        variant="ghost"
        className="cursor-pointer"
      >
        <ToggleIcon />
      </Button>
    </SimplelTooltip>
  );
}
