import {MainRoutePath, MainRoutes} from "shared/config/routeConfig";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import PersonIcon from "@mui/icons-material/Person";
import LanguageIcon from "@mui/icons-material/Language";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ContactEmergencyIcon from "@mui/icons-material/ContactEmergency";
import LinkIcon from "@mui/icons-material/Link";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";

interface INavbarItem {
    title: string;
    path: string;
    icon: JSX.Element;
}
interface INavbarConfig {
    campaignsManagement: INavbarItem[];
    settings: INavbarItem[];
}


export const navbarConfig: INavbarConfig = {
    campaignsManagement: [
        {title: 'Create new campaign', path: MainRoutePath[MainRoutes.CAMPAIGN_CREATE], icon: <AddCircleOutlineIcon color="primary"/>},
        {title: 'All campaigns', path: MainRoutePath[MainRoutes.ALL_CAMPAIGNS], icon: <FormatListBulletedIcon color="primary"/>},
    ],
    settings: [
        {title: 'Account settings', path: MainRoutePath[MainRoutes.EDIT_USER], icon: <PersonIcon color="primary"/>},
        {title: 'Sites', path: MainRoutePath[MainRoutes.USER_SITES], icon: <LanguageIcon color="primary"/>},
        {title: 'Support', path: MainRoutePath[MainRoutes.FEEDBACK], icon: <SupportAgentIcon color="primary"/>},
        {title: 'Contacts', path: MainRoutePath[MainRoutes.CONTACTS], icon: <ContactEmergencyIcon color="primary"/>},
        {title: 'External statistic', path: MainRoutePath[MainRoutes.EXTERNAL_STATISTICS], icon: <LinkIcon color="primary"/>},
        {title: 'External statistic history', path: MainRoutePath[MainRoutes.EXTERNAL_STATISTICS_HISTORY], icon: <ManageSearchIcon color="primary"/>},
    ]
}