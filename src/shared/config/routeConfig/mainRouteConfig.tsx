import {RouteProps} from "react-router-dom";
import {MainPage} from "pages/Main";

export enum MainRoutes {
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
}

export const MainRoutePath: Record<MainRoutes, string> = {
    [MainRoutes.MAIN]: '/',
    [MainRoutes.CONTACTS]: '/contacts',
    [MainRoutes.FEEDBACK]: '/feedback',
    [MainRoutes.CAMPAIGN_CREATE]: '/campaign/create',
    [MainRoutes.ALL_CAMPAIGNS]: '/campaigns',
    [MainRoutes.CAMPAIGN_EDIT]: '/campaign/edit/:id',
    [MainRoutes.EDIT_USER]: '/user/edit/',
    [MainRoutes.USER_SITES]: '/user/sites',
    [MainRoutes.EXTERNAL_STATISTICS]: '/external',
    [MainRoutes.EXTERNAL_STATISTICS_HISTORY]: '/external/history',
}

export const mainRouteConfig: Record<MainRoutes, RouteProps> = {
    [MainRoutes.MAIN]: {
        path: MainRoutePath[MainRoutes.MAIN],
        element: <MainPage/>,
    },
    [MainRoutes.CONTACTS]: {
        path: MainRoutePath[MainRoutes.CONTACTS],
        element: null,
    },
    [MainRoutes.FEEDBACK]: {
        path: MainRoutePath[MainRoutes.FEEDBACK],
        element: null,
    },
    [MainRoutes.CAMPAIGN_CREATE]: {
        path: MainRoutePath[MainRoutes.CAMPAIGN_CREATE],
        element: null,
    },
    [MainRoutes.ALL_CAMPAIGNS]: {
        path: MainRoutePath[MainRoutes.ALL_CAMPAIGNS],
        element: null,
    },
    [MainRoutes.CAMPAIGN_EDIT]: {
        path: MainRoutePath[MainRoutes.CAMPAIGN_EDIT],
        element: null,
    },
    [MainRoutes.EDIT_USER]: {
        path: MainRoutePath[MainRoutes.EDIT_USER],
        element: null,
    },
    [MainRoutes.USER_SITES]: {
        path: MainRoutePath[MainRoutes.USER_SITES],
        element: null,
    },
    [MainRoutes.EXTERNAL_STATISTICS]: {
        path: MainRoutePath[MainRoutes.EXTERNAL_STATISTICS],
        element: null,
    },
    [MainRoutes.EXTERNAL_STATISTICS_HISTORY]: {
        path: MainRoutePath[MainRoutes.EXTERNAL_STATISTICS_HISTORY],
        element: null,
    },
}