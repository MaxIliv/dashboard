import { useTheme } from "../app/providers/ThemeProvider"


export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="rounded-full cursor-pointer px-3 py-2 text-sm"
    >
      {theme === 'light' ? '☀️' : '🌙'}
    </button>
  )
}