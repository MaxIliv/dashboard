import { ThemeToggle } from './ThemeToggle';
import SidebarToggle from '@/features/Sidebar/components/SidebarToggle';

import AppBreadcrumbs from './AppBreadcrumbs';

export default function AppBar() {
  return (
    <header className="flex h-16 py-4 px-4 items-center gap-2 border-b mx-4">
      <SidebarToggle />
      <div className="flex gap-2 justify-between flex-1 items-center">
        <AppBreadcrumbs />
        <ThemeToggle />
      </div>
    </header>
  );
}
