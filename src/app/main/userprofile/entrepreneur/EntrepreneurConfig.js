import { lazy } from 'react';
import { authRoles } from 'src/app/auth';

const Entrepreneur = lazy(() => import('./Entrepreneur'));

const EntrepreneurConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  auth: authRoles.managers,
  routes: [
    {
      path: 'users/entrepreneurs/view/:entrepreneurId',
      children: [
        {
          path: '',
          element: <Entrepreneur />,
        },
      ],
    },
  ],
};

export default EntrepreneurConfig;
