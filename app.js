process.loadEnvFile();
import app from "./src/index.js";
// Config
import { env } from "./src/config/index.js";

app.listen(env.PORT, () => {
  console.log(`Example app listening on port ${env.PORT}`);
});

// !NOTE: MVC https://youtu.be/ev3Yxva4wI4?si=qu3c7LRGv2WblAT6&t=3127
