import { MainPage } from 'pages/Main'
import { type RouteProps, Navigate } from 'react-router-dom'

export enum Routes {
  ROOT = 'root',
  STATISTIC = 'statistic',
  OVERALL_STATISTICS = 'overallStatistics',
  CONTACTS = 'contacts',
  FEEDBACK = 'feedback',
  ALL_CAMPAIGNS = 'allCampaigns',
  CAMPAIGN_CREATE = 'campaignCreate',
  CAMPAIGN_EDIT = 'campaignEdit',
  EDIT_USER = 'editUser',
  USER_SITES = 'userSites',
  EXTERNAL_STATISTICS = 'externalStatistics',
  EXTERNAL_COEFFICIENT = 'externalCoefficient',
  EXTERNAL_HISTORY = 'externalStatisticsHistory',
  LOGIN = 'login',
  REGISTER = 'register',
  FORGOT_PASSWORD = 'forgotPassword'
}

export const RoutePath: Record<Routes, string> = {
  [Routes.ROOT]: '/',
  [Routes.STATISTIC]: 'auction/dashboard/statistic',
  [Routes.OVERALL_STATISTICS]: 'auction/dashboard/overall-statistics',
  [Routes.CONTACTS]: 'auction/contacts',
  [Routes.FEEDBACK]: 'auction/feedback',
  [Routes.CAMPAIGN_CREATE]: 'auction/campaign/create',
  [Routes.ALL_CAMPAIGNS]: 'auction/campaigns',
  [Routes.CAMPAIGN_EDIT]: 'auction/campaign/edit/:id',
  [Routes.EDIT_USER]: 'auction/user/edit/',
  [Routes.USER_SITES]: 'auction/user/sites',
  [Routes.EXTERNAL_STATISTICS]: 'auction/external/statistics',
  [Routes.EXTERNAL_COEFFICIENT]: 'auction/external/coefficient',
  [Routes.EXTERNAL_HISTORY]: 'auction/external/history',
  [Routes.LOGIN]: 'auction/login',
  [Routes.REGISTER]: 'auction/register',
  [Routes.FORGOT_PASSWORD]: 'auction/forgot-password'
}

export const routeConfig: Record<Routes, RouteProps> = {
  [Routes.STATISTIC]: {
    path: RoutePath[Routes.STATISTIC],
    element: <MainPage/>
  },
  [Routes.ROOT]: {
    path: RoutePath[Routes.ROOT],
    element: <Navigate to={RoutePath[Routes.STATISTIC]}/>
  },
  [Routes.OVERALL_STATISTICS]: {
    path: RoutePath[Routes.OVERALL_STATISTICS],
    element: null
  },
  [Routes.CONTACTS]: {
    path: RoutePath[Routes.CONTACTS],
    element: null
  },
  [Routes.FEEDBACK]: {
    path: RoutePath[Routes.FEEDBACK],
    element: null
  },
  [Routes.CAMPAIGN_CREATE]: {
    path: RoutePath[Routes.CAMPAIGN_CREATE],
    element: null
  },
  [Routes.ALL_CAMPAIGNS]: {
    path: RoutePath[Routes.ALL_CAMPAIGNS],
    element: null
  },
  [Routes.CAMPAIGN_EDIT]: {
    path: RoutePath[Routes.CAMPAIGN_EDIT],
    element: null
  },
  [Routes.EDIT_USER]: {
    path: RoutePath[Routes.EDIT_USER],
    element: null
  },
  [Routes.USER_SITES]: {
    path: RoutePath[Routes.USER_SITES],
    element: null
  },
  [Routes.EXTERNAL_STATISTICS]: {
    path: RoutePath[Routes.EXTERNAL_STATISTICS],
    element: null
  },
  [Routes.EXTERNAL_COEFFICIENT]: {
    path: RoutePath[Routes.EXTERNAL_COEFFICIENT],
    element: null
  },
  [Routes.EXTERNAL_HISTORY]: {
    path: RoutePath[Routes.EXTERNAL_HISTORY],
    element: null
  },
  [Routes.LOGIN]: {
    path: RoutePath[Routes.LOGIN],
    element: null
  },
  [Routes.REGISTER]: {
    path: RoutePath[Routes.REGISTER],
    element: null
  },
  [Routes.FORGOT_PASSWORD]: {
    path: RoutePath[Routes.FORGOT_PASSWORD],
    element: null
  }
}
