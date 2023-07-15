import { MagnifyingGlass } from "@phosphor-icons/react";
import { InputHTMLAttributes } from "react";

interface SearchProps {
  onClick: () => void;
}

export function Search({
  onClick,
  ...rest
}: SearchProps & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="border-b-2 border-black flex items-center group focus-within:border-red-600">
      <button onClick={onClick}>
        <MagnifyingGlass
          size={24}
          weight="bold"
          className="text-black group-focus-within:text-red-600"
        />
      </button>
      <input
        type="search"
        id="search"
        className="text-black p-2 uppercase w-full bg-transparent outline-none font-semibold "
        placeholder="search"
        {...rest}
      />
    </div>
  );
}
