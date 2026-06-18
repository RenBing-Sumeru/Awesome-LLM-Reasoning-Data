import { CONFIG, validateRuntimeConfig } from "../src/config.mjs";
import { route } from "../src/server.mjs";

if (process.env.VERCEL || CONFIG.appEnv === "prod" || CONFIG.appEnv === "production") {
  validateRuntimeConfig();
}

export default function handler(req, res) {
  return route(req, res);
}
