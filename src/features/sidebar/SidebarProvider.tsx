import type { ProviderProps } from '@/app/providers/types';
import { createContext, useContext, useReducer } from 'react';

type SnowfallValue = {
  toggleSnowfall: () => void;
  isSnowfallEnabled: boolean;
};

type SidebarContextValue = SnowfallValue;

const SidebarContext = createContext<SidebarContextValue | null>(null);

export function SidebarProvider({ children }: ProviderProps) {
  const [isSnowfallEnabled, toggleSnowfall] = useReducer(
    (prev) => !prev,
    false
  );

  return (
    <SidebarContext.Provider value={{ isSnowfallEnabled, toggleSnowfall }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSnowfall(): SnowfallValue {
  const ctx = useContext(SidebarContext);

  if (ctx === null) {
    throw new Error('useSnowfall needs to be call within AppProvider');
  }

  const { isSnowfallEnabled, toggleSnowfall } = ctx;

  return { isSnowfallEnabled, toggleSnowfall };
}
