import React, {FC, useState} from 'react';
import {classNames} from "shared/lib/classNames";
import cls from './UserMenu.module.scss'
import {Avatar, IconButton, Menu, MenuItem} from "@mui/material";
import AvatarImg from "shared/assets/images/avatar.png";
import {Link} from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import {headerConfig} from "widgets/Header/config/headerConfig";

interface UserMenuProps {
    className?: string;
}
export const UserMenu:FC<UserMenuProps> = ({className}) => {
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <div className={classNames(cls.user_menu, {}, [className])}>
            <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                <Avatar className={cls.user_menu__avatar} alt="Avatar" src={AvatarImg}/>
            </IconButton>
            <Menu
                sx={{mt: '45px'}}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                {headerConfig.map(({title,path,icon}) => (
                    <MenuItem key={path} onClick={handleCloseUserMenu}>
                        <Link className={cls.menu_item__link} to={path}>
                            {icon}
                            <p className={cls.menu_item__text}>{title}</p>
                        </Link>
                    </MenuItem>
                ))}
                <MenuItem onClick={handleCloseUserMenu}>
                    <div className={cls.menu_item__logout}>
                        <LogoutIcon color={"primary"}/>
                        <p className={cls.menu_item__text}>Logout</p>
                    </div>
                </MenuItem>
            </Menu>
        </div>
    );
};