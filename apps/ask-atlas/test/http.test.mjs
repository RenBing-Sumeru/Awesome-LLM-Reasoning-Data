import test from "node:test";
import assert from "node:assert/strict";
import { clientIp } from "../src/http.mjs";

test("clientIp does not trust forwarded headers unless proxy trust is enabled", () => {
  const ip = clientIp({
    headers: {
      "x-forwarded-for": "198.51.100.9",
      "cf-connecting-ip": "198.51.100.10",
    },
    socket: {
      remoteAddress: "127.0.0.1",
    },
  });
  assert.equal(ip, "127.0.0.1");
});

