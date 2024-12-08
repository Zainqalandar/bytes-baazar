import { lazy } from 'react';
import { authRoles } from '../../auth';

const Users = lazy(() => import('./index'));

const userConfig = {
    settings: {
        layout: {
            config: {
                navbar: {
                    display: false,
                },
                toolbar: {
                    display: false,
                },
                footer: {
                    display: false,
                },
                leftSidePanel: {
                    display: false,
                },
                rightSidePanel: {
                    display: false,
                },
            },
        },
    },
    auth: authRoles.userDeveloper,
    routes: [
        {
            path: 'users',
            element: <Users />,
        },
    ],
};

export default userConfig;