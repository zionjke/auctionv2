import React from 'react';
import cls from './Counter.module.scss';
export const Counter = () => {
    const [count, setCount] = React.useState(0);

    const increment = () => setCount(count + 1);

    return (
        <div>
            <h1>{count}</h1>
            <button className={cls.btn} onClick={increment}>Increment</button>
        </div>
    );
};