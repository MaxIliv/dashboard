type Props = {
  totalPages: number;
  currentPage: number;
};
// Generate page numbers

const MAX_VISIBLE_PAGES = 7;
const EMPTY = -1;

export const getPageNumbers = ({ totalPages, currentPage }: Props) => {
  const pages = [];

  if (totalPages <= MAX_VISIBLE_PAGES) {
    for (let i = 0; i < totalPages; i++) {
      pages.push(i);
    }

    return pages;
  }

  if (currentPage <= 3) {
    for (let i = 0; i < 5; i++) pages.push(i);
    pages.push(EMPTY);
    pages.push(totalPages - 1);

    return pages;
  }

  if (currentPage >= totalPages - 3) {
    pages.push(0);
    pages.push(EMPTY);
    for (let i = totalPages - 5; i < totalPages; i++) pages.push(i);

    return pages;
  }

  pages.push(0);
  pages.push(EMPTY);
  for (let i = currentPage - 2; i <= currentPage + 1; i++) pages.push(i);
  pages.push(EMPTY);
  pages.push(totalPages - 1);

  return pages;
};
