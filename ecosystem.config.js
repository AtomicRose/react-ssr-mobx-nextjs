module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [

    // First application
    {
      name: 'development',
      script: 'server/server.js',
      watch: true,
      env: {
        "NODE_ENV": "development",
        "DOMAIN_USE": "development"
      },
      env_production: {
        NODE_ENV: 'production'
      },
      watch: [
        "server",
        "next.config.js",
        "babel.config.js",
        "eslintrc",
        "eslintignore",
        "postcss.config.js"
      ]
    }
  ]
};
