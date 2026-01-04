import { useAppContext } from '@/app/providers/AppProvider';
import { cn } from '@/lib/utils';
import Brand from '../../components/Brand';
import { NavButton } from './NavButton';
import { mainMenu } from './constants';
import { Link } from 'react-router';
import SnowfallView from '../snowfall/SnowfallView';
import SnowfallToggle from '@/components/SnowfallToggle';
import { SidebarProvider } from './SidebarProvider';
import NavUser from './components/NavUser';

export default function Sidebar() {
  const { isSidebarCollapsed } = useAppContext();

  return (
    <SidebarProvider>
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
          <div className="flex flex-col gap-2 justify-start">
            <SnowfallToggle />
            <NavUser />
          </div>
        </div>
      </aside>
    </SidebarProvider>
  );
}
