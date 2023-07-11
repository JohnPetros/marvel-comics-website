"use client";
import { ComicsProvider } from "@/contexts/comicsContext";
import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

interface ProvidersProps {
  children: ReactNode;
}

const queryClient = new QueryClient();

export function Providers({ children }: ProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ComicsProvider>{children}</ComicsProvider>
    </QueryClientProvider>
  );
}
