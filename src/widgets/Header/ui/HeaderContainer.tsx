import React, {FC, useState} from 'react';
import {HeaderComponent} from "./HeaderComponent";

interface HeaderProps {
    className?: string;
}
export const HeaderContainer:FC<HeaderProps> = ({className}) => {
    const [auth, setAuth] = useState(false);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAuth(event.target.checked);
    };

    return (
       <HeaderComponent auth={auth} handleChange={handleChange}/>
    );
};