import React from 'react';
import './styles/index.scss';
import {classNames} from "shared/lib/classNames";
import {AppRouter} from "app/providers/Router";
import {MainLayout} from "app/ui";

const App = () => {
    return (
        <div className={classNames('app')}>
            <MainLayout/>
        </div>
    );
};

export default App;