import { createRoot } from 'react-dom/client';
import { App } from './app/App';
import { ThemeProvider } from 'app/theme';
import { BrowserRouter } from 'react-router-dom';
import 'app/styles/index.scss';

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>
);