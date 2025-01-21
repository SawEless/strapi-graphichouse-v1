module.exports = ({ env }) => ({
    'users-permissions': {
      config: {
        jwtSecret: env('JWT_SECRET', 'Jw7eK3nfk6PpLQWz3Y9vRA=='),
      },
    },
  });
  