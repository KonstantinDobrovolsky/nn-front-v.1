import { lazy } from 'react'

export const CurrentFightsPageAsync = lazy(
    () => import('./CurrentFightsPage')
    .then(({ CurrentFightsPage }) => ({default: CurrentFightsPage }))
)