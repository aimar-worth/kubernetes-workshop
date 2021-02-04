module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 80),
  production: true,
  proxy: {
    enabled: false,
  },
  admin: {
    autoOpen: false,
    auth: {
      secret: env("ADMIN_JWT_SECRET", "cdfddf9501e9b4e386f452faad0ddb17"),
    },
  },
});
