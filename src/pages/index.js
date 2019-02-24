export const Home = {
    path: '/',
    name: 'Home',
    exact: true,
    loader: () => import(/* webpackChunkName: "Home" */ './Home')
};

export const About = {
    path: '/about',
    name: 'About',
    exact: true,
    loader: () => import(/* webpackChunkName: "About" */ './About')
};

export const NotFound = {
    path: '/',
    loader: () => import(/* webpackChunkName: "404" */ './NotFound')
};