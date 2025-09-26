import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { useTheme } from "app/providers/themeProvider";
import { useTranslation } from "react-i18next";
import { LangSwitcher } from "widgets/LangSwitcher";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    return (
        <div className={ classNames(cls.Navbar, {}, [className]) }>
            <div className={cls.links}>
                <AppLink 
                    to={'/'}
                    theme={AppLinkTheme.PRIMARY}
                    className={cls.mainLink}
                >
                    {t('navbar.MainPage')}
                </AppLink>
                <AppLink 
                    to={'/about'}
                    theme={AppLinkTheme.PRIMARY}
                >
                    {t('navbar.AboutPage')}
                </AppLink>
                
            </div>
            <div className={cls.divider}> | </div>
            <LangSwitcher />
            <ThemeSwitcher className={classNames(cls.themeSwitcher, {}, [])}/>
        </div>
    );
};
