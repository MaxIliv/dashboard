import { RouterProvider } from 'react-router';
import { ThemeProvider } from "./providers/ThemeProvider";
import { router } from './router';

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}


export default App;
