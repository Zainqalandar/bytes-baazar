import { lazy } from 'react';
import { authRoles } from 'src/app/auth';

const AccountPending = lazy(() => import('./AccountPending'));
const AccountPendingConfig = {
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
  // rethinkComment:
  auth: authRoles.onlyGuest,
  routes: [
    {
      path: 'account-pending',
      element: <AccountPending />,
    },
  ],
};

export default AccountPendingConfig;
