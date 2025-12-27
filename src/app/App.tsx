import { RouterProvider } from 'react-router';
import { ThemeProvider } from './providers/ThemeProvider';
import { router } from './router';
import { AuthProvider } from './providers/AuthProvider';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { queryClient } from '@/shared/queryClient';
import { AppProvider } from './providers/AppProvider';
import { ErrorBoundary } from './error-boundary';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AuthProvider>
          <AppProvider>
            <ErrorBoundary>
              <RouterProvider router={router} />
            </ErrorBoundary>
          </AppProvider>
        </AuthProvider>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
