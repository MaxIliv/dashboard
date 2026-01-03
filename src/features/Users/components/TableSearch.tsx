import { useTable } from '../context/users-table.context';
import { Input } from '@/components/ui/input';

export default function TableSearch() {
  const table = useTable();

  return (
    <Input
      placeholder="Filter emails..."
      value={table.getColumn('email')?.getFilterValue() as string}
      onChange={(event) =>
        table.getColumn('email')?.setFilterValue(event.target.value)
      }
      className="max-w-sm"
    />
  );
}
