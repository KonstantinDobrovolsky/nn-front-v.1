import { CurrentFightsPage } from "pages/CurrentFightsPage"
import { PlaygroundPage } from "pages/PlaygroundPage"
import { TournamentResultsPage } from "pages/TournamentResultsPage"
import { Navigate, RouteProps } from "react-router-dom"

enum AppRoutes {
    PLAYGROUND = 'playground',
    CURRENT_FIGHTS = 'currentFights',
    TOURNAMENT_RESULTS = 'tournamentResults',
    UNDEFINED = '*'
}

const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.PLAYGROUND]: '/playground',
    [AppRoutes.CURRENT_FIGHTS]: '/currentFights',
    [AppRoutes.TOURNAMENT_RESULTS]: '/tournamentResults',
    [AppRoutes.UNDEFINED]: '*'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.PLAYGROUND]: {
        path: RoutePath[AppRoutes.PLAYGROUND],
        element: <PlaygroundPage/>
    },
    [AppRoutes.CURRENT_FIGHTS]: {
        path: RoutePath[AppRoutes.CURRENT_FIGHTS],
        element: <CurrentFightsPage/>
    },
    [AppRoutes.TOURNAMENT_RESULTS]: {
        path: RoutePath[AppRoutes.TOURNAMENT_RESULTS],
        element: <TournamentResultsPage/>
    },
    [AppRoutes.UNDEFINED]: {
        path: RoutePath[AppRoutes.UNDEFINED],
        element: <Navigate to={RoutePath[AppRoutes.PLAYGROUND]}/>
    }
}