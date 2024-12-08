import { lazy } from 'react';
import { authRoles } from '../../auth';

const Createteam = lazy(() => import('./index'));

const taskLogsConfig = {
    settings: {
        layout: {
            config: {},
        },
    },
    auth: authRoles.userDeveloper,
    routes: [
        {
            path: 'users',
            element: <Createteam />,
        },
    ],
};

export default taskLogsConfig;