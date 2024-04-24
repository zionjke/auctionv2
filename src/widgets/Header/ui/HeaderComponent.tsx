import React, {FC} from 'react';
import {classNames} from "shared/lib/classNames";
import cls from './Header.module.scss'
import {LanguageMenu} from "./components/LanguageMenu/LanguageMenu";
import {UserMenu} from "./components/UserMenu/UserMenu";

interface HeaderComponentProps {
    className?: string;
}

export const HeaderComponent: FC<HeaderComponentProps> = ({}) => {
    return (
        <header className={classNames(cls.wrapper, {}, [])}>
            <div className={cls.container}>
                <p className={cls.site_name}>xing.de</p>
                <div className={cls.menus_section}>
                    <LanguageMenu/>
                    <UserMenu/>
                </div>
            </div>
        </header>
    );
};