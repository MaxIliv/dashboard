import type { ReactNode } from 'react';
import type { NavLinkProps } from 'react-router';

export type SidebarButtonProps = {
  icon: ReactNode;
  title: string;
  isActive?: boolean;
  collapsed?: boolean;
  onClick?: () => void;
};

export type SidebarLink = NavLinkProps & SidebarButtonProps;