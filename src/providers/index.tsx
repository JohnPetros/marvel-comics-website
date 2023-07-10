import { ComicsProvider } from "@/app/hooks/useComics";
import { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return <ComicsProvider>{children}</ComicsProvider>;
}
