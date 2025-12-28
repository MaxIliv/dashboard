import { createContext, useContext, useReducer } from 'react';
import type { ProviderProps } from './types';

type AppContextType = {
  toggleSidebar: () => void;
  isSidebarCollapsed: boolean;
};

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: ProviderProps) {
  const [isSidebarCollapsed, toggleSidebar] = useReducer(
    (prev) => !prev,
    false
  );

  return (
    <AppContext.Provider value={{ isSidebarCollapsed, toggleSidebar }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const ctx = useContext(AppContext);

  if (ctx === null) {
    throw new Error('useAppContext needs to be call within AppProvider');
  }

  return ctx;
}
