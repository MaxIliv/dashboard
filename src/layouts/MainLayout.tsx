import Sidebar from '@/features/Sidebar/Sidebar';
import AppBar from '@/components/AppBar';
import { Outlet } from 'react-router';

export default function MainLayout() {
  return (
    <div className="flex h-screen gap-2">
      <Sidebar />
      <div className="flex flex-1 flex-col gap-4 p-2">
        <AppBar />
        <main className="flex-1 dark:text-gray-200">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
