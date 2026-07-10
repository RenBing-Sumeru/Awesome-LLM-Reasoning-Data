# Review Workspace

This folder is intentionally separate from the main atlas site.

- `index.html` is the review UI.
- `review.js` contains the review logic and annotation export helpers.
- `annotations.json` records one human review comment per paper.
- `localizations.json` records one Chinese field overlay per paper.
- `institutions/institutions.json` records one institution tag record per paper.
- `server.py` serves the page, writes the latest comment to `annotations.json`, and writes curation-level changes back to `data/papers.yaml`.

Rules:

- The web page does not create or duplicate paper data. It reads generated project data from `docs/assets/`.
- Review is fully manual. No agent is called during the review flow.
- A comment can be short, but it cannot be empty.
- Chinese field overlays and institution tags may be empty; saving them overwrites the previous record for the same paper.
- Updating an entry to `L5_audit_ready` requires a human review comment.
- Updating to `L4_carded` or `L5_audit_ready` also requires that the entry already has a local card.
- The original paper link opens the paper source. The card link opens the project card text for reading and annotation.

Run locally from the repository root:

```bash
python3 review/server.py
```

Then open:

```text
http://127.0.0.1:9817/review/
```

If the page is opened without the server, comments can be stored in browser localStorage and downloaded as `annotations.json`, but curation-level changes cannot be written back to `data/papers.yaml`.
