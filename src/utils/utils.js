import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve, isAbsolute } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const readJSON = (path) => {
  let fullPath;

  if (isAbsolute(path)) {
    fullPath = path;
  } else if (path.startsWith("./")) {
    // Resuelve desde la raíz del proyecto (2 niveles arriba desde utils)
    const projectRoot = resolve(__dirname, "../../");
    fullPath = resolve(projectRoot, path.slice(2)); // Remueve './'
  } else {
    // Ruta relativa desde utils
    fullPath = resolve(__dirname, path);
  }

  if (!existsSync(fullPath)) {
    throw new Error(`JSON file not found: ${fullPath}`);
  }

  try {
    const content = readFileSync(fullPath, "utf8");
    return JSON.parse(content);
  } catch (error) {
    throw new Error(`Error parsing JSON file ${fullPath}: ${error.message}`);
  }
};
