const express = require('express');
const path = require('path');

const { FORGE_CLIENT_ID, FORGE_CLIENT_SECRET, FORGE_MODEL_URN } = process.env;
if (!FORGE_CLIENT_ID || !FORGE_CLIENT_SECRET || !FORGE_MODEL_URN) {
    console.warn('Provide all the following env. variables to run this application:');
    console.warn('FORGE_CLIENT_ID, FORGE_CLIENT_SECRET, FORGE_MODEL_URN');
    return;
}

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/forge/oauth', require('./routes/oauth'));
app.use('/api/forge/models', require('./routes/models'));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
