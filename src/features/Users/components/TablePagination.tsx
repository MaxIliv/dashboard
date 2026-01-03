import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { useTable } from '../context/users-table.context';
import { getPageNumbers } from '../utils/getPageNumbers';

export function TablePagination() {
  const table = useTable();

  const { pagination } = table.getState();
  const currentPage = pagination.pageIndex;

  const pages = getPageNumbers({
    totalPages: table.getPageCount(),
    currentPage: table.getState().pagination.pageIndex,
  });

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
