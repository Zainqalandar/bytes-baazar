import { lazy } from 'react';
import { authRoles } from 'src/app/auth';

const DeveloperDashboard = lazy(() => import('./DeveloperDashboard'));

const developerDashboardConfig = {
    settings: {
        layout: {
            config: {},
        },
    },
    auth: authRoles.userDeveloper,
    routes: [
        {
            path: 'dashboard/developer',
            element: <DeveloperDashboard />,
        },
        {
            path: 'dashboard/designer',
            element: <DeveloperDashboard />,
        },
        {
            path: 'dashboard/team-lead',
            element: <DeveloperDashboard />,
        },
    ],
};

export default developerDashboardConfig;