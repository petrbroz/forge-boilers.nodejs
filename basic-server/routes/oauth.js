const express = require('express');
const forge = require('forge-apis');
const config = require('../config');

let router = express.Router();

// GET /api/forge/oauth/token - generates a public access token (required by the Forge viewer).
router.get('/token', async (req, res, next) => {
    try {
        const { client_id, client_secret } = config.credentials;
        const auth = new forge.AuthClientTwoLegged(client_id, client_secret, config.scopes.public);
        const credentials = await auth.authenticate();
        res.json(credentials);
    } catch(err) {
        next(err);
    }
});

module.exports = router;
