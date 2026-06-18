import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import pg from "pg";
import { CONFIG, databaseSslOptions } from "../src/config.mjs";
import { verifyDatabaseSchema } from "../src/db-schema.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const APP_ROOT = path.resolve(__dirname, "..");
const SCHEMA_PATH = path.join(APP_ROOT, "db", "schema.sql");

function usage() {
  console.log(`Usage:
  npm run db:setup -- [--check]

Environment:
  DATABASE_URL is required.
  ASK_ATLAS_DATABASE_SSL=auto|require|disable controls TLS.

Modes:
  default   Apply db/schema.sql in one transaction, then verify key tables.
  --check   Verify key tables/columns/RLS without changing the database.`);
}

async function main() {
  const rawArgs = process.argv.slice(2);
  const allowedArgs = new Set(["--check", "--help", "-h"]);
  const unknownArgs = rawArgs.filter((arg) => !allowedArgs.has(arg));
  if (unknownArgs.length) {
    throw new Error(`Unknown argument(s): ${unknownArgs.join(", ")}. Run with --help for usage.`);
  }
  const args = new Set(rawArgs);
  if (args.has("--help") || args.has("-h")) {
    usage();
    return;
  }
  const checkOnly = args.has("--check");
  if (!CONFIG.databaseUrl) {
    throw new Error("DATABASE_URL is required for Ask Atlas database setup.");
  }

  const pool = new pg.Pool({
    connectionString: CONFIG.databaseUrl,
    max: 1,
    idleTimeoutMillis: 5_000,
    connectionTimeoutMillis: 10_000,
    application_name: checkOnly ? "ask-atlas-db-check" : "ask-atlas-db-setup",
    ssl: databaseSslOptions(),
  });
  const client = await pool.connect();
  try {
    if (!checkOnly) {
      const sql = await fs.readFile(SCHEMA_PATH, "utf8");
      await client.query("begin");
      try {
        await client.query(sql);
        await client.query("commit");
      } catch (error) {
        await client.query("rollback");
        throw error;
      }
    }
    const summary = await verifyDatabaseSchema(client);
    console.log(JSON.stringify({
      ok: true,
      mode: checkOnly ? "check" : "setup",
      schemaPath: path.relative(process.cwd(), SCHEMA_PATH),
      ...summary,
    }, null, 2));
  } finally {
    client.release();
    await pool.end();
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
