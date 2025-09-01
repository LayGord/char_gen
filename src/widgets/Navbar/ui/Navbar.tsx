import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { Button } from "shared/ui/Button/Button";
import { useTheme } from "app/providers/themeProvider";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const {theme, toggleTheme} = useTheme()
    return (
        <div className={ classNames(cls.Navbar, {}, [className]) }>
            <div className={cls.links}>
                <AppLink 
                    to={'/'}
                    theme={AppLinkTheme.PRIMARY}
                    className={cls.mainLink}
                >
                    Main
                </AppLink>
                <AppLink 
                    to={'/about'}
                    theme={AppLinkTheme.PRIMARY}
                >
                    About
                </AppLink>
            </div>
            <ThemeSwitcher className={classNames(cls.themeSwitcher, {}, [])}/>
        </div>
    );
};
