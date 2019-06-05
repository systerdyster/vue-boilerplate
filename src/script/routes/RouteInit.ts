import VueRouter from 'vue-router';

import { RouteNames } from './RouteNames';

import { $homeRoutes } from './HomeRoutes';
import { $aboutRoutes } from './AboutRoutes';

const $routeCollection = [
    $homeRoutes,
    $aboutRoutes
];

// Add Route Collection.
const router = new VueRouter({ routes: $routeCollection });

// Before loading route, check authentication.
router.beforeEach(async (to, from, next) => {
    if (to.meta.requireAuth) {
        // Evalutate if Allowed.
        let allowed = true;
        
        if (!allowed) {
            // Where to redirect if not allowed.
            next({ name: RouteNames.HOME });
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;
