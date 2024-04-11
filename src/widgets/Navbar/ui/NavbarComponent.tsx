import React, {FC} from 'react';
import {Link} from "react-router-dom";
import {RoutePath, Routes} from "shared/config/routeConfig";
import {INavbarConfig} from "widgets/Navbar/config/navbarConfig";
import cls from './Navbar.module.scss'
import {ListItemButton, ListItemIcon, ListItemText, Collapse, List} from '@mui/material';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import CampaignIcon from '@mui/icons-material/Campaign';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {classNames} from "shared/lib/classNames";

interface NavbarComponentProps {
    className?: string;
    campaignMenuOpen: boolean;
    settingsMenuOpen: boolean;
    selectedPath: string;
    onListItemClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>, path: string) => void;
    onCampaignMenuClick: () => void;
    onSettingsMenuClick: () => void;
    navbarConfig: INavbarConfig;
}

export const NavbarComponent: FC<NavbarComponentProps> = ({
    className,
    campaignMenuOpen,
    settingsMenuOpen,
    selectedPath,
    onListItemClick,
    onCampaignMenuClick,
    onSettingsMenuClick,
    navbarConfig
    }) => {
    return (
        <List
            className={classNames(cls.navbar, {}, [className])}
            component="nav"
        >
            <ListItemButton selected={selectedPath === RoutePath[Routes.MAIN]}
                            onClick={(event) => onListItemClick(event, RoutePath[Routes.MAIN])}>
                <ListItemIcon>
                    <QueryStatsIcon color="primary"/>
                </ListItemIcon>
                <Link className={cls.link} to={RoutePath[Routes.MAIN]}>
                    <ListItemText primary="Campaign Insights"/>
                </Link>
            </ListItemButton>
            <ListItemButton onClick={onCampaignMenuClick}>
                <ListItemIcon>
                    <CampaignIcon color="primary"/>
                </ListItemIcon>
                <ListItemText primary="Campaign Management"/>
                {campaignMenuOpen ? <ExpandLess/> : <ExpandMore/>}
            </ListItemButton>
            <Collapse in={campaignMenuOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {navbarConfig.campaignsManagement.map(({path, title, icon}) => (
                        <ListItemButton
                            selected={selectedPath === path}
                            onClick={(event) => onListItemClick(event, path)}
                            key={path}
                            sx={{pl: 4}}>
                            <ListItemIcon color="primary">
                                {icon}
                            </ListItemIcon>
                            <Link className={cls.link} to={path}>
                                <ListItemText primary={title}/>
                            </Link>
                        </ListItemButton>
                    ))}
                </List>
            </Collapse>
            <ListItemButton onClick={onSettingsMenuClick}>
                <ListItemIcon>
                    <ManageAccountsIcon color="primary"/>
                </ListItemIcon>
                <ListItemText primary="Settings"/>
                {settingsMenuOpen ? <ExpandLess/> : <ExpandMore/>}
            </ListItemButton>
            <Collapse in={settingsMenuOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {navbarConfig.settings.map(({path, title, icon}) => (
                        <ListItemButton
                            selected={selectedPath === path}
                            onClick={(event) => onListItemClick(event, path)}
                            key={path}
                            sx={{pl: 4}}>
                            <ListItemIcon color="primary">
                                {icon}
                            </ListItemIcon>
                            <Link className={cls.link} to={path}>
                                <ListItemText primary={title}/>
                            </Link>
                        </ListItemButton>
                    ))}
                </List>
            </Collapse>
        </List>
    );
};
