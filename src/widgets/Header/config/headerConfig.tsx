import {RoutePath, Routes} from "shared/config/routeConfig";
import PersonIcon from "@mui/icons-material/Person";
import LanguageIcon from "@mui/icons-material/Language";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ContactEmergencyIcon from "@mui/icons-material/ContactEmergency";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import React from "react";

export interface IHeaderMenuItem {
    title: string;
    path?: string;
    icon: JSX.Element;
}


export const headerConfig: IHeaderMenuItem[] = [
    {title: 'Dashboard', path: RoutePath[Routes.MAIN], icon: <QueryStatsIcon fontSize="small" color="primary"/>},
    {title: 'Account', path: RoutePath[Routes.EDIT_USER], icon: <PersonIcon fontSize="small" color="primary"/>},
    {title: 'Sites', path: RoutePath[Routes.USER_SITES], icon: <LanguageIcon fontSize="small" color="primary"/>},
    {title: 'Support', path: RoutePath[Routes.FEEDBACK], icon: <SupportAgentIcon fontSize="small" color="primary"/>},
    {title: 'Contacts', path: RoutePath[Routes.CONTACTS], icon: <ContactEmergencyIcon fontSize="small" color="primary"/>},
]