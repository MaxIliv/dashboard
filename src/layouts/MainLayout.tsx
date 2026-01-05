import Sidebar from '@/features/Sidebar/Sidebar';
import AppBar from '@/features/AppBar/AppBar';
import { Outlet } from 'react-router';

export default function MainLayout() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-1 flex-col gap-8 py-2">
        <AppBar />
        <main className="flex-1 flex flex-col gap-4 overflow-auto px-8 pb-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
