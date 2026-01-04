import { useAppSidebar } from '@/app/providers/AppProvider';
import { useAuthContext } from '@/app/providers/AuthProvider';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { DropdownMenuLabel } from '@radix-ui/react-dropdown-menu';
import { LogOutIcon } from 'lucide-react';

export default function NavUser() {
  const { logout, me } = useAuthContext();
  const { isSidebarCollapsed } = useAppSidebar();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="cursor-pointer justify-start px-4" size="lg">
          <Avatar className="w-4 h-4">
            <AvatarImage src={me?.image} alt={me?.username} />
          </Avatar>
          {!isSidebarCollapsed && me?.username}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="top" className="w-56" align="start">
        <DropdownMenuLabel>
          <div className="grid flex-1 text-left text-sm p-2 leading-tight">
            <span className="truncate font-medium">
              {me?.firstName} {me?.lastName}
            </span>
            <span className="text-muted-foreground truncate text-xs">
              {me?.email}
            </span>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuItem onClick={logout}>
          <LogOutIcon />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
