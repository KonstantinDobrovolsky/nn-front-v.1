import { lazy } from "react"

export const TournamentResultsPageAsync = lazy(
    () => import("./TournamentResultsPage")
    .then(({ TournamentResultsPage }) => ({ default: TournamentResultsPage }))
)