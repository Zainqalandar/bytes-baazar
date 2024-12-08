/**
 * Authorization Roles
 */
const authRoles = {
    all: ['admin', 'super-admin', 'developer','designer', 'team-lead'],
    administrator: ['admin', 'super-admin'],
    managers: ['agent', 'admin', 'super-admin'],
    userDeveloper: ['developer', 'team-lead', 'designer'],
    onlyGuest: [],
};
export const registrationsUsers = ['admin', 'super-admin'];

export default authRoles;
