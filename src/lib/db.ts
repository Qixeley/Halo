import { pendingMigrations } from "../../scripts/migration-plan.mjs";

/** Which database backend is active. */
export type DbSource = "neon" | "pglite";

const rawDatabaseUrl =
  typeof process !== "undefined" ? process.env.DATABASE_URL : undefined;

export const databaseUrl = rawDatabaseUrl?.trim() || undefined;
export const dbSource: DbSource = databaseUrl ? "neon" : "pglite";

export async function ensureDbReady(): Promise<void> {
  // migration logic here
}
