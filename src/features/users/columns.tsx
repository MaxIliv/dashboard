import { createColumnHelper } from '@tanstack/react-table';
import type { User } from './types';
import { formatDate } from './utils/formatDate';
import { Badge } from '@/components/ui/badge';

const ROLE_BADGE_VARIANTS = {
  admin: 'success',
  moderator: 'secondary',
  user: 'outline',
} as const;

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
    cell: ({ getValue }) => {
      const value = getValue();

      return (
        <div className="lowercase">
          <Badge variant={ROLE_BADGE_VARIANTS[value]}>{value}</Badge>
        </div>
      );
    },
  }),
  columnHelper.accessor('height', {
    header: 'Height',
    cell: ({ getValue }) => <div className="lowercase">{getValue()} cm</div>,
  }),
  columnHelper.accessor('weight', {
    header: 'Weight',
    cell: ({ getValue }) => <div className="lowercase">{getValue()} kg</div>,
  }),
];
