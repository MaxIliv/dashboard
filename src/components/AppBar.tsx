import { ThemeToggle } from './ThemeToggle';

export default function AppBar() {
  return (
    <header className="flex border-b h-16 justify-end p-4 dark:text-gray-200">
      <ThemeToggle />
    </header>
  )
}
