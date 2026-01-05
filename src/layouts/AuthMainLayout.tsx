import { RequireAuth } from '@/features/Auth/guards/RequireAuth';
import MainLayout from './MainLayout';

export default function AuthMainLayout() {
  return (
    <RequireAuth>
      <MainLayout />
    </RequireAuth>
  );
}
