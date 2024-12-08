import { lazy } from 'react';
import { authRoles } from 'src/app/auth';

const Prospect = lazy(() => import('./Prospect'));

const ProspectConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  auth: authRoles.managers,
  routes: [
    {
      path: 'users/prospects/view/:prospectId',
      children: [
        {
          path: '',
          element: <Prospect />,
        },
      ],
    },
  ],
};

export default ProspectConfig;
