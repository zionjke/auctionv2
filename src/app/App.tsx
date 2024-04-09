import React, {Suspense} from 'react';
import {Routes, Route, Link} from "react-router-dom";
import './styles/index.scss';
import {classNames} from "shared/lib/classNames";
import {MainPage} from "pages/Main";


const App = () => {
    return (
        <div className={classNames('app', {}, [])}>
            <Link to="/">Main</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;