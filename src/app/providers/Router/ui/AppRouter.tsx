import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {mainRouteConfig} from "shared/config/routeConfig";

const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {Object.values(mainRouteConfig).map(({element, path}) =>
                    <Route key={path}
                           path={path}
                           element={element}/>)}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;