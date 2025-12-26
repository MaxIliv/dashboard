import { RouterProvider } from 'react-router';
import { ThemeProvider } from './providers/ThemeProvider';
import { router } from './router';
import { AuthProvider } from './providers/AuthProvider';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
