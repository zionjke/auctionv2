import ContactEmergencyOutlinedIcon from '@mui/icons-material/ContactEmergencyOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import React from 'react';
import { RoutePath, Routes } from 'shared/config/routeConfig';

export interface IUserMenuItem {
  title: string
  path?: string
  icon: JSX.Element
}

export const userMenuConfig: IUserMenuItem[] = [
    { title: 'Account', path: RoutePath[Routes.EDIT_USER], icon: <PersonOutlineOutlinedIcon fontSize="small" color="primary" /> },
    { title: 'Sites', path: RoutePath[Routes.USER_SITES], icon: <LanguageOutlinedIcon fontSize="small" color="primary" /> },
    { title: 'Support', path: RoutePath[Routes.FEEDBACK], icon: <SupportAgentOutlinedIcon fontSize="small" color="primary" /> },
    { title: 'Contacts', path: RoutePath[Routes.CONTACTS], icon: <ContactEmergencyOutlinedIcon fontSize="small" color="primary" /> },
];
