// libraries
import cors from "cors";

// Constants
import { ACCEPTED_ORIGINS } from "../constants/index.js";

export const corsMiddleware = () =>
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
  });

// app.use((req, res, next) => {
//   CORS Example
//   res.header("Access-Control-Allow-Origin", "*"); // This is an example, adjust as needed
//   Validate the origin against the accepted origins
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
