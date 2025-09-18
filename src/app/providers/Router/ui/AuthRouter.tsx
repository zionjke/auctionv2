import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { getAuthRoutes } from 'shared/config/routeConfig';
import { PageLoader } from 'shared/ui/PageLoader';

const AuthRouter = () => (
    <Routes>
        {getAuthRoutes().map(({ path, element }) => (
            <Route
                key={path}
                path={path}
                element={(
                    <Suspense fallback={<PageLoader />}>
                        {element}
                    </Suspense>
                )}
            />
        ))}
    </Routes>
);

export default AuthRouter;
