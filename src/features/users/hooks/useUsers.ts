import { useSuspenseQuery } from '@tanstack/react-query';
import { usersService } from '../service/UsersService';

export function useUsers({ page, limit }: { page: number; limit: number }) {
  return useSuspenseQuery({
    queryKey: ['users', 'table', page, limit],
    queryFn: () => usersService.getUsers(page, limit),
  });
}
