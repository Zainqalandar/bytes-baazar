import { lazy } from 'react';
import { authRoles } from 'src/app/auth';

const Agent = lazy(() => import('./Agent'));

const AgentConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  auth: authRoles.administrator,
  routes: [
    {
      path: 'users/agents/view/:agentId',
      children: [
        {
          path: '',
          element: <Agent />,
        },
      ],
    },
  ],
};

export default AgentConfig;
