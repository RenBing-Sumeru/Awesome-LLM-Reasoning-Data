#!/usr/bin/env python3
"""Preview the generated site locally.

`python -m http.server` sends only `Last-Modified`, so browsers apply heuristic
freshness and keep serving a previous build without revalidating. This handler
sends `no-store` instead, so a rebuild is always what you see on reload.
"""
from __future__ import annotations

import argparse
import functools
import http.server
import socketserver
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))

from atlas import config  # noqa: E402

SITE = config.SITE


class Handler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
        self.send_header("Pragma", "no-cache")
        super().end_headers()

    def send_head(self):
        # Drop conditional headers so the handler cannot answer 304 with a stale body.
        for header in ("If-Modified-Since", "If-None-Match"):
            while header in self.headers:
                del self.headers[header]
        return super().send_head()


class Server(socketserver.ThreadingTCPServer):
    allow_reuse_address = True
    daemon_threads = True


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--port", type=int, default=8787)
    parser.add_argument("--host", default="127.0.0.1")
    args = parser.parse_args()

    if not (SITE / "index.html").exists():
        print(f"{SITE.name}/index.html is missing. Run: python scripts/build_site.py")
        return 1

    handler = functools.partial(Handler, directory=str(SITE))
    with Server((args.host, args.port), handler) as server:
        print(f"serving {SITE.name}/ at http://{args.host}:{args.port}/  (no-store, Ctrl-C to stop)")
        print(f"  English  http://{args.host}:{args.port}/index.html")
        print(f"  Chinese  http://{args.host}:{args.port}/zh.html")
        try:
            server.serve_forever()
        except KeyboardInterrupt:
            print("\nstopped")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
