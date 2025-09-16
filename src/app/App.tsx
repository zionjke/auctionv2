import React, { useEffect } from 'react';
import './styles/index.scss';
import { AuthLayout, MainLayout } from 'app/layouts';
import { IntlProvider } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import {
    getUserData, getUserInited,
} from 'entities/User';
import { checkAuthService } from 'features/Authorization';
import { PageLoader } from 'shared/ui/PageLoader';

const App = () => {
    const dispatch = useDispatch();
    const userData = useSelector(getUserData);
    const inited = useSelector(getUserInited);

    useEffect(() => {
        dispatch(checkAuthService());
    }, [dispatch]);

    if (!inited) {
        return <PageLoader />;
    }

    return (
        <IntlProvider locale="en">
            <div className="app">
                {userData?.isAuthenticated ? <MainLayout /> : <AuthLayout /> }
            </div>
        </IntlProvider>
    );
};
export default App;
