import React, { type FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import Image404 from 'shared/assets/images/404.png';
import { Button } from '@mui/material';
import { RoutePath, Routes } from 'shared/config/routeConfig';
import { Link } from 'react-router-dom';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageComponentProps {
  className?: string
}

export const NotFoundPageComponent: FC<NotFoundPageComponentProps> = ({ className }) => (
    <div className={classNames(cls.NotFoundPage, {}, [])}>
        <img className={cls.image} src={Image404} alt="404" />
        <h1 className={cls.title}>Page Not Found</h1>
        <p className={cls.text}>The page you are looking was moved, removed, renamed, or might never exist!</p>
        <Link className={cls.link} to={RoutePath[Routes.STATISTIC]}>
            <Button variant="contained" color="primary">Go to Statistic</Button>
        </Link>
    </div>
);
