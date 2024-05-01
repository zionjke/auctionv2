import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import ContactEmergencyOutlinedIcon from '@mui/icons-material/ContactEmergencyOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';
import ManageSearchOutlinedIcon from '@mui/icons-material/ManageSearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
import { RoutePath, Routes } from 'shared/config/routeConfig';

interface INavbarItem {
  title: string
  path: string
  icon: JSX.Element
}
export interface INavbarConfig {
  campaignsManagement: INavbarItem[]
  settings: INavbarItem[]
  externalStatistics: INavbarItem[]
}

export const navbarConfig: INavbarConfig = {
    campaignsManagement: [
        { title: 'Create new campaign', path: RoutePath[Routes.CAMPAIGN_CREATE], icon: <AddCircleOutlineOutlinedIcon /> },
        { title: 'All campaigns', path: RoutePath[Routes.ALL_CAMPAIGNS], icon: <FormatListBulletedOutlinedIcon /> },
    ],
    settings: [
        { title: 'Account', path: RoutePath[Routes.EDIT_USER], icon: <PersonOutlineOutlinedIcon /> },
        { title: 'Sites', path: RoutePath[Routes.USER_SITES], icon: <LanguageOutlinedIcon /> },
        { title: 'Support', path: RoutePath[Routes.FEEDBACK], icon: <SupportAgentOutlinedIcon /> },
        { title: 'Contacts', path: RoutePath[Routes.CONTACTS], icon: <ContactEmergencyOutlinedIcon /> },
    ],
    externalStatistics: [
        { title: 'Statistic', path: RoutePath[Routes.EXTERNAL_STATISTICS], icon: <LinkOutlinedIcon /> },
        { title: 'History', path: RoutePath[Routes.EXTERNAL_HISTORY], icon: <ManageSearchOutlinedIcon /> },
        { title: 'Coefficient', path: RoutePath[Routes.EXTERNAL_COEFFICIENT], icon: <TipsAndUpdatesOutlinedIcon /> },
    ],
};
