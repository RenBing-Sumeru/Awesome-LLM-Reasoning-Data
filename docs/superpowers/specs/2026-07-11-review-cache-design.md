# Review Cache Design

## Goal

Make the local Paper Card Review page open with its list ready while preserving
`paper_cards/library/cards/<entry_id>/` as the sole editable source of paper
data.

## Scope and constraints

- The cache is derived data only. It is never a second metadata index and may
  be deleted at any time.
- It lives at `tmp/paper_cards/review-index.json`, which is ignored by Git.
- Every Card-specific edit remains in that Card directory. The Review server
  must not use the cache as input for an edit.
- Directly adding, editing, or deleting a Card directory must remain supported.
- An empty Card library is valid and returns an empty Review list; it must not
  fall back to the removed legacy `data/papers.yaml` layout.

## Cache contents

The JSON snapshot contains a schema version, a source fingerprint, a build
timestamp, and the existing `/api/entries` response payload (`entries` and
`status`). The fingerprint covers `categories.yaml`, each Card directory,
`paper.yaml`, its four local JSON records, and the 18 source files. It records
path, file size, and nanosecond modification time, so manual Card additions,
deletions, and edits invalidate the snapshot without maintaining another
source of truth.

The snapshot is written to a temporary sibling file and atomically replaced.
Missing, malformed, or incompatible snapshots are ignored and rebuilt.

## Data flow

1. `server.py` calculates the current lightweight filesystem fingerprint.
2. On a matching fingerprint, `/api/entries` returns the cached payload.
3. On a mismatch, the server loads the library once, derives every entry and
   validity report from that one in-memory pass, writes a fresh snapshot, and
   returns it.
4. Before the HTTP server begins listening, startup performs step 1–3. The
   browser therefore opens only after the list cache is ready. If this required
   build fails, startup prints the cause, exits with a non-zero status, and
   never binds the HTTP port.
5. Review write endpoints invalidate the snapshot after successfully writing
   the Card. The next list request rebuilds it from the Card directory. Manual
   filesystem changes follow the same path when the next request sees a new
   fingerprint.

The cache avoids the current nested behavior where each list entry repeatedly
loads all Cards to derive status, Chinese header fields, institutions, queue
data, and validation state.

## Failure handling

- A missing, stale, malformed, or incompatible cache is rebuilt automatically
  from Card directories before startup. If that build fails, startup fails
  explicitly instead of serving an unverified or empty list.
- If the library is empty, it writes and serves a valid empty payload.
- Cache files are local runtime artifacts; validation, renderers, and Git do
  not depend on them.

## Verification

- Tests cover first build, cache reuse, stale-cache rebuild after manual Card
  metadata/source changes, direct Card insertion and deletion, empty-library
  behavior, corrupt-cache recovery, and invalidation after a Review write.
- A server startup test confirms the cache is warmed before serving requests.
- The full Paper Card test suite, Card check, data validation, and a timed
  local `/api/entries` request verify correctness and the loading improvement.

## Documentation changes

`AGENTS.md`, the contributor SOPs, and the Paper Card SOP will document that
`tmp/paper_cards/` is an ignored, automatically maintained Review cache rather
than canonical shared paper data.
