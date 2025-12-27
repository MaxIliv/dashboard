import { PanelLeftClose, PanelLeftOpen } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { Button } from './ui/button';
import { useAppContext } from '@/app/providers/AppProvider';

export default function AppBar() {
  const { isSidebarCollapsed, toggleSidebar } = useAppContext();

  const ToggleIcon = isSidebarCollapsed ? PanelLeftOpen : PanelLeftClose;
  return (
    <header className="flex border-b h-16 justify-between p-4 dark:text-gray-200">
      <Button onClick={toggleSidebar} size="icon" variant="ghost">
        <ToggleIcon />
      </Button>
      <ThemeToggle />
    </header>
  );
}
