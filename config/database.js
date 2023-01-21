module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cf4bh194rebbnj5tikeg-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'derechoel'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'hhLM3sMFO7rYtfm0yEdZhiGmqF0srKom'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
