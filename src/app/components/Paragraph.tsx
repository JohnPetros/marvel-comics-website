import { ReactNode } from "react";

type ParagraphProps = {
  children: ReactNode;
};

export function Paragraph({ children }: ParagraphProps) {
  return <p className="text-md">{children}</p>;
}
