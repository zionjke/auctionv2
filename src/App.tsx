import React, {lazy, Suspense} from 'react';
import {Routes, Route, Link} from "react-router-dom";
import './styles/index.scss';
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";

const About = lazy(() => import("./pages/AboutPage/AboutPage"));
const Main = lazy(() => import("./pages/Main/MainPage"));
const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Link to="/">Main</Link>
            <Link to="/about">About</Link>
            <button onClick={toggleTheme}>Toggle theme</button>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/" element={<Main/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;