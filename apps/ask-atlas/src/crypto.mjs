import crypto from "node:crypto";
import { CONFIG } from "./config.mjs";

function sessionKey() {
  return crypto.createHash("sha256").update(CONFIG.sessionSecret).digest();
}

function encryptionKey() {
  return crypto.createHash("sha256").update(CONFIG.tokenEncryptionSecret).digest();
}

export function randomId(bytes = 24) {
  return crypto.randomBytes(bytes).toString("base64url");
}

export function hashValue(value) {
  return crypto.createHash("sha256").update(String(value ?? "")).digest("hex");
}

export function sign(value) {
  return crypto.createHmac("sha256", sessionKey()).update(String(value)).digest("base64url");
}

export function signedValue(value) {
  return `${value}.${sign(value)}`;
}

export function verifySignedValue(signed) {
  const text = String(signed || "");
  const index = text.lastIndexOf(".");
  if (index < 1) return null;
  const value = text.slice(0, index);
  const expected = sign(value);
  const actual = text.slice(index + 1);
  const a = Buffer.from(actual);
  const b = Buffer.from(expected);
  if (a.length !== b.length) return null;
  return crypto.timingSafeEqual(a, b) ? value : null;
}

export function encrypt(value) {
  if (!value) return "";
  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv("aes-256-gcm", encryptionKey(), iv);
  const encrypted = Buffer.concat([cipher.update(String(value), "utf8"), cipher.final()]);
  const tag = cipher.getAuthTag();
  return `${iv.toString("base64url")}.${tag.toString("base64url")}.${encrypted.toString("base64url")}`;
}

export function decrypt(payload) {
  if (!payload) return "";
  const [ivText, tagText, encryptedText] = String(payload).split(".");
  if (!ivText || !tagText || !encryptedText) return "";
  const decipher = crypto.createDecipheriv("aes-256-gcm", encryptionKey(), Buffer.from(ivText, "base64url"));
  decipher.setAuthTag(Buffer.from(tagText, "base64url"));
  const decrypted = Buffer.concat([
    decipher.update(Buffer.from(encryptedText, "base64url")),
    decipher.final(),
  ]);
  return decrypted.toString("utf8");
}
