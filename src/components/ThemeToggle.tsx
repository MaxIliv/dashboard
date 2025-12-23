import { MoonStarIcon, SunDimIcon } from "lucide-react"
import { useTheme } from "../app/providers/ThemeProvider"
import { Button } from "./ui/button"


export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      onClick={toggleTheme}
      variant='outline'
      size="icon"
      className="rounded-full cursor-pointer"
    >
      {
        theme === 'light' ?
          <SunDimIcon />
          : <MoonStarIcon />
      }
    </Button>
  )
}