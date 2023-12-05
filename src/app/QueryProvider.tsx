"use client";
import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

export const QueryProvider = ({ children }: { children: React.ReactNode }) => {
  const [queryClient]: any = useState(() => new QueryClient({
    defaultOptions:{
      queries:{
        refetchOnWindowFocus:false
      }
    }
  }));
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
