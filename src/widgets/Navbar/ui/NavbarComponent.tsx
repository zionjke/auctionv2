import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import {
    ListItemButton, ListItemIcon, ListItemText, List, SvgIcon,
} from '@mui/material';
import React, { type FC } from 'react';
import { Link } from 'react-router-dom';
import JoobleLogo from 'shared/assets/icons/jooble_default_logo.svg';
import { RoutePath, Routes } from 'shared/config/routeConfig';
import { classNames } from 'shared/lib/classNames';
import { type INavbarConfig } from 'shared/config/navbarConfig';
import cls from './Navbar.module.scss';

interface NavbarComponentProps {
  className?: string
  selectedPath: string
  onListItemClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>, path: string) => void
  navbarConfig: INavbarConfig
}

export const NavbarComponent: FC<NavbarComponentProps> = ({
    className,
    selectedPath,
    onListItemClick,
    navbarConfig,
}) => (
    <div className={cls.container}>
        <div className={cls.logo}>
            <Link to={RoutePath[Routes.ROOT]}>
                <JoobleLogo className={cls.logo_icon} />
            </Link>
        </div>
        <List
            className={classNames(cls.navbar, {}, [className])}
            component="nav"
        >
            <p className={cls.list_title}>Dashboard</p>
            <Link className={cls.link} to={RoutePath[Routes.STATISTIC]}>
                <ListItemButton
                    selected={selectedPath === RoutePath[Routes.STATISTIC]}
                    onClick={(event) => { onListItemClick(event, RoutePath[Routes.STATISTIC]); }}
                >
                    <ListItemIcon className={cls.icon}>
                        <QueryStatsOutlinedIcon
                            fontSize="small"
                            color={
                                selectedPath === RoutePath[Routes.STATISTIC]
                                    ? 'primary'
                                    : 'inherit'
                            }
                        />
                    </ListItemIcon>
                    <ListItemText
                        className={cls.list_button}
                        primaryTypographyProps={
                            {
                                color: selectedPath === RoutePath[Routes.STATISTIC]
                                    ? '#1677FF'
                                    : 'rgb(38, 38, 38)',
                            }
                        }
                        primary="Campaign Insights"
                    />
                </ListItemButton>
            </Link>
            <Link className={cls.link} to={RoutePath[Routes.OVERALL_STATISTICS]}>
                <ListItemButton
                    selected={selectedPath === RoutePath[Routes.OVERALL_STATISTICS]}
                    onClick={(event) => { onListItemClick(event, RoutePath[Routes.OVERALL_STATISTICS]); }}
                >
                    <ListItemIcon className={cls.icon}>
                        <DashboardCustomizeOutlinedIcon
                            fontSize="small"
                            color={
                                selectedPath === RoutePath[Routes.OVERALL_STATISTICS]
                                    ? 'primary'
                                    : 'inherit'
                            }
                        />
                    </ListItemIcon>
                    <ListItemText
                        className={cls.list_button}
                        primaryTypographyProps={
                            {
                                color: selectedPath === RoutePath[Routes.OVERALL_STATISTICS]
                                    ? '#1677FF'
                                    : 'rgb(38, 38, 38)',
                            }
                        }
                        primary="Overall Statistic"
                    />
                    <div className={cls.new_label}>
                        <span className={cls.new_label_text}>new</span>
                    </div>
                </ListItemButton>
            </Link>
            <p className={cls.list_title}>Campaign Management</p>
            {navbarConfig.campaignsManagement.map(({ path, title, icon }) => (
                <Link key={path} className={cls.link} to={path}>
                    <ListItemButton
                        selected={selectedPath === path}
                        onClick={(event) => { onListItemClick(event, path); }}
                        key={path}
                    >
                        <ListItemIcon className={cls.icon}>
                            <SvgIcon
                                fontSize="small"
                                color={
                                    selectedPath === path
                                        ? 'primary'
                                        : 'inherit'
                                }
                            >
                                {icon}
                            </SvgIcon>
                        </ListItemIcon>
                        <ListItemText
                            className={cls.list_button}
                            primaryTypographyProps={
                                {
                                    color: selectedPath === path
                                        ? '#1677FF'
                                        : 'rgb(38, 38, 38)',
                                }
                            }
                            primary={title}
                        />
                    </ListItemButton>
                </Link>
            ))}
            <p className={cls.list_title}>Settings</p>
            {navbarConfig.settings.map(({ path, title, icon }) => (
                <Link key={path} className={cls.link} to={path}>
                    <ListItemButton
                        selected={selectedPath === path}
                        onClick={(event) => { onListItemClick(event, path); }}
                        key={path}
                    >
                        <ListItemIcon className={cls.icon}>
                            <SvgIcon
                                fontSize="small"
                                color={
                                    selectedPath === path
                                        ? 'primary'
                                        : 'inherit'
                                }
                            >
                                {icon}
                            </SvgIcon>
                        </ListItemIcon>
                        <ListItemText
                            className={cls.list_button}
                            primaryTypographyProps={
                                {
                                    color: selectedPath === path
                                        ? '#1677FF'
                                        : 'rgb(38, 38, 38)',
                                }
                            }
                            primary={title}
                        />
                    </ListItemButton>
                </Link>
            ))}
            <p className={cls.list_title}>External</p>
            {navbarConfig.externalStatistics.map(({ path, title, icon }) => (
                <Link key={path} className={cls.link} to={path}>
                    <ListItemButton
                        selected={selectedPath === path}
                        onClick={(event) => { onListItemClick(event, path); }}
                        key={path}
                    >
                        <ListItemIcon className={cls.icon}>
                            <SvgIcon
                                fontSize="small"
                                color={
                                    selectedPath === path
                                        ? 'primary'
                                        : 'inherit'
                                }
                            >
                                {icon}
                            </SvgIcon>
                        </ListItemIcon>
                        <ListItemText
                            className={cls.list_button}
                            primaryTypographyProps={
                                {
                                    color: selectedPath === path
                                        ? '#1677FF'
                                        : 'rgb(38, 38, 38)',
                                }
                            }
                            primary={title}
                        />
                    </ListItemButton>
                </Link>
            ))}
        </List>
    </div>

);
