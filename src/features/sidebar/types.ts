import type { ComponentType } from 'react';
import type { NavLinkProps } from 'react-router';

export type SidebarButtonProps = {
  Icon: ComponentType;
  title: string;
  isActive?: boolean;
  collapsed?: boolean;
  onClick?: () => void;
};

export type SidebarLink = NavLinkProps & SidebarButtonProps;