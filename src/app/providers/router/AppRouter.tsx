import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { App } from "app/App";
import { MainPage } from "pages/MainPage";
import { AboutPage } from "pages/AboutPage";

const pageLoader = () => {
    return (<p>Loading...</p>)
}

export const AppRouter = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: '/',
                element: <Suspense fallback={<p>Loading main page...</p>}><MainPage /></Suspense>,
                
            },
            {
                path: '/about',
                element: <Suspense fallback={<p>Loading about page...</p>}><AboutPage /></Suspense>,
                
            }
        ]
    }
]);
