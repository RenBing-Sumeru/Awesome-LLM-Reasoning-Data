# Citation and Metadata Audit

This report distinguishes citation/artifact-link verification from release-internal metadata verification.

## Entry Status Counts

| Status | Count |
|---|---:|
| verified | 161 |
| needs_metadata | 113 |
| partial | 3 |

## Citation Status Counts

| Citation status | Count |
|---|---:|
| verified | 164 |
| needs_verification | 113 |

## Metadata Status Counts

| Metadata status | Count |
|---|---:|
| unknown | 198 |
| partial | 46 |
| carded | 33 |

## Policy

- `status: verified` means the entry has an official primary paper/arXiv/venue/DOI link pinned and passes the public schema checks.
- A paper can have `audit.citation_status: verified` while still carrying `needs_metadata` notes when source mixture, split, license, lineage, verifier internals, or training-use fields remain incomplete.
- Current public release intentionally separates link verification from deeper release-internal metadata, avoiding metadata overclaiming.
