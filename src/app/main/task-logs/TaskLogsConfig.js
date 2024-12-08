import { lazy } from 'react';
import { authRoles } from '../../auth';

const TaskLogs = lazy(() => import('./index'));

const taskLogsConfig = {
    settings: {
        layout: {
            config: {},
        },
    },
    auth: authRoles.userDeveloper,
    routes: [
        {
            path: 'task-logs',
            element: <TaskLogs />,
        },
    ],
};

export default taskLogsConfig;