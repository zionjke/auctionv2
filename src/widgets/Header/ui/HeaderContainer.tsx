import React, {FC, useState} from 'react';
import {HeaderComponent} from "./HeaderComponent";
import {headerConfig} from "../config/headerConfig";

interface HeaderProps {
    className?: string;
}
export const HeaderContainer:FC<HeaderProps> = ({className}) => {
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
       <HeaderComponent
           headerConfig={headerConfig}
           anchorElUser={anchorElUser}
           handleOpenUserMenu={handleOpenUserMenu}
           handleCloseUserMenu={handleCloseUserMenu}/>
    );
};