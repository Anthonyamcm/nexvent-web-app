import { lazy } from 'react';

const Dashboard = lazy(() =>
  import(/* webpackChunkName: "Dashboard" */ '../../../views/containers/Dashboard/Dashboard'),
);

const Account = lazy(() =>
import(/* webpackChunkName: "Account" */ '../../../views/containers/Account/Account')
);

const Create = lazy(() =>
import(/* webpackChunkName: "Account" */ '../../../views/containers/Create/Create')
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
      feature: 'CREATE',
      path: '/Create',
      component: Create,
      exact: true,
      private: true,
    }

]


export default AllDashboardRoutes;