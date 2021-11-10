import { lazy } from 'react';

const Dashboard = lazy(() =>
  import(/* webpackChunkName: "Dashboard" */ '../../../views/containers/Dashboard/Dashboard'),
);

const Account = lazy(() =>
import(/* webpackChunkName: "Account" */ '../../../views/containers/Account/Account')
);


const AllDashboardRoutes = [
    {
      feature: 'DASHBOARD',
      path: '/Dashboard',
      component: Dashboard,
      exact: true,
      private: false,
    },
    {
      feature: 'ACCOUNT',
      path: '/Account',
      component: Account,
      exact: true,
      private: false,
    }
]


export default AllDashboardRoutes;