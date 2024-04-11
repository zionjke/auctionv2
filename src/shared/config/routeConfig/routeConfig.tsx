import {RouteProps} from "react-router-dom";
import {MainPage} from "pages/Main";

export enum Routes {
    MAIN = 'main',
    CONTACTS = 'contacts',
    FEEDBACK = 'feedback',
    ALL_CAMPAIGNS = 'allCampaigns',
    CAMPAIGN_CREATE = 'campaignCreate',
    CAMPAIGN_EDIT = 'campaignEdit',
    EDIT_USER = 'editUser',
    USER_SITES = 'userSites',
    EXTERNAL_STATISTICS = 'externalStatistics',
    EXTERNAL_STATISTICS_HISTORY = 'externalStatisticsHistory',
    LOGIN = 'login',
    REGISTER = 'register',
}

export const RoutePath: Record<Routes, string> = {
    [Routes.MAIN]: '/',
    [Routes.CONTACTS]: '/contacts',
    [Routes.FEEDBACK]: '/feedback',
    [Routes.CAMPAIGN_CREATE]: '/campaign/create',
    [Routes.ALL_CAMPAIGNS]: '/campaigns',
    [Routes.CAMPAIGN_EDIT]: '/campaign/edit/:id',
    [Routes.EDIT_USER]: '/user/edit/',
    [Routes.USER_SITES]: '/user/sites',
    [Routes.EXTERNAL_STATISTICS]: '/external',
    [Routes.EXTERNAL_STATISTICS_HISTORY]: '/external/history',
    [Routes.LOGIN]: '/login',
    [Routes.REGISTER]: '/register',
}

export const routeConfig: Record<Routes, RouteProps> = {
    [Routes.MAIN]: {
        path: RoutePath[Routes.MAIN],
        element: <MainPage/>,
    },
    [Routes.CONTACTS]: {
        path: RoutePath[Routes.CONTACTS],
        element: null,
    },
    [Routes.FEEDBACK]: {
        path: RoutePath[Routes.FEEDBACK],
        element: null,
    },
    [Routes.CAMPAIGN_CREATE]: {
        path: RoutePath[Routes.CAMPAIGN_CREATE],
        element: null,
    },
    [Routes.ALL_CAMPAIGNS]: {
        path: RoutePath[Routes.ALL_CAMPAIGNS],
        element: null,
    },
    [Routes.CAMPAIGN_EDIT]: {
        path: RoutePath[Routes.CAMPAIGN_EDIT],
        element: null,
    },
    [Routes.EDIT_USER]: {
        path: RoutePath[Routes.EDIT_USER],
        element: null,
    },
    [Routes.USER_SITES]: {
        path: RoutePath[Routes.USER_SITES],
        element: null,
    },
    [Routes.EXTERNAL_STATISTICS]: {
        path: RoutePath[Routes.EXTERNAL_STATISTICS],
        element: null,
    },
    [Routes.EXTERNAL_STATISTICS_HISTORY]: {
        path: RoutePath[Routes.EXTERNAL_STATISTICS_HISTORY],
        element: null,
    },
    [Routes.LOGIN]: {
        path: RoutePath[Routes.LOGIN],
        element: null,
    },
    [Routes.REGISTER]: {
        path: RoutePath[Routes.REGISTER],
        element: null,
    },
}