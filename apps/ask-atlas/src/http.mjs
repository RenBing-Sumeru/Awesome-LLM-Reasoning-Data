import { URL } from "node:url";
import { CONFIG } from "./config.mjs";

export function parseUrl(req) {
  return new URL(req.url, "http://localhost");
}

export function parseCookies(req) {
  const header = req.headers.cookie || "";
  return Object.fromEntries(
    header
      .split(";")
      .map((part) => part.trim())
      .filter(Boolean)
      .map((part) => {
        const index = part.indexOf("=");
        return index < 0
          ? [part, ""]
          : [decodeURIComponent(part.slice(0, index)), decodeURIComponent(part.slice(index + 1))];
      }),
  );
}

export async function readJson(req, limit = 64 * 1024) {
  const chunks = [];
  let size = 0;
  for await (const chunk of req) {
    size += chunk.length;
    if (size > limit) {
      const error = new Error("Request body is too large.");
      error.status = 413;
      throw error;
    }
    chunks.push(chunk);
  }
  const text = Buffer.concat(chunks).toString("utf8").trim();
  return text ? JSON.parse(text) : {};
}

export function sendJson(res, status, payload, headers = {}) {
  const body = JSON.stringify(payload, null, 2);
  res.writeHead(status, {
    "content-type": "application/json; charset=utf-8",
    "cache-control": "no-store",
    "x-content-type-options": "nosniff",
    "referrer-policy": "same-origin",
    "x-frame-options": "DENY",
    ...headers,
  });
  res.end(body);
}

export function redirect(res, location, headers = {}) {
  res.writeHead(302, { location, ...headers });
  res.end();
}

export function setCookie(name, value, options = {}) {
  const parts = [
    `${encodeURIComponent(name)}=${encodeURIComponent(value)}`,
    "Path=/",
    "HttpOnly",
    `SameSite=${options.sameSite || "Lax"}`,
  ];
  if (options.maxAge) parts.push(`Max-Age=${options.maxAge}`);
  if (options.secure) parts.push("Secure");
  return parts.join("; ");
}

export function clearCookie(name, options = {}) {
  const parts = [
    `${encodeURIComponent(name)}=`,
    "Path=/",
    "Max-Age=0",
    "HttpOnly",
    `SameSite=${options.sameSite || "Lax"}`,
  ];
  if (options.secure) parts.push("Secure");
  return parts.join("; ");
}

export function clientIp(req) {
  if (CONFIG.trustProxy) {
    const cf = req.headers["cf-connecting-ip"];
    if (typeof cf === "string" && cf) return cf.trim();
    const forwarded = req.headers["x-forwarded-for"];
    if (typeof forwarded === "string" && forwarded) return forwarded.split(",")[0].trim();
  }
  return req.socket.remoteAddress || "unknown";
}
