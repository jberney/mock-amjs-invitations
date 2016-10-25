const {Router} = require('express');

const MockInvitations = require('./mock_invitations');

module.exports = {
    newRouter(state) {
        const router = new Router();
        router.post('/invite', MockInvitations.invite(state));
        return router;
    }
};