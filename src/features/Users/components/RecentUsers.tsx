import { getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { columns } from '../columns';
import { useUsers } from '../hooks/useUsers';
import TableView from './TableView';
import { DEFAULT_LIMIT } from '../constants';
import { TableProvider } from '../context/table.context';

const DEFAULT_PROPS = { page: 0, limit: DEFAULT_LIMIT };

export default function RecentUsers() {
  const {
    data: { users },
  } = useUsers(DEFAULT_PROPS);

  const table = useReactTable({
    data: users,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <TableProvider table={table}>
      <TableView />
    </TableProvider>
  );
}
