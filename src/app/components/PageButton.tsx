import { ReactNode } from 'react'

interface PageButtonProps {
  children: ReactNode
  isActive: boolean
  onClick: VoidFunction
}

export default function PageButton({
  children,
  isActive,
  onClick,
}: PageButtonProps) {
  return (
    <button
      className={`text-lg font-bold uppercase transition-colors duration-150 hover:text-red-600 ${
        isActive ? 'text-red-600' : 'text-black'
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
