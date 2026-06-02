# Citation and Metadata Audit

This report distinguishes citation/artifact-link verification from release-internal metadata verification.

## Entry Status Counts

| Status | Count |
|---|---:|
| needs_metadata | 155 |
| partial | 114 |

## Citation Status Counts

| Citation status | Count |
|---|---:|
| needs_verification | 155 |
| verified | 114 |

## Metadata Status Counts

| Metadata status | Count |
|---|---:|
| unknown | 215 |
| partial | 54 |

## Policy

- `status: verified` is reserved for entries whose release-internal metadata has been locally checked enough for confident atlas use.
- A paper can have `audit.citation_status: verified` and still be `status: partial` when source mixture, split, license, lineage, verifier internals, or training-use fields remain incomplete.
- Current public release intentionally uses `partial` for all link-checked but metadata-incomplete entries, avoiding metadata overclaiming.
