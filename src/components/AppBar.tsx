import { ThemeToggle } from './ThemeToggle';
import { usePageTitle } from '@/hooks/usePageTitle';
import SidebarToggle from '@/features/Sidebar/components/SidebarToggle';

export default function AppBar() {
  const currentTitle = usePageTitle();

  return (
    <header className="flex h-16 py-4 px-0 items-center gap-2 border-b">
      <SidebarToggle />
      <div className="flex gap-2 justify-between flex-1 items-center">
        <p>{currentTitle}</p>
        <ThemeToggle />
      </div>
    </header>
  );
}
