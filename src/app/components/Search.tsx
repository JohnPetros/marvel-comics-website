import { MagnifyingGlass } from '@phosphor-icons/react'
import { InputHTMLAttributes, LegacyRef } from 'react'

interface SearchProps {
  onClick: () => void
  inputRef?: LegacyRef<HTMLInputElement>
}

export function Search({
  onClick,
  inputRef,
  ...rest
}: SearchProps & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="group flex items-center border-b-2 border-black focus-within:border-red-600">
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
        className="w-full bg-transparent p-2 font-semibold uppercase text-black outline-none "
        placeholder="search"
        {...rest}
      />
    </div>
  )
}
