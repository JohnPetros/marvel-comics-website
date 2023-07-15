import { MagnifyingGlass } from "@phosphor-icons/react";
import { InputHTMLAttributes, LegacyRef } from "react";

interface SearchProps {
  onClick: () => void;
  inputRef?: LegacyRef<HTMLInputElement>;
}

export function Search({
  onClick,
  inputRef,
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
        ref={inputRef}
        type="search"
        id="search"
        className="text-black p-2 uppercase w-full bg-transparent outline-none font-semibold "
        placeholder="search"
        {...rest}
      />
    </div>
  );
}
