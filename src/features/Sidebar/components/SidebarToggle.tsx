import { useAppSidebar } from '@/app/providers/AppProvider';
import { Button } from '@/components/ui/button';
import { PanelLeftClose, PanelLeftOpen } from 'lucide-react';

export default function SidebarToggle() {
  const { isSidebarCollapsed, toggleSidebar } = useAppSidebar();
  const ToggleIcon = isSidebarCollapsed ? PanelLeftOpen : PanelLeftClose;
  return (
    <Button
      onClick={toggleSidebar}
      variant="ghost"
      className="cursor-pointer"
    >
      <ToggleIcon />
    </Button>
  );
}
