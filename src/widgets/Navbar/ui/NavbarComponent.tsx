import React, {FC} from 'react';
import {Link} from "react-router-dom";
import {RoutePath, Routes} from "shared/config/routeConfig";
import {INavbarConfig} from "widgets/Navbar/config/navbarConfig";
import cls from './Navbar.module.scss'
import {ListItemButton, ListItemIcon, ListItemText, List} from '@mui/material';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
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
                <Link to={RoutePath[Routes.STATISTIC]}>
                    <JoobleLogo className={cls.logo_icon}/>
                </Link>
            </div>
            <List
                className={classNames(cls.navbar, {}, [className])}
                component="nav"
            >
                <p className={cls.list_title}>Dashboard</p>
                <Link className={cls.link} to={RoutePath[Routes.STATISTIC]}>
                    <ListItemButton selected={selectedPath === RoutePath[Routes.STATISTIC]}
                                    onClick={(event) => onListItemClick(event, RoutePath[Routes.STATISTIC])}>
                        <ListItemIcon className={cls.icon}>
                            <QueryStatsIcon fontSize="small" color="primary"/>
                        </ListItemIcon>
                        <ListItemText
                            primaryTypographyProps={
                                {
                                    fontSize: '1rem',
                                    lineHeight: '1.57rem',
                                    fontWeight: 400,
                                    color: selectedPath === RoutePath[Routes.STATISTIC]
                                        ? "#1677FF"
                                        : `rgb(38, 38, 38)`
                                }
                            }
                            primary="Campaign Insights"/>
                    </ListItemButton>
                </Link>
                <Link className={cls.link} to={RoutePath[Routes.OVERALL_STATISTICS]}>
                    <ListItemButton selected={selectedPath === RoutePath[Routes.OVERALL_STATISTICS]}
                                    onClick={(event) => onListItemClick(event, RoutePath[Routes.OVERALL_STATISTICS])}>
                        <ListItemIcon className={cls.icon}>
                            <DashboardCustomizeIcon fontSize="small" color="primary"/>
                        </ListItemIcon>
                        <ListItemText
                            primaryTypographyProps={
                                {
                                    fontSize: '1rem',
                                    lineHeight: '1.57rem',
                                    fontWeight: 400,
                                    color: selectedPath === RoutePath[Routes.OVERALL_STATISTICS]
                                        ? "#1677FF"
                                        : `rgb(38, 38, 38)`
                                }
                            }
                            primary="Overall Statistic"/>
                        <div className={cls.new_label}>
                            <span className={cls.new_label_text}>new</span>
                        </div>
                    </ListItemButton>
                </Link>
                <p className={cls.list_title}>Campaign Management</p>
                {navbarConfig.campaignsManagement.map(({path, title, icon}) => (
                    <Link className={cls.link} to={path}>
                        <ListItemButton
                            selected={selectedPath === path}
                            onClick={(event) => onListItemClick(event, path)}
                            key={path}>
                            <ListItemIcon className={cls.icon}>
                                {icon}
                            </ListItemIcon>
                            <ListItemText primaryTypographyProps={
                                {
                                    fontSize: '1rem',
                                    lineHeight: '1.57rem',
                                    fontWeight: 400,
                                    color: selectedPath === path
                                        ? "#1677FF"
                                        : `rgb(38, 38, 38)`
                                }
                            } primary={title}/>
                        </ListItemButton>
                    </Link>
                ))}
                <p className={cls.list_title}>Settings</p>
                {navbarConfig.settings.map(({path, title, icon}) => (
                    <Link className={cls.link} to={path}>
                        <ListItemButton
                            selected={selectedPath === path}
                            onClick={(event) => onListItemClick(event, path)}
                            key={path}>
                            <ListItemIcon className={cls.icon}>
                                {icon}
                            </ListItemIcon>
                            <ListItemText primaryTypographyProps={
                                {
                                    fontSize: '1rem',
                                    lineHeight: '1.57rem',
                                    fontWeight: 400,
                                    color: selectedPath === path
                                        ? "#1677FF"
                                        : `rgb(38, 38, 38)`
                                }
                            } primary={title}/>
                        </ListItemButton>
                    </Link>
                ))}
            </List>
        </div>

    );
};
