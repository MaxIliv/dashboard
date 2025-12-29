import Sidebar from '@/features/Sidebar/Sidebar';
import AppBar from '@/components/AppBar';
import { Outlet } from 'react-router';

export default function MainLayout() {
  return (
    <div className="flex h-screen gap-2">
      <Sidebar />
      <div className="flex flex-1 flex-col gap-4 p-4">
        <AppBar />
        <main className="flex-1 flex flex-col gap-4 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
