'use client';

import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './styles';

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
