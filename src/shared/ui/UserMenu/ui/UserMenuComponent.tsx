import LogoutIcon from '@mui/icons-material/Logout';
import {
    Avatar, IconButton, Menu, MenuItem,
} from '@mui/material';
import React, { type FC } from 'react';
import { Link } from 'react-router-dom';
import AvatarImg from 'shared/assets/images/avatar.png';
import { classNames } from 'shared/lib/classNames';
import { type IUserMenuItem } from 'shared/config/userMenuConfig';
import cls from './UserMenu.module.scss';

interface UserMenuProps {
  className?: string
  anchorEl: HTMLElement | null
  handleOpenMenu: (event: React.MouseEvent<HTMLButtonElement>) => void
  handleCloseMenu: () => void
  userMenuConfig: IUserMenuItem[]
}

export const UserMenuComponent: FC<UserMenuProps> = ({
    className,
    handleCloseMenu,
    handleOpenMenu,
    anchorEl,
    userMenuConfig,
}) => (
    <div className={classNames(cls.wrapper, {}, [className])}>
        <div className={cls.toggle_block}>
            <IconButton className={cls.icon_button} onClick={handleOpenMenu} sx={{ p: 0 }}>
                <Avatar alt="Avatar" src={AvatarImg} />
            </IconButton>
            <p className={cls.icon_button_text}>xing.de</p>
        </div>
        <Menu
            className={cls.menu}
            sx={{ mt: '45px' }}
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
                    <Avatar alt="Avatar" src={AvatarImg} className={cls.menu_top_left_avatar} />
                    <div className={cls.menu_top_left_info}>
                        <p className={cls.menu_top_left_info_name}>Xing.de</p>
                        <p className={cls.menu_top_left_info_email}>xing.de@jooble.com</p>
                    </div>
                </div>
                <div>
                    <IconButton className={cls.icon_button_logout} sx={{ p: 0 }}>
                        <LogoutIcon sx={{ color: 'black' }} />
                    </IconButton>
                </div>
            </div>
            {userMenuConfig.map(({ title, path, icon }) => (
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
