const express = require('express');
const config = require('../config');

let router = express.Router();

// GET /api/forge/models - returns list of model URNs.
router.get('/', (req, res, next) => {
    res.json(config.models);
});

module.exports = router;
