import { lazy } from 'react';

const Dashboard = lazy(() =>
  import(/* webpackChunkName: "Dashboard" */ '../../../views/containers/Dashboard/Dashboard'),
);


const AllDashboardRoutes = [
    {
      feature: 'DASHBOARD',
      path: '/dashboard',
      component: Dashboard,
      exact: true,
      private: false,
    }
]


export default AllDashboardRoutes;