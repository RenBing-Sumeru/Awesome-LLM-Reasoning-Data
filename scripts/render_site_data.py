#!/usr/bin/env python3
"""Backward-compatible wrapper for the current site renderer."""
from render_site import main


if __name__ == "__main__":
    raise SystemExit(main())
