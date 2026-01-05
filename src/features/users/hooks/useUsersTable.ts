import { getCoreRowModel, getFilteredRowModel, getSortedRowModel, useReactTable, type ColumnFiltersState, type PaginationState, type SortingState, type VisibilityState } from '@tanstack/react-table';
import { useMemo, useState } from 'react';
import { useUsers } from './useUsers';
import { columns } from '../columns';
import { DEFAULT_LIMIT } from '../constants';

export default function useUsersTable() {
  const defaultData = useMemo(() => [], []);

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: DEFAULT_LIMIT,
  });

  const {
    data: { users, total },
  } = useUsers({ page: pagination.pageIndex, limit: pagination.pageSize });

  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState('')
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
    onGlobalFilterChange: setGlobalFilter,
    onPaginationChange: setPagination,
    manualPagination: true,
    rowCount: total,
    state: {
      globalFilter,
      sorting,
      columnFilters,
      columnVisibility,
      pagination,
    },
  });

  return table;
}
