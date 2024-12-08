import ForgotPassword from "./ForgotPassword";
import authRoles from '../../auth/authRoles';

const FortogConfig = {
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
  auth: authRoles.onlyGuest,
  routes: [
    {
      path: 'forgoten-password',
      element: <ForgotPassword />,
    },
  ],
};

export default FortogConfig;
