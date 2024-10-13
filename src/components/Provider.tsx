'use client';

import { ReactNode } from 'react';
import { ThirdwebProvider } from "thirdweb/react";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

const queryClient = new QueryClient();

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>
    <ThirdwebProvider>
      {children}
    </ThirdwebProvider>
    </QueryClientProvider>
  );
}
