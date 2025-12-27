// Create Context

import { authService } from '@/features/auth/service/AuthService';
import type { AuthPayload, AuthResponse } from '@/features/auth/types';
import useUser from '@/features/user/hooks/useUser';
import { createContext, useContext, useState, type ReactNode } from 'react';

type AuthContextValue = {
  me: AuthResponse | undefined;
  isAuthenticated: boolean;
  login: (e: AuthPayload) => Promise<AuthResponse>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

type ProviderBaseProps = {
  children: ReactNode;
};

// Provider
export function AuthProvider({ children }: ProviderBaseProps) {
  const { data: me } = useUser();

  const [isAuthenticated, setIsAuthentcated] = useState(() =>
    authService.isAuthenticated()
  );

  const login = async (credentials: AuthPayload) => {
    const res = await authService.login(credentials);
    setIsAuthentcated(true);
    return res;
  };

  const logout = () => {
    authService.logout();
    setIsAuthentcated(false);
  };

  return (
    <AuthContext.Provider value={{ me, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

// useAuth

export const useAuthContext = () => {
  const authContext = useContext(AuthContext);

  if (authContext === null) {
    throw new Error('useAuthContext must be used within AuthProvider');
  }

  return authContext;
};
