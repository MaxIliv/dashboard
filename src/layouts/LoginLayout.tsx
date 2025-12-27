import { Outlet } from 'react-router';

export default function LoginLayout() {
  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <Outlet />
    </main>
  );
}
