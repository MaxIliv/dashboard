import { createContext, useContext, useReducer } from 'react';
import type { ProviderProps } from './types';

type SidebarValue = {
  toggleSidebar: () => void;
  isSidebarCollapsed: boolean;
}
type SnowfallValue = {
  toggleSnowfall: () => void;
  isSnowfallEnabled: boolean;
}

type AppContextType = SnowfallValue & SidebarValue;

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: ProviderProps) {
  const [isSidebarCollapsed, toggleSidebar] = useReducer(
    (prev) => !prev,
    false
  );
  const [isSnowfallEnabled, toggleSnowfall] = useReducer((prev) => !prev, true);

  return (
    <AppContext.Provider
      value={{
        isSidebarCollapsed,
        toggleSidebar,
        isSnowfallEnabled,
        toggleSnowfall,
      }}
    >
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

export function useAppSidebar(): SidebarValue {
  const ctx = useContext(AppContext);

  if (ctx === null) {
    throw new Error('useAppSidebar needs to be call within AppProvider');
  }

  const { isSidebarCollapsed, toggleSidebar } = ctx;

  return { isSidebarCollapsed, toggleSidebar };
}
