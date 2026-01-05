export type Props = {
  totalPages: number;
  currentPage: number;
};

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

  // start
  if (currentPage <= 3) {
    for (let i = 0; i < MAX_VISIBLE_PAGES - 2; i++) pages.push(i);
    pages.push(EMPTY);
    pages.push(totalPages - 1);

    return pages;
  }

  // end
  if (currentPage >= totalPages - 2) {
    pages.push(0);
    pages.push(EMPTY);
    for (let i = totalPages - 3; i < totalPages; i++) pages.push(i);

    return pages;
  }

  // middle
  pages.push(0);
  pages.push(EMPTY);
  for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
  pages.push(EMPTY);
  pages.push(totalPages - 1);

  return pages;
};
