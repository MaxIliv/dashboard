import { createContext, useContext, useEffect, useState } from 'react';

const THEMES = {
  dark: 'dark',
  light: 'light',
  system: 'system',
} as const;

const STORAGE_KEY = 'ui-theme';

type Theme = 'dark' | 'light' | 'system';

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
};

type ThemeProviderState = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeProviderContext = createContext<ThemeProviderState | null>(null);

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (!saved) {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? THEMES.dark
        : THEMES.light;

      return systemTheme;
    }

    return saved as Theme;
  });

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(THEMES.light, THEMES.dark);

    root.classList.add(theme);
  }, [theme]);

  const value = {
    theme,
    toggleTheme: () => {
      const nextTheme = theme === THEMES.dark ? THEMES.light : THEMES.dark;

      localStorage.setItem(STORAGE_KEY, nextTheme);
      setTheme(nextTheme);
    },
  };

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === null)
    throw new Error('useTheme must be used within a ThemeProvider');

  return context;
};
