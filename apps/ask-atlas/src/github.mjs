import { CONFIG, repoFullName } from "./config.mjs";
import { accessTokenForUser } from "./auth.mjs";

async function githubRequest(user, path) {
  const token = accessTokenForUser(user);
  const headers = {
    accept: "application/vnd.github+json",
    "user-agent": "ask-atlas",
    "x-github-api-version": "2022-11-28",
  };
  if (token) headers.authorization = `Bearer ${token}`;
  const response = await fetch(`https://api.github.com${path}`, {
    headers: {
      ...headers,
    },
  });
  let payload = {};
  try {
    payload = await response.json();
  } catch (_error) {
    payload = {};
  }
  return { ok: response.ok, status: response.status, payload };
}

export async function verifyStar(user) {
  if (CONFIG.devAuth) return true;
  const result = await githubRequest(user, `/users/${encodeURIComponent(user.login)}/starred/${repoFullName()}`);
  return result.status === 204;
}

export async function verifyFork(user) {
  if (CONFIG.devAuth) return true;
  const direct = await githubRequest(user, `/repos/${encodeURIComponent(user.login)}/${CONFIG.repoName}`);
  if (direct.ok && direct.payload?.fork) {
    const parent = String(direct.payload?.parent?.full_name || "").toLowerCase();
    if (parent === repoFullName().toLowerCase()) return true;
  }
  const login = String(user.login || "").toLowerCase();
  for (let page = 1; page <= CONFIG.githubForkScanPages; page += 1) {
    const result = await githubRequest(user, `/repos/${repoFullName()}/forks?per_page=100&sort=newest&page=${page}`);
    if (!result.ok || !Array.isArray(result.payload)) return false;
    if (result.payload.some((fork) => String(fork.owner?.login || "").toLowerCase() === login)) return true;
    if (result.payload.length < 100) return false;
  }
  return false;
}
