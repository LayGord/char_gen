import { Suspense } from "react"
import {  Outlet } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "./providers/themeProvider";
import { Navbar } from "widgets/Navbar";
import { UserList } from "widgets/UserList";
import { TodoList } from "widgets/TodoList";

export const App = () => {
    const { theme } = useTheme()
    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />

            {/* Redux demo components */}
            <UserList />
            <hr />
            <TodoList />
            {/* end of Redux demo components, delete after conf and testing*/}

            {/* <div className="content">
                <Suspense fallback={<p>Загрузка</p>}>
                    <Outlet />
                </Suspense>
            </div> */}
        </div>
    )
}