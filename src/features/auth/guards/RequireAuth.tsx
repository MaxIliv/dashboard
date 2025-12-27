import { Navigate } from 'react-router'
import { useAuthContext } from '@/app/providers/AuthProvider'

export function RequireAuth({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuthContext()

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return <>{children}</>
}