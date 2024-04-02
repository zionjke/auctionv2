import React, {lazy, Suspense} from 'react';
import {Routes, Route, Link} from "react-router-dom";
import './index.scss';

const About = lazy(() => import("./pages/AboutPage/AboutPage"));
const Main = lazy(() => import("./pages/Main/MainPage"));
const App = () => {
    return (
        <div className="app">
            <Link to="/">Main</Link>
            <Link to="/about">About</Link>
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