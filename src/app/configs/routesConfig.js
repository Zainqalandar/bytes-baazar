import FuseUtils from '@fuse/utils';
import FuseLoading from '@fuse/core/FuseLoading';
import { Navigate } from 'react-router-dom';
import settingsConfig from 'app/configs/settingsConfig';
import Error404Page from '../main/404/Error404Page';
import Dashboard from '../main/dashboards/Dashboard';
import SignInConfig from '../main/sign-in/SignInConfig';
import AccountPendingConfig from '../main/sign-in/authentication/AccountPendingConfig';
import dashboardsConfigs from '../main/dashboards/dashboardsConfigs';
import SignOutConfig from '../main/sign-out/SignOutConfig';
import TaskLogs from "../main/task-logs";
import Users from '../main/users';
import FortogConfig from '../main/forgot-password/ForgotPasswordConfig';
import ResetPasswordConfig from '../main/reset-password/resetPasswordConfig';
import Teams from '../main/teams';
import TeamOne from '../main/teams/team-one';
import Reports from '../main/reports';

const routeConfigs = [
    SignInConfig,
    FortogConfig,
    ResetPasswordConfig,
    SignOutConfig,
    AccountPendingConfig,
    ...dashboardsConfigs,
];

const routes = [
    ...FuseUtils.generateRoutesFromConfigs(routeConfigs, settingsConfig.defaultAuth),
    {
        path: '/',
        element: <Dashboard />,
        // rethinkComment:
        auth: settingsConfig.defaultAuth,
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
        // rethinkComment:
        auth: settingsConfig.defaultAuth,
    },
    {
        path: '/task-logs',
        // element: <TaskLogs />,
        // rethinkComment:
        auth: settingsConfig.defaultAuth,
    },
    {
        path: '/users',
        // element: <Users />,
        // rethinkComment:
        auth: settingsConfig.defaultAuth,
    },
    {
        path: '/Reports',
        // element: <Reports />,
        // rethinkComment:
        auth: settingsConfig.defaultAuth,
    },
    {
        // path: '/teams/team-one',
        // element: <Teams />,
        // rethinkComment:  
        auth: settingsConfig.defaultAuth,
        children : [
            {
                path: '/teams/team-one',
                // element: <TeamOne />,
                // rethinkComment:
                auth: settingsConfig.defaultAuth,
            },
        ]
    },
    {
        path: 'loading',
        element: <FuseLoading/>,
    },
    {
        path: '404',
        element: <Error404Page/>,
    },
    {
        path: '*',
        element: <Navigate to="404"/>,
    },
];

export default routes;
