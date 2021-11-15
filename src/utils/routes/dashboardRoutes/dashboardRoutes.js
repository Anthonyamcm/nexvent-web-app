import { lazy } from 'react';

const Dashboard = lazy(() =>
  import(/* webpackChunkName: "Dashboard" */ '../../../views/containers/Dashboard/Dashboard'),
);

const Account = lazy(() =>
import(/* webpackChunkName: "Account" */ '../../../views/containers/Account/Account')
);

const Event = lazy(() =>
import(/* webpackChunkName: "Account" */ '../../../views/containers/Event/Event')
);


const AllDashboardRoutes = [
    {
      feature: 'DASHBOARD',
      path: '/Dashboard',
      component: Dashboard,
      exact: true,
      private: true,
    },
    {
      feature: 'ACCOUNT',
      path: '/Account',
      component: Account,
      exact: true,
      private: true,
    },
    {
      feature: 'Event',
      path: '/Event',
      component: Event,
      exact: true,
      private: true,
    }

]


export default AllDashboardRoutes;