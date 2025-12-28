import type { SidebarButtonProps, SidebarLink } from './types';
import {
  BarChartIcon,
  ChartLineIcon,
  GaugeIcon,
  LogOutIcon,
} from 'lucide-react';

export const mainMenu: SidebarLink[] = [
  {
    to: '/',
    title: 'Dashboard',
    Icon: GaugeIcon,
  },
  {
    to: '/statistics',
    title: 'Statistics',
    Icon: BarChartIcon,
  },
  {
    to: '/charts',
    title: 'Charts',
    Icon: ChartLineIcon,
  },
];

export const logoutLink: SidebarButtonProps = {
  title: 'Logout',
  Icon: LogOutIcon,
};
