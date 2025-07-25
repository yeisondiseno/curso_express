export const env = {
  PORT: process.env.PORT ?? 3600,
  DB_HOST: process.env.DB_HOST ?? "localhost",
  DB_USER: process.env.DB_USER ?? "root",
  DB_PASSWORD: process.env.DB_PASSWORD ?? "",
  DB_NAME: process.env.DB_NAME ?? "moviesdb",
  DB_PORT: process.env.DB_PORT,
};
