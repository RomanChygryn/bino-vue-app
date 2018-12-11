import Home from './views/Home.vue';
import Tshirtdesign from "./subpages/Tshirtdesign";
import Webdesign from "./subpages/Webdesign";
import Photography from "./subpages/Photography";
import Ecommerce from "./subpages/Ecommerce";
import Contact from "./subpages/Contact";
import Aboutus from "./subpages/Aboutus";
import Pricing from "./subpages/Pricing";
import Portfolio from "./subpages/Portfolio";
import Team from "./subpages/Team";
import Blog from "./subpages/Blog";


export const routes = [
    { path: '/', component: Home },
    { path: '/t-shirt-design', component: Tshirtdesign},
    { path: '/web-design', component: Webdesign},
    { path: '/photography', component: Photography},
    { path: '/e-commerce', component: Ecommerce},
    { path: '/contact', component: Contact},
    { path: '/about-us', component: Aboutus},
    { path: '/price', component: Pricing},
    { path: '/portfolio', component: Portfolio},
    { path: '/team', component: Team},
    { path: '/blog', component: Blog},
    { path: '*', redirect: '/'}
];

