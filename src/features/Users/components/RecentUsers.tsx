import { getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { columns } from '../columns';
import { useUsers } from '../hooks/useUsers';
import TableView from './TableView';
import { DEFAULT_LIMIT } from '../constants';

export default function RecentUsers() {
  const {
    data: { users },
  } = useUsers({ page: 0, limit: DEFAULT_LIMIT });

  const table = useReactTable({
    data: users,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return <TableView table={table} />;
}
