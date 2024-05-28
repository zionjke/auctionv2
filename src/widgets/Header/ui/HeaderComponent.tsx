import React, { type FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import { LanguageSwitcher } from 'shared/ui/LanguageSwitcher';
import { UserMenu } from 'shared/ui/UserMenu';
import { userMenuConfig } from 'shared/config/userMenuConfig';
import cls from './Header.module.scss';

interface HeaderComponentProps {
  className?: string
}

export const HeaderComponent: FC<HeaderComponentProps> = ({ className }) => (
    <header className={classNames(cls.wrapper, {}, [className])}>
        <div className={cls.container}>
            <LanguageSwitcher className={cls.language_switcher} />
            <UserMenu userMenuConfig={userMenuConfig} />
        </div>
    </header>
);
