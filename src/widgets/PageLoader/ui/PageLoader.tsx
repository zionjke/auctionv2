import React, { type FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import { CircularProgress } from '@mui/material';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string
}
export const PageLoader: FC<PageLoaderProps> = ({ className }) => (
    <div className={classNames(cls.PageLoader, {}, [])}>
        <CircularProgress />
    </div>
);
