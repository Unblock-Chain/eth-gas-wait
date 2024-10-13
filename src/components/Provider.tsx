'use client';

import { ReactNode } from 'react';
import { ThirdwebProvider } from "thirdweb/react";

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <ThirdwebProvider>
      {children}
    </ThirdwebProvider>
  );
}
