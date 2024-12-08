
import { lazy } from 'react';
import { authRoles } from '../../auth';

const Reports = lazy(() => import('./index'));

const reportsConfig = {
    settings: {
        layout: {
            config: {

            },
        },
    },
    auth: authRoles.administrator,
    routes: [
        {
            path: 'reports',
            element: <Reports />,
        },
    ],
};

export default reportsConfig;