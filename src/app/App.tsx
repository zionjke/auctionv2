import React, {Suspense} from 'react';
import {Routes, Route, Link} from "react-router-dom";
import './styles/index.scss';
import {classNames} from "shared/lib/classNames";
import {MainPage} from "pages/Main";
import {AppRouter} from "app/providers/Router";


const App = () => {
    return (
        <div className={classNames('app', {}, [])}>
            <Link to="/">Main</Link>
            <AppRouter/>
        </div>
    );
};

export default App;