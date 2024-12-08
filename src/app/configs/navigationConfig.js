import i18next from 'i18next';
import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';
import { authRoles } from '../auth';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

const navigationConfig = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    translate: 'Dashboard',
    subtitle: '',
    icon: 'heroicons-outline:home',
    type: 'group',
    url: '/dashboard',
  },
  {
    id: 'task-log',
    title: 'Task Logs',
    translate: 'Task Logs',
    subtitle: 'This is a task log page',
    icon: 'heroicons-outline:document-report',
    type: 'group',
    url: '/task-logs',
    auth: authRoles.all,
  },
  {
    'type': 'divider'
},
{
  'id'    : 'test-link',
  'title' : 'Test Link',
  'type'  : 'link',
  'icon'  : 'link',
  'url'   : 'http://fusetheme.com',
  'target': '_blank'
},
  {
    id: 'users',
    title: 'Create Users',
    translate: 'Users',
    subtitle: '',
    icon: 'heroicons-outline:user-circle',
    type: 'group',
    url: '/users',
    auth: authRoles.all,
  },
  {
    id: 'reports',
    title: 'Create Reports',
    translate: 'Reports',
    subtitle: '',
    icon: 'heroicons-outline:user-circle',
    type: 'group',
    url: '/reports',
    auth: authRoles.all,
  },
  {
    id: 'teams6',
    title: 'Create Teams',
    translate: 'Teams',
    subtitle: '',
    icon: 'heroicons-outline:user-group',
    type: 'collapse',
    // url: '/teams/team-one',
    auth: authRoles.all,
    children: [
      {
        id: 'team-one',
        title: 'Team One',
        type: 'item',
        url: '/teams/team-one',
        icon: 'heroicons-outline:clipboard-check',
        end: true,
      },
      {
        id: 'team-two',
        title: 'Team two',
        type: 'item',
        url: '/teams/team-two',
        end: true,
      },
  ]
  },
  
];

export default navigationConfig;
