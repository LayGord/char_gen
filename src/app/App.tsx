import { Suspense } from "react"
import {  Outlet } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "./providers/themeProvider";
import { Navbar } from "widgets/Navbar";

export const App = () => {
    const { theme } = useTheme()
    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <div className="content">
                <Suspense fallback={<p>Загрузка</p>}>
                    <Outlet />
                </Suspense>
            </div>
        </div>
    )
}