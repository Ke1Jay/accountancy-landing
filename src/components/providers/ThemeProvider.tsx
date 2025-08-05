'use client';

import { useEffect, useState } from 'react';
import { getStoredTheme, applyTheme } from '@/lib/theme';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Apply the theme after component mounts (client-side only)
    const theme = getStoredTheme();
    applyTheme(theme);
  }, []);

  // Prevent SSR/hydration issues by only rendering on client
  if (!mounted) {
    return <>{children}</>;
  }

  return <>{children}</>;
}