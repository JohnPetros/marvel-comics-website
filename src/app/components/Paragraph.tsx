import { ReactNode } from 'react'

type ParagraphProps = {
  children: ReactNode
}

export function Paragraph({ children }: ParagraphProps) {
  return <p className="text-md text-black/60">{children}</p>
}
