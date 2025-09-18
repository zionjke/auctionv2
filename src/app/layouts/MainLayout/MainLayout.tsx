import { MainRouter } from 'app/providers/Router';
import React, { type FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import { Footer } from 'widgets/Footer';
import { Header } from 'widgets/Header';
import { NavBar } from 'widgets/Navbar';
import { navbarConfig } from 'shared/config/navbarConfig';
import cls from './MainLayout.module.scss';

interface MainLayoutProps {
  className?: string
}
const MainLayout: FC<MainLayoutProps> = ({ className }) => (
    <div className={classNames(cls.wrapper, {}, [])}>
        <div className={cls.container}>
            <NavBar navbarConfig={navbarConfig} />
            <div className={cls.content}>
                <Header />
                <main className={cls.main}>
                    <MainRouter />
                </main>
                <Footer />
            </div>
        </div>
    </div>
);

export default MainLayout;
