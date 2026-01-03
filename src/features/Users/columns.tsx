import { createColumnHelper } from '@tanstack/react-table';
import type { User } from './types';

const columnHelper = createColumnHelper<User>();

export const columns = [
  columnHelper.accessor('id', {
    header: 'Id',
  }),
  columnHelper.accessor('firstName', {
    header: 'Name',
    cell({ getValue }) {
      return <div className="capitalize">{getValue()}</div>;
    },
  }),
  columnHelper.accessor('email', {
    header: 'Email',
    cell: ({ getValue }) => <div className="lowercase">{getValue()}</div>,
  }),
  columnHelper.accessor('birthDate', {
    header: 'Birth Date',
    cell({ getValue }) {
      const birthDate = new Date(getValue());

      return <div>{birthDate.toLocaleDateString()}</div>;
    },
  }),
  columnHelper.accessor('role', {
    header: 'Role',
  }),
  columnHelper.accessor('height', {
    header: 'Height',
  }),
  columnHelper.accessor('weight', {
    header: 'Weight',
  }),
];
