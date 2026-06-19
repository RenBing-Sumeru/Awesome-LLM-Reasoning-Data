import assert from "node:assert/strict";
import test from "node:test";
import {
  checkLivePages,
  parseAskConfig,
  validatePublicUrl,
} from "../scripts/live-pages-check.mjs";

function response(status, body) {
  return {
    ok: status >= 200 && status < 300,
    status,
    async text() {
      return typeof body === "string" ? body : JSON.stringify(body);
    },
    async json() {
      return typeof body === "string" ? JSON.parse(body) : body;
    },
  };
}

function fakeFetch(routes) {
  return async (url) => {
    const route = routes[String(url)];
    if (!route) return response(404, "not found");
    return response(route.status || 200, route.body);
  };
}

test("live Pages check accepts a launch-pending Pages config by default", async () => {
  const report = await checkLivePages({
    pagesUrl: "https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data",
    fetchImpl: fakeFetch({
      "https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/": {
        body: "<title>Ask the Atlas</title>",
      },
      "https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/assets/ask-config.js": {
        body: 'window.ASK_ATLAS_FRONTEND = "pages";\nwindow.ASK_ATLAS_BACKEND_URL = "";\n',
      },
    }),
  });

  assert.equal(report.status, "ready");
  assert.equal(report.backendUrl, "");
});

test("live Pages check requires the backend when promoted to launch gate", async () => {
  const report = await checkLivePages({
    pagesUrl: "https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data",
    requireBackend: true,
    fetchImpl: fakeFetch({
      "https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/": {
        body: "<title>Ask the Atlas</title>",
      },
      "https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/assets/ask-config.js": {
        body: 'window.ASK_ATLAS_FRONTEND = "pages";\nwindow.ASK_ATLAS_BACKEND_URL = "";\n',
      },
    }),
  });

  assert.equal(report.status, "blocked");
  assert.ok(report.checks.some((item) => item.id === "pages-backend-url" && item.status === "block"));
});

test("live Pages check can smoke-test a configured production backend", async () => {
  const report = await checkLivePages({
    pagesUrl: "https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data",
    expectedBackendUrl: "https://ask-atlas.example.com",
    requireBackend: true,
    smoke: true,
    fetchImpl: fakeFetch({
      "https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/": {
        body: "<main>Ask the Atlas</main>",
      },
      "https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/assets/ask-config.js": {
        body: 'window.ASK_ATLAS_FRONTEND = "pages";\nwindow.ASK_ATLAS_BACKEND_URL = "https://ask-atlas.example.com";\n',
      },
      "https://ask-atlas.example.com/api/health?db=1": {
        body: {
          storage: {
            ok: true,
            backend: "postgres",
            tables: 6,
            checkedColumns: 4,
          },
        },
      },
    }),
  });

  assert.equal(report.status, "ready");
  assert.ok(report.checks.some((item) => item.id === "backend-smoke" && item.status === "pass"));
});

test("live Pages config parser rejects secret-like browser-visible content", () => {
  const parsed = parseAskConfig([
    'window.ASK_ATLAS_FRONTEND = "pages";',
    'window.ASK_ATLAS_BACKEND_URL = "https://ask.example.com/?api_key=fk1234567890SECRET";',
  ].join("\n"));
  assert.ok(parsed.problems.some((item) => /secret-like/.test(item)));
});

test("public URL validator rejects non-HTTPS and credentials", () => {
  assert.ok(validatePublicUrl("http://ask.example.com").includes("URL must use https"));
  assert.ok(validatePublicUrl("https://user:pass@ask.example.com").includes("URL must not contain credentials"));
});
