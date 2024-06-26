import React, { type FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import cls from './MainPage.module.scss';

interface MainPageProps {
  className?: string
}
const MainPage: FC<MainPageProps> = ({ className }) => (
    <div className={classNames(cls.wrapper, {}, [])}>
        Main
    </div>
);

export default MainPage;
