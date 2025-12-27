import { useAppContext } from '@/app/providers/AppProvider';
import { useAuthContext } from '@/app/providers/AuthProvider';
import Logo from '@/assets/logo-dark';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  BarChartIcon,
  ChartLineIcon,
  GaugeIcon,
  LogOutIcon,
} from 'lucide-react';
import { type JSX, type ReactNode } from 'react';
import { NavLink, type NavLinkProps } from 'react-router';

type SidebarLink = NavLinkProps & {
  icon: ReactNode;
};

export default function Sidebar() {
  const { logout } = useAuthContext();
  const { isSidebarCollapsed } = useAppContext();

  const links: SidebarLink[] = [
    {
      to: '/',
      title: 'Dashboard',
      icon: <GaugeIcon />,
    },
    {
      to: '/statistics',
      title: 'Statistics',
      icon: <BarChartIcon />,
    },
    {
      to: '/charts',
      title: 'Charts',
      icon: <ChartLineIcon />,
    },
  ];

  const NavLinkElement = ({ to, title, icon }: SidebarLink): JSX.Element => {
    return (
      <NavLink to={to} className={cn({ 'block w-full': !isSidebarCollapsed })}>
        {({ isActive }) => (
          <Button
            size={isSidebarCollapsed ? 'icon-lg' : 'default'}
            variant={isActive ? 'default' : 'ghost'}
            className={cn('cursor-pointer', {
              'justify-start w-full': !isSidebarCollapsed,
            })}
          >
            {icon}
            {isSidebarCollapsed ? '' : title}
          </Button>
        )}
      </NavLink>
    );
  };

  return (
    <aside
      className={`p-2 w-full dark:text-gray-200 flex flex-col gap-4 relative ${
        isSidebarCollapsed ? 'flex-0' : 'max-w-64'
      }`}
    >
      <div className="flex gap-2 p-4">
        <Logo size={isSidebarCollapsed ? 32 : 48} />
        {!isSidebarCollapsed && (
          <>
            <p className="text-2xl">Reface</p>
            <sup className="text-gray-400 dark:text-gray-100 text-sm -ml-8">
              data
            </sup>
          </>
        )}
      </div>

      <nav className=" p-4">
        <ul className="flex flex-col gap-2">
          {links.map((link) => (
            <li>
              <NavLinkElement {...link} />
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex-1"></div>

      <div className="p-4">
        <Button
          size={isSidebarCollapsed ? 'icon-sm' : 'default'}
          variant={'ghost'}
          className="cursor-pointer justify-start w-full"
          onClick={logout}
        >
          <LogOutIcon />
          {isSidebarCollapsed ? '' : 'Logout'}
        </Button>
      </div>
    </aside>
  );
}
