import React, {FC} from 'react';
import {classNames} from "shared/lib/classNames";
import cls from './MainPage.module.scss'
import {NavBar} from "widgets/Navbar";
import {Footer} from "widgets/Footer";
import {Header} from "widgets/Header";

interface MainPageProps {
    className?: string;
}
const MainPage:FC<MainPageProps> = ({className}) => {
    return (
       <div className={classNames(cls.wrapper, {}, [])}>
           <Header/>
           <div className={cls.main}>
               <NavBar/>
           </div>
           <Footer/>
       </div>
    );
};

export default MainPage;