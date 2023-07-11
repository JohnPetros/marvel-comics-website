import { MagnifyingGlass } from "@phosphor-icons/react";
import { InputHTMLAttributes } from "react";

export function Search({ ...rest }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="border-b-2 border-black flex items-center group focus-within:border-red-600">
      <label htmlFor="search">
        <MagnifyingGlass
          size={24}
          weight="bold"
          className="text-black group-focus-within:text-red-600"
        />
      </label>
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
