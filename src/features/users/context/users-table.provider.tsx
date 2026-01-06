import { TableProvider } from './users-table.context';
import useUsersTable from '../hooks/useUsersTable';
import type { ReactNode } from 'react';

export function UsersTableProvider({ children }: { children: ReactNode }) {
  const table = useUsersTable();

  return <TableProvider table={table}>{children}</TableProvider>;
}
