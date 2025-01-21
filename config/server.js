module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'), // Specifies the host for your Strapi application
  port: env.int('PORT', 1337),  // Specifies the port for your Strapi application
  app: {
    keys: env.array('APP_KEYS', ['yourKeyA', 'yourKeyB']), // Sets the application keys for session middleware
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false), // Optional: Controls whether webhook payloads include related data
  },
});
