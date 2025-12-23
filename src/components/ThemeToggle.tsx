import { useThemeContext } from "../app/providers/ThemeProvider"


export function ThemeToggle() {
  const { theme, toggle } = useThemeContext()

  return (
    <button
      onClick={toggle}
      className="rounded-full cursor-pointer px-3 py-2 text-sm"
    >
      {theme === 'light' ? '☀️' : '🌙'}
    </button>
  )
}