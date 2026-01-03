import { createColumnHelper } from '@tanstack/react-table';
import type { User } from './types';
import { formatDate } from './utils/formatDate';

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
      const birthDate = formatDate(getValue());

      return <div>{birthDate}</div>;
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
