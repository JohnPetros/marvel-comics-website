"use client";
interface ButtonProps {
  title: string;
  onClick: VoidFunction;
}

export function Button({ title, onClick }: ButtonProps) {
  return (
    <button
      className="border-2 border-black text-black hover:border-red-600 hover:bg-red-600 hover:text-white transition-colors duration-200 rounded-full py-2 px-6 font-bold uppercase"
      onClick={onClick}
    >
      {title}
    </button>
  );
}
