import { MoonStarIcon, SunIcon } from 'lucide-react';
import { useTheme } from '@/app/providers/ThemeProvider';
import { Button } from '@/components/ui/button';
import SimplelTooltip from './SimplelTooltip';

export function ThemeToggle() {
  const { toggleTheme, isLightTheme } = useTheme();

  const Icon = isLightTheme ? SunIcon : MoonStarIcon;
  const title = isLightTheme ? 'Light mode' : 'Dark mode';
  const arialLabel = `Click to ${isLightTheme ? 'Dark' : 'Light'} mode`;

  return (
    <SimplelTooltip title={title}>
      <Button
        onClick={toggleTheme}
        variant="ghost"
        size="icon"
        className="cursor-pointer"
        aria-label={arialLabel}
      >
        <Icon />
      </Button>
    </SimplelTooltip>
  );
}
