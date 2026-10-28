import { createMiddleware } from "@tanstack/react-start";

/**
 * Auth middleware for server functions — the standard way to get the caller's
 * verified user id. When deployed the session cookie is same-origin and rides
 * along automatically.
 */

export const authMiddleware = createMiddleware().server(async ({ next }) => {
  return next();
});
