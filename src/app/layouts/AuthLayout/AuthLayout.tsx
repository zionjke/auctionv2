import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import { Footer } from 'widgets/Footer';
import JoobleLogo from 'shared/assets/icons/jooble_default_logo.svg';
import { LoginForm } from 'features/Authorization';
import cls from './AuthLayout.module.scss';

interface AuthLayoutProps {
    className?: string;
}
const AuthLayout:FC<AuthLayoutProps> = ({ className }) => (
    <div className={cls.wrapper}>
        <div className={cls.logo}>
            <JoobleLogo className={cls.logo_icon} />
        </div>
        <div className={cls.container}>
            <main className={cls.content}>
                <LoginForm />
            </main>
        </div>
        <Footer className={cls.footer} />
    </div>
);

export default AuthLayout;
