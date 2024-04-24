import React, {FC, useState} from 'react';
import {classNames} from "shared/lib/classNames";
import cls from './LanguageMenu.module.scss'
import {IconButton, Menu, MenuItem} from "@mui/material";
import TranslateIcon from "@mui/icons-material/Translate";

interface LanguageMenuProps {
    className?: string;
}
export const LanguageMenu:FC<LanguageMenuProps> = ({className}) => {

    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <div className={classNames(cls.language_menu, {}, [className])}>
            <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                <TranslateIcon color={"primary"}/>
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
                <MenuItem onClick={handleCloseUserMenu}>
                    <div className={cls.menu_item__logout}>
                        EN
                    </div>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                    <div className={cls.menu_item__logout}>
                        DE
                    </div>
                </MenuItem>
            </Menu>
        </div>
    );
};