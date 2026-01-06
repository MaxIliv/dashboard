import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router';

export default function NotFoundPage() {
  return (
    <div className="h-full text-center p-16 flex flex-col gap-4">
      <h1 className="text-3xl font-bold">404</h1>
      <p>Page Not found</p>
      <NavLink to="/">
        <Button>Return to Home page</Button>
      </NavLink>
    </div>
  );
}
