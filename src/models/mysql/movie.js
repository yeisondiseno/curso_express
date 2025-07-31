import mysql from "mysql2/promise";
// Config
import { env } from "../../config/env.js";

const config = {
  host: env.DB_HOST,
  user: env.DB_USER,
  port: env.DB_PORT,
  password: env.DB_PASSWORD,
  database: env.DB_NAME,
};

const connection = await mysql.createConnection(config);

export class MovieModel {
  static async getAll({ genre }) {
    if (genre) {
      const genreLower = genre.toLowerCase();

      const [generes] = await connection.query(
        "SELECT name, id FROM genre WHERE LOWER(name) = ?",
        [genreLower]
      );

      if (generes.length === 0) return [];

      const genreId = generes[0].id;
      const [movies] = await connection.query(
        "SELECT BIN_TO_UUID(movie_id) movie_id FROM movie_genres WHERE genre_id = ?",
        [genreId]
      );

      if (movies.length === 0) return [];
      const filteredMovies = await connection.query(
        "SELECT *, BIN_TO_UUID(id) id FROM movie WHERE id IN (?)",
        [movies.map((movie) => movie.movie_id)]
      );

      return filteredMovies;
    }

    const [movies] = await connection.query(
      "SELECT *, BIN_TO_UUID(id) id FROM movie;"
    );

    return movies;
  }

  static async getById({ id }) {
    const [movies] = await connection.query(
      "SELECT *, BIN_TO_UUID(id) id FROM movie WHERE id = UUID_TO_BIN(?)",
      [id]
    );

    return movies[0];
  }

  static async create({ input }) {
    const { title, year, director, duration, poster, rate } = input;

    const [uuidResult] = await connection.query("SELECT UUID() uuid;");
    const [{ uuid }] = uuidResult;

    try {
      await connection.query(
        "INSERT INTO movie (id, title, year, director, duration, poster, rate) VALUES (UUID_TO_BIN(?), ? ,? ,? ,? ,? ,?);",
        [uuid, title, year, director, duration, poster, rate]
      );
    } catch (error) {
      // This error is internal, not allow to user see this
      console.log("error", error);
    }

    const [movies] = await connection.query(
      "SELECT *, BIN_TO_UUID(id) id FROM movie WHERE id = UUID_TO_BIN(?)",
      [uuid]
    );

    return movies[0];
  }

  static async delete({ id }) {
    const [movies] = await connection.query(
      "SELECT * FROM movie WHERE id = UUID_TO_BIN(?)",
      [id]
    );
    if (!movies) return false;

    try {
      await connection.query("DELETE FROM movie WHERE id = UUID_TO_BIN(?);", [
        id,
      ]);

      return true;
    } catch (error) {
      // This error is internal, not allow to user see this
      console.log("error", error);
      return false;
    }
  }

  static async update({ id, input }) {
    if (movieIndex === -1) return false;

    return movies[movieIndex];
  }
}
