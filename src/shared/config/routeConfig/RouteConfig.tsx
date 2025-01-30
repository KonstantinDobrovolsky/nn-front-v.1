import { CurrentFightsPage } from "pages/CurrentFightsPage"
import { FighterPage } from "pages/FighterPage"
import { LongswordRatingPage } from "pages/LongswordRatingPage"
import { PlaygroundPage } from "pages/PlaygroundPage"
import { SaberRatingPage } from "pages/SaberRatingPage"
import { TournamentResultsPage } from "pages/TournamentResultsPage"
import { TournamentSettingsPage } from "pages/TournamentSettingsPage"
import { Navigate, RouteProps } from "react-router-dom"

enum AppRoutes {
    SABER_RATING = 'saberRating',
    LONGSWORD_RATING = 'longswordRating',
    PLAYGROUND = 'playground',
    CURRENT_FIGHTS = 'currentFights',
    TOURNAMENT_RESULTS = 'tournamentResults',
    TOURNAMENT_SETTINGS = 'tournamentSettings',
    FIGHTERS = 'fighters',
    UNDEFINED = '*'
}

const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.SABER_RATING]: '/saberRating',
    [AppRoutes.LONGSWORD_RATING]: '/longswordRating',
    [AppRoutes.PLAYGROUND]: '/playground',
    [AppRoutes.CURRENT_FIGHTS]: '/currentFights',
    [AppRoutes.TOURNAMENT_RESULTS]: '/tournamentResults',
    [AppRoutes.TOURNAMENT_SETTINGS]: '/tournamentSettings',
    [AppRoutes.FIGHTERS]: '/fighters/:id',
    [AppRoutes.UNDEFINED]: '*'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.SABER_RATING]: {
        path: RoutePath[AppRoutes.SABER_RATING],
        element: <SaberRatingPage/>
    },
    [AppRoutes.LONGSWORD_RATING]: {
        path: RoutePath[AppRoutes.LONGSWORD_RATING],
        element: <LongswordRatingPage/>
    },
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
    [AppRoutes.TOURNAMENT_SETTINGS]: {
        path: RoutePath[AppRoutes.TOURNAMENT_SETTINGS],
        element: <TournamentSettingsPage/>
    },
    [AppRoutes.FIGHTERS]: {
        path: RoutePath[AppRoutes.FIGHTERS],
        element: <FighterPage/>
    },
    [AppRoutes.UNDEFINED]: {
        path: RoutePath[AppRoutes.UNDEFINED],
        element: <Navigate to={RoutePath[AppRoutes.SABER_RATING]}/>
    }
}