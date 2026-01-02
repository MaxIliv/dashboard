import {
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnFiltersState,
  type PaginationState,
  type SortingState,
  type VisibilityState,
} from '@tanstack/react-table';
import { useMemo, useState } from 'react';

import { Input } from '@/components/ui/input';
import { useUsers } from './hooks/useUsers';
import { TablePagination } from './components/TablePagination';
import { getPageNumbers } from './utils/getPageNumbers';
import { columns } from './columns';
import TableView from './components/TableView';
import { DEFAULT_LIMIT } from './constants';

export function UsersTable() {
  const defaultData = useMemo(() => [], []);

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: DEFAULT_LIMIT,
  });

  const {
    data: { users, total },
  } = useUsers({ page: pagination.pageIndex, limit: pagination.pageSize });

  const totalPages = Math.ceil(total / pagination.pageSize);

  const pages = getPageNumbers({
    totalPages,
    currentPage: pagination.pageIndex,
  });

  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});

  const table = useReactTable({
    data: users.length ? users : defaultData,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onPaginationChange: setPagination,
    manualPagination: true,
    rowCount: total,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      pagination,
    },
  });

  return (
    <div className="w-full grid gap-4">
      <div className="flex items-center">
        <Input
          placeholder="Filter emails..."
          value={table.getColumn('email')?.getFilterValue() as string}
          onChange={(event) =>
            table.getColumn('email')?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
      </div>
      <TableView table={table} />

      <TablePagination
        table={table}
        currentPage={pagination.pageIndex}
        pages={pages}
      />

      <div className="flex items-center justify-end space-x-2 py-4">
        <select
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
        <div>
          Showing {pagination.pageIndex * pagination.pageSize} to{' '}
          {(pagination.pageIndex + 1) * pagination.pageSize} of{' '}
          {table.getRowCount().toLocaleString()} Rows
        </div>
      </div>
    </div>
  );
}
