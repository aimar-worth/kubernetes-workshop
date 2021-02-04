module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "mysql",
        host: env("MYSQL_HOST"),
        port: 3306,
        database: env("MYSQL_DATABASE"),
        username: env("MYSQL_ROOT_USER"),
        password: env("MYSQL_ROOT_PASSWORD"),
      },
      options: {
        useNullAsDefault: true,
        pool: {
          acquireTimeoutMillis: 10000,
          createTimeoutMillis: 10000,
        },
      },
    },
  },
});
