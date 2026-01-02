import type { ColumnDef } from '@tanstack/react-table';
import type { User } from './types';
import { Button } from '@/components/ui/button';
import { ArrowUpDown } from 'lucide-react';

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: 'id',
    header: 'Id',
    cell: ({ row }) => <div>{row.getValue('id')}</div>,
  },
  {
    accessorKey: 'firstName',
    header: 'Name',
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue('firstName')}</div>
    ),
  },
  {
    accessorKey: 'email',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => {
            column.toggleSorting(column.getIsSorted() === 'asc');
          }}
        >
          Email
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue('email')}</div>,
  },
  {
    accessorKey: 'role',
    header: 'Role',
    cell: ({ row }) => <div>{row.getValue('role')}</div>,
  },
  {
    accessorKey: 'birthDate',
    header: 'Birth Date',
    cell: ({ row }) => {
      const birthDate = new Date(row.getValue('birthDate'));

      return <div>{birthDate.toLocaleDateString()}</div>;
    },
  },
  {
    accessorKey: 'height',
    header: 'Height',
    cell: ({ row }) => <div>{row.getValue('height')}</div>,
  },
  {
    accessorKey: 'weight',
    header: 'Weight',
    cell: ({ row }) => <div>{row.getValue('weight')}</div>,
  },
];
