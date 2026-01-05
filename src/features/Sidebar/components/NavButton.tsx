import { type JSX } from 'react';
import { NavLink } from 'react-router';
import type { SidebarLink } from '../types';
import { SidebarButton } from './SidebarButton';

export const NavButton = ({
  to,
  title,
  Icon,
  collapsed,
  ...props
}: SidebarLink): JSX.Element => {
  return (
    <NavLink
      {...props}
      to={to}
      className="w-full"
    >
      {({ isActive }) => (
        <SidebarButton collapsed={collapsed} isActive={isActive} title={title} Icon={Icon} />
      )}
    </NavLink>
  );
};
