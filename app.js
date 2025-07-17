// libraries
import express from "express";
import cors from "cors";
// Config
import { env } from "./config/index.js";
// Constants
import { ACCEPTED_ORIGINS } from "./constants/index.js";

// Configurations
const app = express();
app.disable("x-powered-by");

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: (origin, callback) => {
      if (ACCEPTED_ORIGINS.includes(origin)) {
        return callback(null, origin);
      }

      if (!origin) {
        // Allow requests with no origin (like mobile apps or curl requests)
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
  })
);
// app.use((req, res, next) => {
//   // CORS Example
//   // res.header("Access-Control-Allow-Origin", "*"); // This is an example, adjust as needed
//   // Validate the origin against the accepted origins
//   const origin = req.headers.origin;
//   if (ACCEPTED_ORIGINS.includes(origin)) {
//     res.setHeader("Access-Control-Allow-Origin", origin);
//     res.setHeader(
//       "Access-Control-Allow-Methods",
//       "GET, POST, PUT, DELETE, OPTIONS" // Esto puede ir por petición según el endpoint
//     );
//   }

//   next();
// });

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.get("/health", (req, res) => {
  res.send("<h1>OK</h1>");
});

app.use((req, res, next) => {
  res.status(404).send("<h1>404 Not Found</h1>");
});

app.listen(env.PORT, () => {
  console.log(`Example app listening on port ${env.PORT}`);
});
