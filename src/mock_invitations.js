const uuid = require('node-uuid');

module.exports = {
    invite(state) {
        return ({body: {orgGuid, emails: [username], orgRoles}}, res) => {
            const guid = uuid.v4();
            const resource = {
                metadata: {
                    guid
                },
                entity: {
                    admin: false,
                    active: false,
                    username,
                    organization_roles: orgRoles[orgGuid]
                }
            };
            state.user_roles[guid] = resource;
            state.associations.organizations[orgGuid].user_roles.push(guid);
            res.json(resource);
        };
    }
};