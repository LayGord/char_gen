import { classNames } from "shared/lib/classNames/classNames";
import cls from "./MainPage.module.scss";

interface MainPageProps {
    className?: string;
}

const MainPage = ({ className }: MainPageProps) => {
    return (
        <div className={ classNames(cls.MainPage, {}, [className]) }>
            MainPage
        </div>
    );
};

export default MainPage;