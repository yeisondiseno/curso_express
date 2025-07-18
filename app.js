import app from "./src/index.js";
// Config
import { env } from "./src/config/index.js";

app.listen(env.PORT, () => {
  console.log(`Example app listening on port ${env.PORT}`);
});
