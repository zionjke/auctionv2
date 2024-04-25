import React, {FC} from 'react';
import {classNames} from "shared/lib/classNames";
import cls from './UserMenu.module.scss'
import {Avatar, IconButton, Menu, MenuItem} from "@mui/material";
import AvatarImg from "shared/assets/images/avatar.png";
import {Link} from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import {headerConfig} from "widgets/Header/config/headerConfig";
import {useMenu} from "shared/hooks/useMenu";

interface UserMenuProps {
    className?: string;
}

export const UserMenu: FC<UserMenuProps> = ({className}) => {
    const {anchorEl, handleOpenMenu, handleCloseMenu} = useMenu();

    return (
        <div className={classNames(cls.wrapper, {}, [className])}>
            <div className={cls.toggle_block}>
                <IconButton className={cls.icon_button} onClick={handleOpenMenu} sx={{p: 0}}>
                    <Avatar alt="Avatar" src={AvatarImg}/>
                </IconButton>
                <p className={cls.icon_button_text}>Xing.de</p>
            </div>
            <Menu
                className={cls.menu}
                sx={{mt: '45px'}}
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
            >
                <div className={cls.menu_top}>
                    <div className={cls.menu_top_left}>
                        <Avatar alt="Avatar" src={AvatarImg} className={cls.menu_top_left_avatar}/>
                        <div className={cls.menu_top_left_info}>
                            <p className={cls.menu_top_left_info_name}>Xing.de</p>
                            <p className={cls.menu_top_left_info_email}>xing.de@jooble.com</p>
                        </div>
                    </div>
                    <div>
                        <IconButton className={cls.icon_button} sx={{p: 0}}>
                            <LogoutIcon sx={{color: "black"}}/>
                        </IconButton>
                    </div>
                </div>
                {headerConfig.map(({title, path, icon}) => (
                    <MenuItem key={path} onClick={handleCloseMenu}>
                        <Link className={cls.menu_item__link} to={path}>
                            {icon}
                            <p className={cls.menu_item__text}>{title}</p>
                        </Link>
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
};