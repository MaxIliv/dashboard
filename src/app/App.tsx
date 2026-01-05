import { RouterProvider } from 'react-router';
import { ThemeProvider } from './providers/ThemeProvider';
import { router } from './router';
import { AuthProvider } from './providers/AuthProvider';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { queryClient } from '@/shared/queryClient';
import { AppProvider } from './providers/AppProvider';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AuthProvider>
          <AppProvider>
            <RouterProvider router={router} />
          </AppProvider>
        </AuthProvider>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
