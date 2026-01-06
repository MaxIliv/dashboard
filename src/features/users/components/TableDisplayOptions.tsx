import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useTable } from '../context/users-table.context';

const DISPLAY_OPTIONS = [10, 20, 30, 40, 50];

export default function TableDisplayOptions() {
  const table = useTable();
  const { pagination } = table.getState();

  const rowsCount = table.getRowCount();
  const from = pagination.pageIndex * pagination.pageSize;
  const to = Math.min(
    (pagination.pageIndex + 1) * pagination.pageSize,
    rowsCount
  );

  return (
    <div className="flex gap-2 items-center justify-end">
      <Select
        value={pagination.pageSize.toString()}
        onValueChange={(value) => {
          table.setPageSize(Number(value));
        }}
      >
        <SelectTrigger className="w-32">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {DISPLAY_OPTIONS.map((pageSize) => (
              <SelectItem key={pageSize} value={pageSize.toString()}>
                Show {pageSize}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <p className="text-sm">
        {from} to {to} of {rowsCount} Rows
      </p>
    </div>
  );
}
