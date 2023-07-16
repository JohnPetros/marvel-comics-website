interface PageButtonProps {
  page: number;
  isActive: boolean;
  onClick: (page: number) => void;
}

export default function PageButton({
  page,
  isActive,
  onClick,
}: PageButtonProps) {
  return (
    <button
      className={`text-xl font-bold hover:scale-110 transition-all duration-150 ${
        isActive ? "text-red-600" : "text-black"
      }`}
      onClick={() => onClick(page)}
    >
      {page}
    </button>
  );
}
