import { lazy } from 'react';

export const PlaygroundPageAsync = lazy(
    () => import('./PlaygroundPage')
    .then(({ PlaygroundPage }) => ({default: PlaygroundPage}))
)