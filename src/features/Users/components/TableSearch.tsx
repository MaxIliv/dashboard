import { useTable } from '../context/users-table.context';
import { CircleXIcon, SearchIcon } from 'lucide-react';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from '@/components/ui/input-group';

export default function TableSearch() {
  const table = useTable();

  const globalFilter = table.getState().globalFilter as string;

  return (
    <InputGroup className="max-w-sm">
      <InputGroupInput
        placeholder="Search ..."
        value={globalFilter}
        onChange={(event) => {
          table.setGlobalFilter(event.target.value);
        }}
      />
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
      {globalFilter && (
        <InputGroupButton
          onClick={() => {
            table.setGlobalFilter('');
          }}
        >
          <CircleXIcon />
        </InputGroupButton>
      )}
    </InputGroup>
  );
}
