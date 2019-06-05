import { RouteNames } from './RouteNames';

const HomePage = () => import(/* webpackChunkName: "home" */ '../components/pages/home/HomePage');

const $homeRoutes = {
    name: RouteNames.HOME,
    path: '/',
    component: HomePage,
    props: false,
    meta: {
        requireAuth: false
    }
};

export { $homeRoutes };