import { lazy } from 'react';
import { authRoles } from 'src/app/auth';

const AdminDashboard = lazy(() => import('./AdminDashboard'));

const adminDashboardConfig = {
    settings: {
        layout: {
            config: {},
        },
    },
    auth: authRoles.administrator,
    routes: [
        {
            path: 'dashboard/admin',
            element: <AdminDashboard />,
        },
    ],
};

export default adminDashboardConfig;