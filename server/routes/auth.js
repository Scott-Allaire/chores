var express = require('express');
var router = express.Router();

module.exports = (function (passport) {
    router.post('/login',
        passport.authenticate('local'),
        function (req, res) {
            // create bearer token
            // update user to add token
            // return token
            res.status(200);
            res.json({ 
                accessToken: 'abc123' 
            });
        });
    router.get('/logout',
        // passport.authenticate('bearer'),
        function (req, res) {
            // update user to remove token
        });

    // Return router
    return router;
});                                                