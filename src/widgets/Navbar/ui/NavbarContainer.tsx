import React, {FC} from 'react';
import {NavbarComponent} from "./NavbarComponent";
import {navbarConfig} from "../config/navbarConfig";

interface NavbarContainerProps {
    className?: string;
}
export const NavbarContainer: FC<NavbarContainerProps> = ({className}) => {
    const [campaignMenuOpen, setCampaignMenuOpen] = React.useState(true);
    const [settingsMenuOpen, setSettingsMenuOpen] = React.useState(false);
    const [selectedPath, setSelectedPath] = React.useState("");

    const toggleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        path: string,
    ) => {
        setSelectedPath(path);
    };

    const toggleCampaignMenuClick = () => {
        setCampaignMenuOpen(!campaignMenuOpen);
    };

    const toggleSettingsMenuClick = () => {
        setSettingsMenuOpen(!settingsMenuOpen);
    };
    return (
        <NavbarComponent navbarConfig={navbarConfig}
                         campaignMenuOpen={campaignMenuOpen}
                         settingsMenuOpen={settingsMenuOpen}
                         selectedPath={selectedPath}
                         onListItemClick={toggleListItemClick}
                         onCampaignMenuClick={toggleCampaignMenuClick}
                         onSettingsMenuClick={toggleSettingsMenuClick}/>
    );
};