import React from 'react';
import {Link} from "react-router-dom";
import cls from './Navbar.module.scss'
import {ListItemButton, ListItemIcon, ListItemText, Collapse, List} from '@mui/material';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import CampaignIcon from '@mui/icons-material/Campaign';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {MainRoutePath, MainRoutes} from "shared/config/routeConfig";
import {navbarConfig} from "widgets/Navbar/config/navbarConfig";



export const Navbar = () => {
    const [campaignMenuOpen, setCampaignMenuOpen] = React.useState(true);
    const [settingsMenuOpen, setSettingsMenuOpen] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = React.useState("");

    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        path: string,
    ) => {
        setSelectedIndex(path);
    };

    const handleCampaignMenuClick = () => {
        setCampaignMenuOpen(!campaignMenuOpen);
    };

    const handleSettingsMenuClick = () => {
        setSettingsMenuOpen(!settingsMenuOpen);
    };

    return (
        <List
            className={cls.nav}
            component="nav"
        >
            <ListItemButton selected={selectedIndex === MainRoutePath[MainRoutes.MAIN]}
                            onClick={(event) => handleListItemClick(event, MainRoutePath[MainRoutes.MAIN])}>
                <ListItemIcon>
                    <QueryStatsIcon color="primary"/>
                </ListItemIcon>
                <Link className={cls.link} to={MainRoutePath[MainRoutes.MAIN]}>
                    <ListItemText primary="Campaign Insights"/>
                </Link>
            </ListItemButton>
            <ListItemButton onClick={handleCampaignMenuClick}>
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
                            selected={selectedIndex === path}
                            onClick={(event) => handleListItemClick(event, path)}
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
            <ListItemButton onClick={handleSettingsMenuClick}>
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
                            selected={selectedIndex === path}
                            onClick={(event) => handleListItemClick(event, path)}
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
