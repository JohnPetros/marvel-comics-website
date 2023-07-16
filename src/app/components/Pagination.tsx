import PageButton from "./PageButton";

interface PaginationProps {
  itemsPerPage: number;
  totalItems: number;
  offset: number;
  setOffset: (offset: number) => void;
}

const MAX_PAGE_BUTTONS = 7;
const SINBLING_PAGE_BUTTONS = (MAX_PAGE_BUTTONS - 1) / 2;

export function Pagination({
  itemsPerPage,
  totalItems,
  offset,
  setOffset,
}: PaginationProps) {
  const currentPage = offset ? offset / itemsPerPage + 1 : 1;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const firstPage = Math.max(currentPage - SINBLING_PAGE_BUTTONS, 1);

  console.log(Math.min(MAX_PAGE_BUTTONS, totalPages));

  function handlePageButtonCLick(page: number) {
    const newOffset = (page - 1) * itemsPerPage;
    setOffset(newOffset);
  }

  return (
    <div className="flex gap-4">
      {currentPage > 1 && (
        <PageButton
          isActive={false}
          onClick={() => handlePageButtonCLick(currentPage - 1)}
        >
          🠘 Prev
        </PageButton>
      )}

      {firstPage !== 1 && (
        <PageButton isActive={false} onClick={() => handlePageButtonCLick(1)}>
          1 ...
        </PageButton>
      )}

      {Array.from({ length: Math.min(MAX_PAGE_BUTTONS, totalPages) }).map(
        (_, index) => {
          const page = index + firstPage;

          if (page <= totalPages) {
            return (
              <PageButton
                key={page}
                isActive={page === currentPage}
                onClick={() => handlePageButtonCLick(page)}
              >
                {page}
              </PageButton>
            );
          }
        }
      )}

      {currentPage + SINBLING_PAGE_BUTTONS < totalPages && (
        <PageButton
          isActive={false}
          onClick={() => handlePageButtonCLick(totalPages)}
        >
          ... {totalPages}
        </PageButton>
      )}

      {currentPage !== totalPages && (
        <PageButton
          isActive={false}
          onClick={() => handlePageButtonCLick(currentPage + 1)}
        >
          Next 🠖
        </PageButton>
      )}
    </div>
  );
}
