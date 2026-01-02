import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import type { Table } from '@tanstack/react-table';
import type { User } from '../types';

type TablePaginationProps = {
  pages: number[];
  currentPage: number;
  table: Table<User>;
};

export function TablePagination({
  currentPage,
  pages,
  table,
}: TablePaginationProps) {
  const canPrevPage = table.getCanPreviousPage();
  const canNextPage = table.getCanNextPage();

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => {
              table.previousPage();
            }}
            aria-disabled={!canPrevPage}
            tabIndex={!canPrevPage ? -1 : undefined}
            className={
              !canPrevPage ? 'pointer-events-none opacity-50' : 'cursor-pointer'
            }
          />
        </PaginationItem>

        {pages.map((page, idx) => (
          <PaginationItem key={idx}>
            {page === -1 ? (
              <PaginationEllipsis />
            ) : (
              <PaginationLink
                onClick={() => {
                  table.setPageIndex(page);
                }}
                isActive={page === currentPage}
                className="cursor-pointer"
              >
                {page + 1}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext
            onClick={() => {
              table.nextPage();
            }}
            aria-disabled={!canNextPage}
            tabIndex={!canNextPage ? -1 : undefined}
            className={
              !canNextPage ? 'pointer-events-none opacity-50' : 'cursor-pointer'
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
