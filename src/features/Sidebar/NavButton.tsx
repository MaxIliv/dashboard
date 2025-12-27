import { type JSX } from 'react';
import { NavLink } from 'react-router';
import type { SidebarLink } from './types';
import { cn } from '@/lib/utils';
import { SidebarButton } from './SidebarButton';

export const NavButton = ({
  to,
  title,
  icon,
  collapsed,
  ...props
}: SidebarLink): JSX.Element => {
  return (
    <NavLink
      {...props}
      to={to}
      className={cn({ 'block w-full': !collapsed })}
    >
      {({ isActive }) => (
        <SidebarButton collapsed={collapsed} isActive={isActive} title={title} icon={icon} />
      )}
    </NavLink>
  );
};
