import { useAppContext } from '@/app/providers/AppProvider';
import { useAuthContext } from '@/app/providers/AuthProvider';
import { cn } from '@/lib/utils';
import Brand from '../../components/Brand';
import { NavButton } from './NavButton';
import { logoutLink, mainMenu } from './constants';
import { SidebarButton } from './SidebarButton';

export default function Sidebar() {
  const { logout } = useAuthContext();
  const { isSidebarCollapsed } = useAppContext();

  return (
    <aside
      className={cn(
        'p-2 w-full dark:text-gray-200 flex flex-col gap-4 relative',
        {
          'max-w-64': !isSidebarCollapsed,
          'flex-0': isSidebarCollapsed,
        }
      )}
    >
      <Brand />

      <nav className="p-4">
        <ul className="flex flex-col gap-2">
          {mainMenu.map((link) => (
            <li key={link.title}>
              <NavButton {...link} collapsed={isSidebarCollapsed} />
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex-1"></div>

      <div className="p-4 flex flex-col">
        <SidebarButton
          {...logoutLink}
          collapsed={isSidebarCollapsed}
          onClick={logout}
        />
      </div>
    </aside>
  );
}
