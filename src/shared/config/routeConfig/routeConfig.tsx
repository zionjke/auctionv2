import {RouteProps} from "react-router-dom";
import {MainPage} from "pages/Main";

export enum AppRoutes {
    MAIN = 'main',
    CONTACTS = 'contacts',
    FEEDBACK = 'feedback',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.CONTACTS]: '/contacts',
    [AppRoutes.FEEDBACK]: '/feedback',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath[AppRoutes.MAIN],
        element: <MainPage/>,
    },
    [AppRoutes.CONTACTS]: {
        path: RoutePath[AppRoutes.CONTACTS],
        element: null,
    },
    [AppRoutes.FEEDBACK]: {
        path: RoutePath[AppRoutes.FEEDBACK],
        element: null,
    },
}