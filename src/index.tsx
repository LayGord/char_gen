import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'app/providers/themeProvider';
import { RouterProvider } from 'react-router-dom';
import 'app/styles/index.scss';
import { StrictMode } from 'react';
import { AppRouter } from 'app/providers/router';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
        <RouterProvider router={AppRouter} />
    </ThemeProvider>
  </StrictMode>,
)