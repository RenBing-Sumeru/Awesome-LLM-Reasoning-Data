# Strict V2 Cleanup Design

## Goal

Make `paper_cards/library/` the only supported Paper Card store and remove
obsolete generators, ZIP exports, download state, shared-layout fallbacks, and
instructions that can recreate them.

## Decisions

- Normal reads, validation, rendering, and Review must use Card-local data only.
- A missing or empty Card library is valid and resolves to an empty collection;
  it must never load `data/papers.yaml`, shared sources, or shared JSON records.
- Hot-plug means copying `paper_cards/library/` (or a Card directory), not
  creating a ZIP or marking Cards as downloaded.
- `queue.json.manual_annotation` remains the sole human Review record.
- Historical shared-layout import support is removed. Historical V2 updates use
  the existing Card-library copy rule in `AGENTS.md`.
- Dated implementation notes that instruct obsolete generators or ZIP export are
  removed. This design and its implementation plan remain the current record.

## Scope

Delete the two one-off Card generators, their dedicated tests, retired BibTeX
stub, old ZIP artifacts/directory, shared-layout migration commands, package,
download, downgrade, and hidden server-initialization APIs, and their obsolete
tests. Simplify normal Card helpers to library only; update user-visible text and
documentation; regenerate derived assets.

## Verification

Add a strict-V2 regression test before deleting code. It must fail on the
current tree because obsolete paths and fallback behavior still exist. The final
test suite must prove that no old generators/packages remain, the CLI exposes no
package command, and an empty library never falls back to shared metadata.
