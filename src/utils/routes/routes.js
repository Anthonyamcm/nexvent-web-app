import LandingPage from "../../views/containers/landingPage/LandingPage";
import Authentication from '../../views/containers/Authentication/Authentication'


const routes = [
    { path: '/', component: LandingPage, exact: true },
    { path: '/signup', component: Authentication, exact: true, private: false }
]

const redirects = [
    {
      from: '/test',
      to: '/',
      exact: true,
    },
  ];
  
  export { redirects, routes };