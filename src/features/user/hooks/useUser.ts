import { useQuery } from '@tanstack/react-query';
import { userService } from '../service/UserService';

export default function useUser() {
  return useQuery({
    queryKey: ['me'],
    queryFn: userService.me
  })
}