module.exports = {
    credentials: {
        client_id: process.env.FORGE_CLIENT_ID,
        client_secret: process.env.FORGE_CLIENT_SECRET
    },
    scopes: {
        public: ['viewables:read']
    },
    models: [
        process.env.FORGE_MODEL_URN
    ]
};
