const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    plugins: {
      add: [
        new Dotenv({
          path: './.env', // Path to .env file
          safe: false, // Load .env.example (optional)
          systemvars: true, // Load system environment variables
          silent: false, // Hide errors
          defaults: false, // Load .env.defaults
        }),
      ],
    },
  },
};
