import TableDisplayOptions from '@/features/Users/components/TableDisplayOptions';
import { TablePagination } from '@/features/Users/components/TablePagination';
import TableSearch from '@/features/Users/components/TableSearch';
import TableView from '@/features/Users/components/TableView';
import { UsersTableProvider } from '@/features/Users/context/users-table.provider';

export default function UsersPage() {
  return (
    <section className="w-full grid gap-4">
      <h2>Users</h2>

      <UsersTableProvider>
        <div className="flex items-center justify-between flex-wrap gap-2">
          <TableSearch />
          <TableDisplayOptions />
        </div>

        <TableView />
        <TablePagination />
      </UsersTableProvider>
    </section>
  );
}
