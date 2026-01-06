import { RequireAuth } from '@/features/auth/guards/RequireAuth';
import MainLayout from './MainLayout';

export default function AuthMainLayout() {
  return (
    <RequireAuth>
      <MainLayout />
    </RequireAuth>
  );
}
