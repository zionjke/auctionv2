import React, {FC} from 'react';
import {HeaderComponent} from "./HeaderComponent";

interface HeaderProps {
    className?: string;
}
export const HeaderContainer:FC<HeaderProps> = ({className}) => {
    return (
       <HeaderComponent/>
    );
};