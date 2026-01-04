import { Skeleton } from '@/components/ui/skeleton';
import TableDisplayOptions from '@/features/Users/components/TableDisplayOptions';
import { TablePagination } from '@/features/Users/components/TablePagination';
import TableSearch from '@/features/Users/components/TableSearch';
import TableView from '@/features/Users/components/TableView';
import { UsersTableProvider } from '@/features/Users/context/users-table.provider';
import { Suspense } from 'react';

export default function UsersPage() {
  return (
    <section className="w-full grid gap-4">
      <h2>Users</h2>

      <Suspense fallback={<Skeleton className="w-full h-64" />}>
        <UsersTableProvider>
          <div className="flex items-center justify-between flex-wrap gap-2">
            <TableSearch />
            <TableDisplayOptions />
          </div>

          <TableView />
          <TablePagination />
        </UsersTableProvider>
      </Suspense>
    </section>
  );
}
