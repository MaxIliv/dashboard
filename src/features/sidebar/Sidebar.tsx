import { useAppContext } from '@/app/providers/AppProvider';
import { cn } from '@/lib/utils';
import NavBrand from './components/NavBrand';
import { NavButton } from './NavButton';
import { mainMenu } from './constants';
import SnowfallView from '../snowfall/SnowfallView';
import SnowfallToggle from '@/components/SnowfallToggle';
import { SidebarProvider } from './SidebarProvider';
import NavUser from './components/NavUser';

export default function Sidebar() {
  const { isSidebarCollapsed } = useAppContext();

  return (
    <SidebarProvider>
      <aside
        className={cn('p-2 flex flex-col gap-8 relative bg-sidebar flex-0 grow-0', {
          'min-w-48': !isSidebarCollapsed,
          'max-sm:hidden sm:w-20': isSidebarCollapsed,
        })}
      >
        <SnowfallView />

        <NavBrand />

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
            <div>
              <SnowfallToggle />
            </div>
            <NavUser />
          </div>
        </div>
      </aside>
    </SidebarProvider>
  );
}
