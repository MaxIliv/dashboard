import { useAppContext } from '@/app/providers/AppProvider';
import { useAuthContext } from '@/app/providers/AuthProvider';
import { cn } from '@/lib/utils';
import Brand from '../../components/Brand';
import { NavButton } from './NavButton';
import { logoutLink, mainMenu } from './constants';
import { SidebarButton } from './SidebarButton';
import { Link } from 'react-router';
import SnowfallView from '../snowfall/SnowfallView';
import SnowfallToggle from '@/components/SnowfallToggle';

export default function Sidebar() {
  const { logout } = useAuthContext();
  const { isSidebarCollapsed } = useAppContext();

  return (
    <aside
      className={cn('p-2 w-full flex flex-col gap-4 relative bg-sidebar', {
        'max-w-64': !isSidebarCollapsed,
        'flex-0': isSidebarCollapsed,
      })}
    >
      <SnowfallView />

      <Link to="/">
        <Brand />
      </Link>

      <nav className="px-2">
        <ul className="flex flex-col gap-2">
          {mainMenu.map((link) => (
            <li key={link.title} title={link.title}>
              <NavButton {...link} collapsed={isSidebarCollapsed} />
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex-1"></div>

      <div className="px-2">
        <SnowfallToggle />

        <SidebarButton
          {...logoutLink}
          collapsed={isSidebarCollapsed}
          onClick={logout}
        />
      </div>
    </aside>
  );
}
