# Review Save Latency Design

## Problem

Every Card write synchronously rebuilds the complete Review index. At 47 Cards this reparses Card YAML and rechecks every Card before the POST response returns, making one-field saves take several seconds.

## Design

After a successful write, `refresh_after_card_write` will rebuild only the changed Card's derived cache. It will not rebuild the full Review index. The Review index file is instead invalidated, so the next `/api/entries` read rebuilds it from canonical Card files and returns current list metadata.

The save response still obtains the changed Card from its fresh Card cache. Therefore the active editor updates immediately without depending on an all-Card scan. The existing fingerprint and atomic cache-write behavior remain unchanged.

## Acceptance criteria

- A Card save does not call `refresh_review_index`.
- A Card save invalidates the Review index and refreshes the changed Card cache.
- The next list read rebuilds the index and includes the saved Card state.
- Existing Review server tests and Card validation continue to pass.
- No Card data format, UI behavior, or GitHub state changes.
