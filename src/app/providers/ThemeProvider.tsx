import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

type Theme = 'light' | 'dark';

const THEME = {
  dark: 'dark',
  light: 'light',
} as const;

type ThemeContextValue = {
  theme: Theme;
  toggle: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

type ThemeContextProviderProps = {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => THEME.light);

  useEffect(() => {
    document.documentElement.classList.toggle(THEME.dark, theme === THEME.dark);
  }, [theme])

  const toggle = () => {
    setTheme(prev => {
      return prev === THEME.light ? THEME.dark : THEME.light;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const themeContext = useContext(ThemeContext);

  if (themeContext === null) {
    throw new Error('useThemeContext needs to be used within ThemeProvider');
  }

  return themeContext;
}
