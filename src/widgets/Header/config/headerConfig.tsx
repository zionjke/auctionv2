import {RoutePath, Routes} from "shared/config/routeConfig";
import React from "react";
import ContactEmergencyOutlinedIcon from "@mui/icons-material/ContactEmergencyOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

export interface IHeaderMenuItem {
    title: string;
    path?: string;
    icon: JSX.Element;
}


export const headerConfig: IHeaderMenuItem[] = [
    {title: 'Account', path: RoutePath[Routes.EDIT_USER], icon: <PersonOutlineOutlinedIcon fontSize="small" color="primary"/>},
    {title: 'Sites', path: RoutePath[Routes.USER_SITES], icon: <LanguageOutlinedIcon fontSize="small" color="primary"/>},
    {title: 'Support', path: RoutePath[Routes.FEEDBACK], icon: <SupportAgentOutlinedIcon fontSize="small" color="primary"/>},
    {title: 'Contacts', path: RoutePath[Routes.CONTACTS], icon: <ContactEmergencyOutlinedIcon fontSize="small" color="primary"/>},
]