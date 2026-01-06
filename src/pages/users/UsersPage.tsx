import TableDisplayOptions from '@/features/users/components/TableDisplayOptions';
import { TablePagination } from '@/features/users/components/TablePagination';
import TableSearch from '@/features/users/components/TableSearch';
import TableView from '@/features/users/components/TableView';
import { UsersTableProvider } from '@/features/users/context/users-table.provider';

export default function UsersPage() {
  return (
    <section className="w-full grid gap-4">
      <h2 className="text-xl">Users</h2>

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
