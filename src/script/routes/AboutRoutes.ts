import { RouteNames } from './RouteNames';

const AboutPage = () => import(/* webpackChunkName: "about" */ '../components/pages/about/AboutPage');

const $aboutRoutes = {
    name: RouteNames.ABOUT,
    path: '/about',
    component: AboutPage,
    props: false,
    meta: {
        requireAuth: false
    }
};

export { $aboutRoutes };