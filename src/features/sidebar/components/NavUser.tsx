import { useAppSidebar } from '@/app/providers/AppProvider';
import { useAuthContext } from '@/app/providers/AuthProvider';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  ChevronsUpDown,
  LogOutIcon,
} from 'lucide-react';

export default function NavUser() {
  const { logout, me } = useAuthContext();
  const { isSidebarCollapsed } = useAppSidebar();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="cursor-pointer justify-start px-4"
          size="lg"
        >
          <Avatar className="w-5 h-5">
            <AvatarImage src={me?.image} alt={me?.username} />
          </Avatar>
          {!isSidebarCollapsed && (
            <>
              <p className="flex-1 text-left">{me?.username}</p>
              <ChevronsUpDown />
            </>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="top" className="w-56" align="start">
        <DropdownMenuLabel>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-medium">
              {me?.firstName} {me?.lastName}
            </span>
            <span className="text-muted-foreground truncate text-xs">
              {me?.email}
            </span>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuLabel>
          <span className="text-muted-foreground truncate text-xs">
            {me?.role}
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={logout}>
          <LogOutIcon />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
