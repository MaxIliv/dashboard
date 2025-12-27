import { useQuery } from '@tanstack/react-query';
import { userService } from '../service/UserService';
import { tokenStorage } from '@/shared/storage/tokenStorage';

export default function useUser() {
  const token = tokenStorage.get();

  return useQuery({
    queryKey: ['me'],
    queryFn: userService.me,
    enabled: !!token,
    retry: 1,
  });
}
