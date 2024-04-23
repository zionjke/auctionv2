import React, {FC} from 'react';
import {classNames} from "shared/lib/classNames";
import cls from './Header.module.scss'
import {Link} from "react-router-dom";
import AvatarImg from 'shared/assets/images/avatar.png';
import {Avatar, IconButton, Menu, MenuItem} from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import {IHeaderMenuItem} from "../config/headerConfig";

interface HeaderComponentProps {
    className?: string;
    anchorElUser: null | HTMLElement;
    handleOpenUserMenu: (event: React.MouseEvent<HTMLElement>) => void;
    handleCloseUserMenu: () => void;
    headerConfig: IHeaderMenuItem[];
}

export const HeaderComponent: FC<HeaderComponentProps> = ({
                                                              anchorElUser,
                                                              handleOpenUserMenu,
                                                              handleCloseUserMenu,
                                                              headerConfig
                                                          }) => {
    return (
        <header className={classNames(cls.wrapper, {}, [])}>
            <div className={cls.container}>
                <div className={cls.logo_section}>
                </div>
                <div className={cls.user_menu}>
                    <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                        <Avatar className={cls.user_menu__avatar} alt="Avatar" src={AvatarImg}/>
                    </IconButton>
                    <p className={cls.user_menu__text}>xing.de</p>
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
            </div>
        </header>
    );
};