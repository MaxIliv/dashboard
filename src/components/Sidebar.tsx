import { useAuthContext } from '@/app/providers/AuthProvider';
import { Button } from './ui/button';

export default function Sidebar() {
  const { logout } = useAuthContext();
  return (
    <aside className="p-2 w-full max-w-64 dark:text-gray-200 flex flex-col gap-4">
      <p className="p-4 h-16 border-b text-center">Dashboard</p>

      <nav className="flex flex-col gap-4 p-4">
        <a href="/">Home</a>
        <a href="/">Home</a>
        <a href="/">Home</a>
        <a href="/">Home</a>
        <a href="/">Home</a>
      </nav>

      <div className="flex-1"></div>

      <Button variant="ghost" onClick={logout}>Logout</Button>
    </aside>
  );
}
