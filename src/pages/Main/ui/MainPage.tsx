import React, {FC} from 'react';
import {classNames} from "shared/lib/classNames";
import cls from './MainPage.module.scss'
import {NavBar} from "widgets/Navbar";

interface MainPageProps {
    className?: string;
}
const MainPage:FC<MainPageProps> = ({className}) => {
    return (
       <div className={classNames(cls.MainPage, {}, [])}>
           <NavBar/>
       </div>
    );
};

export default MainPage;