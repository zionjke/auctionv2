import React, {FC} from 'react';
import {Link} from "react-router-dom";
import {RoutePath, Routes} from "shared/config/routeConfig";
import {INavbarConfig} from "widgets/Navbar/config/navbarConfig";
import cls from './Navbar.module.scss'
import {ListItemButton, ListItemIcon, ListItemText, Collapse, List} from '@mui/material';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import JoobleLogo from "shared/assets/icons/jooble_default_logo.svg";
import {classNames} from "shared/lib/classNames";

interface NavbarComponentProps {
    className?: string;
    selectedPath: string;
    onListItemClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>, path: string) => void;
    navbarConfig: INavbarConfig;
}

export const NavbarComponent: FC<NavbarComponentProps> = ({
    className,
    selectedPath,
    onListItemClick,
    navbarConfig
    }) => {
    return (
        <div className={cls.container}>
            <div className={cls.logo}>
                <Link to={RoutePath[Routes.MAIN]}>
                    <JoobleLogo className={cls.logo_icon}/>
                </Link>
            </div>
            <List
                className={classNames(cls.navbar, {}, [className])}
                component="nav"
            >
                <p className={cls.list_title}>Dashboard</p>
                <ListItemButton selected={selectedPath === RoutePath[Routes.MAIN]}
                                onClick={(event) => onListItemClick(event, RoutePath[Routes.MAIN])}>
                    <ListItemIcon className={cls.icon}>
                        <QueryStatsIcon fontSize="small" color="primary"/>
                    </ListItemIcon>
                    <Link className={cls.link} to={RoutePath[Routes.MAIN]}>
                        <ListItemText
                            primaryTypographyProps={
                                {
                                    fontSize: '1rem',
                                    lineHeight: '1.57rem',
                                    fontWeight: 400,
                                    color: selectedPath  === RoutePath[Routes.MAIN]
                                        ? "#1677FF"
                                        :`rgb(38, 38, 38)`
                                }
                            }
                            primary="Campaign Insights"/>
                    </Link>
                </ListItemButton>
                <p className={cls.list_title}>Campaign Management</p>
                {navbarConfig.campaignsManagement.map(({path, title, icon}) => (
                    <ListItemButton
                        selected={selectedPath === path}
                        onClick={(event) => onListItemClick(event, path)}
                        key={path}>
                        <ListItemIcon className={cls.icon}>
                            {icon}
                        </ListItemIcon>
                        <Link className={cls.link} to={path}>
                            <ListItemText  primaryTypographyProps={
                                {
                                    fontSize: '1rem',
                                    lineHeight: '1.57rem',
                                    fontWeight: 400,
                                    color: selectedPath  === path
                                        ? "#1677FF"
                                        :`rgb(38, 38, 38)`
                                }
                            } primary={title}/>
                        </Link>
                    </ListItemButton>
                ))}
                <p className={cls.list_title}>Settings</p>
                {navbarConfig.settings.map(({path, title, icon}) => (
                    <ListItemButton
                        selected={selectedPath === path}
                        onClick={(event) => onListItemClick(event, path)}
                        key={path}>
                        <ListItemIcon className={cls.icon}>
                            {icon}
                        </ListItemIcon>
                        <Link className={cls.link} to={path}>
                            <ListItemText primaryTypographyProps={
                                {
                                    fontSize: '1rem',
                                    lineHeight: '1.57rem',
                                    fontWeight: 400,
                                    color: selectedPath  === path
                                        ? "#1677FF"
                                        :`rgb(38, 38, 38)`
                                }
                            }  primary={title}/>
                        </Link>
                    </ListItemButton>
                ))}
            </List>
        </div>

    );
};
