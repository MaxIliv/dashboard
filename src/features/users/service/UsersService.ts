import { httpClient, type HTTPClient } from '@/shared/api/httpClient';
import type { User } from '../types';
import { DEFAULT_LIMIT, SELECT_FIELDS } from '../constants';

type Response = {
  users: User[];
  limit: number;
  skip: number;
  total: number;
};

type UsersService = {
  getUsers: (page: number, limit: number) => Promise<Response>;
};

export function createUsersService(
  client: HTTPClient = httpClient
): UsersService {
  return {
    getUsers(page = 0, limit = DEFAULT_LIMIT) {
      const skip = page * limit;

      return client
        .get<Response>(
          `/users?skip=${skip.toString()}&limit=${limit.toString()}&${SELECT_FIELDS}`
        )
        .then((res) => res.data);
    },
  };
}

export const usersService = createUsersService();
