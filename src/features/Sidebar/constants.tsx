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


export const logoutLink: SidebarButtonProps = {
  isActive: false,
  title: 'Logout',
  icon: <LogOutIcon />,
};
