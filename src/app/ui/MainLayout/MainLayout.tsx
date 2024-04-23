import React, {FC} from 'react';
import {classNames} from "shared/lib/classNames";
import cls from './MainLayout.module.scss'
import {Header} from "widgets/Header";
import {Footer} from "widgets/Footer";
import {NavBar} from "widgets/Navbar";
import {AppRouter} from "app/providers/Router";

interface MainLayoutProps {
    className?: string;
}
const MainLayout:FC<MainLayoutProps> = ({className}) => {
    return (
       <div className={classNames(cls.wrapper, {}, [])}>
           <div className={cls.container}>
               <NavBar/>
               <div className={cls.content}>
                   <Header/>
                   <div className={cls.main}>
                          <AppRouter/>
                   </div>
                   <Footer/>
               </div>
           </div>
       </div>
    );
};

export default MainLayout;