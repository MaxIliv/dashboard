import { useTable } from '../context/table.context';

const DISPLAY_OPTIONS = [10, 20, 30, 40, 50];

export default function TableDisplayOptions() {
  const table = useTable();
  const { pagination } = table.getState();

  const rowsCount = table.getRowCount();
  const from = pagination.pageIndex * pagination.pageSize;
  const to = Math.min((pagination.pageIndex + 1) * pagination.pageSize, rowsCount)

  return (
    <div className="flex gap-2 items-center justify-end">
      <select
        value={pagination.pageSize}
        onChange={(e) => {
          table.setPageSize(Number(e.target.value));
        }}
      >
        {DISPLAY_OPTIONS.map((pageSize) => (
          <option key={pageSize} value={pageSize}>
            Show {pageSize}
          </option>
        ))}
      </select>
      <div>
        Showing {from} to {to} of {rowsCount} Rows
      </div>
    </div>
  );
}
