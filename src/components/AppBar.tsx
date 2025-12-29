import { PanelLeftClose, PanelLeftOpen } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { Button } from './ui/button';
import { useAppContext } from '@/app/providers/AppProvider';
import { usePageTitle } from '@/hooks/usePageTitle';

export default function AppBar() {
  const currentTitle = usePageTitle();
  const { isSidebarCollapsed, toggleSidebar } = useAppContext();

  const ToggleIcon = isSidebarCollapsed ? PanelLeftOpen : PanelLeftClose;

  return (
    <header className="flex h-16 py-4 px-0 items-center gap-2">
      <Button onClick={toggleSidebar} size="icon" variant="ghost">
        <ToggleIcon />
      </Button>
      <div className="flex gap-2 justify-between flex-1 items-center">
        <p>{currentTitle}</p>
        <ThemeToggle />
      </div>
    </header>
  );
}
