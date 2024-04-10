import React from 'react';
import './styles/index.scss';
import {classNames} from "shared/lib/classNames";
import {AppRouter} from "app/providers/Router";

const App = () => {
    return (
        <div className={classNames('app')}>
            <AppRouter/>
        </div>
    );
};

export default App;