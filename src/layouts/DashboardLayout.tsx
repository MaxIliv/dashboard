import { type ReactNode } from 'react';
import Sidebar from '@/components/Sidebar';
import AppBar from '@/components/AppBar';

type DashboardLayoutProps = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex h-screen gap-2 bg-gray-100 dark:bg-gray-500 dark:text-gray-200">
      <Sidebar />
      <div className="flex flex-1 flex-col gap-4 p-2">
        <AppBar />
        <main className="flex-1 dark:text-gray-200">{children}</main>
      </div>
    </div>
  );
}
