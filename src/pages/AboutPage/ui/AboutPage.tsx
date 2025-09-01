import { classNames } from "shared/lib/classNames/classNames";
import cls from "./AboutPage.module.scss";
import { useState } from "react";

interface AboutPageProps {
    className?: string;
}

const AboutPage = ({ className }: AboutPageProps) => {
    const [st, sets] = useState(1);
    return (
        <div className={ classNames(cls.AboutPage, {}, [className]) }>
            AboutPage
        </div>
    );
};

export default AboutPage;