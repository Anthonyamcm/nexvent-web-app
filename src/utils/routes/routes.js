import LandingPage from "../../views/containers/landingPage/LandingPage";
import Authentication from '../../views/containers/Authentication/Authentication'
import AllDashboardRoutes from './dashboardRoutes/dashboardRoutes';


const routes = [
    { path: '/', component: LandingPage, exact: true },
    { path: '/signup', component: Authentication, exact: true, private: false },
    ...AllDashboardRoutes
]

const redirects = [
    {
      from: '/test',
      to: '/',
      exact: true,
    },
  ];
  
  export { redirects, routes };