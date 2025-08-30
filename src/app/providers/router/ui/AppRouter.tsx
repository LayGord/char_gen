import { classNames } from "shared/lib/classNames/classNames";
import { ReactNode, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";
import { AboutPage } from "pages/AboutPage";

interface AppRouterProps {
    className?: string;
}

export const AppRouter = ({ className }: AppRouterProps) => {
    return (
        
            <Routes>
                {
                    Object.values(routeConfig).map(({element, path}) => (
                        <Route 
                            key={path}
                            path={path}
                            element={<Suspense fallback={<div>Loading...</div>}>{element}</Suspense>}
                        />
                    ))
                }
            </Routes>
        
    );
};
