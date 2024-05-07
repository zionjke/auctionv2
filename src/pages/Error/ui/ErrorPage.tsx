import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import ErrorImage from 'shared/assets/images/500.png';
import { Button } from '@mui/material';
import cls from './ErrorPage.module.scss';

interface ErrorPageProps {
    className?: string;
}
const ErrorPage:FC<ErrorPageProps> = ({ className }) => {
    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(cls.ErrorPage, {}, [])}>
            <img src={ErrorImage} alt="Error" />
            <h1 className={cls.title}>Internal Server Error</h1>
            <p className={cls.text}>Server error 500. we fixing the problem. please try again at a later stage.</p>
            <Button variant="contained" color="primary" onClick={reloadPage}>
                Refresh
            </Button>
        </div>
    );
};

export default ErrorPage;
