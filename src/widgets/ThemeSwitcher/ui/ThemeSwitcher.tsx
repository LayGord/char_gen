import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ThemeSwitcher.module.scss";
import { Button, ButtonTheme  } from "shared/ui/Button/Button";
import { useTheme, Theme } from "app/providers/themeProvider";
import LightIcon from 'shared/assets/icons/switcher_light.svg';
import DarkIcon from 'shared/assets/icons/switcher_dark.svg';
interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme()
    return (
        <Button 
            className={ classNames(cls.ThemeSwitcher, {}, [className]) }
            theme={ButtonTheme.CLEAR}
            onClick={toggleTheme}
        >
            { theme === Theme.DARK ? <DarkIcon className={cls.icons}/> : <LightIcon className={cls.icons}/>}
        </Button>
    );
};
