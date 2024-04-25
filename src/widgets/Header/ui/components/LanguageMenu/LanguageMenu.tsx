import React, {FC} from 'react';
import {classNames} from "shared/lib/classNames";
import cls from './LanguageMenu.module.scss'
import {IconButton, Menu, MenuItem} from "@mui/material";
import TranslateIcon from "@mui/icons-material/Translate";
import {useMenu} from "shared/hooks/useMenu";

interface LanguageMenuProps {
    className?: string;
}

export const LanguageMenu: FC<LanguageMenuProps> = ({className}) => {
    const {anchorEl, handleOpenMenu, handleCloseMenu} = useMenu();

    return (
        <div className={classNames(cls.language_menu, {}, [className])}>
            <IconButton className={cls.icon_button} aria-label="language" size="small" onClick={handleOpenMenu}>
                <TranslateIcon fontSize="small" sx={{color: "black"}}/>
            </IconButton>
            <Menu
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
                <MenuItem onClick={handleCloseMenu}>
                    <div className={cls.language_menu_item}>
                        <p className={cls.language_menu_item_text}>English</p>
                        <span className={cls.language_menu_item_subtext}>(UK)</span>
                    </div>
                </MenuItem>
                <MenuItem onClick={handleCloseMenu}>
                    <div className={cls.language_menu_item}>
                        <p className={cls.language_menu_item_text}>German</p>
                        <span className={cls.language_menu_item_subtext}>(DE)</span>
                    </div>
                </MenuItem>
            </Menu>
        </div>
    );
};