import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import { routeConfig } from "shared/config/routeConfig/RouteConfig";

export const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {Object.values(routeConfig).map(({path, element}) =>
                    <Route key={path} path={path} element={element}/>)}
            </Routes>
        </Suspense>
    );
}