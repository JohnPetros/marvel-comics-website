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

  function handlePageButtonCLick(page: number) {
    const newOffset = (page - 1) * itemsPerPage;
    setOffset(newOffset);
  }

  return (
    <div className="flex gap-3">
      {Array.from({ length: Math.min(MAX_PAGE_BUTTONS, totalPages) }).map(
        (_, index) => {
          const page = index + firstPage;
          return (
            <button
              className={`text-xl font-bold hover:scale-110 transition-all duration-150 ${
                page === currentPage ? "text-red-600" : "text-black"
              }`}
              onClick={() => handlePageButtonCLick(page)}
            >
              {page}
            </button>
          );
        }
      )}
    </div>
  );
}
