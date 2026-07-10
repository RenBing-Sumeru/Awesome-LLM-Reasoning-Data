# Paper Cards

This directory stores bilingual paper-card source files.

Rules:

- `data/papers.yaml` is the only source for paper metadata and links.
- `paper_cards/sources/<entry_id>/` is the only source for card body text.
- Each card has 9 English `.md` files and 9 Chinese `_ch.md` files.
- The web editor may modify only Chinese `_ch.md` files.
- Full cards are assembled only by `tools/paper_cards/card_tool.py`.
- Assembled cards are preview/package artifacts, not maintained source files.
- `paper_cards/generated/` stores ignored download-time annotation artifacts only.

Run:

```bash
python tools/paper_cards/card_tool.py check
python tools/paper_cards/card_tool.py build --entry <entry_id> --lang ch
python tools/paper_cards/card_tool.py package --entries <entry_id>
python tools/paper_cards/server.py
```

## Local Record Migration

`tools/paper_cards/migrate.py` moves local Paper Card records between repository versions. Its archive is a versioned ZIP with checksums for each selected paper's metadata, card source files, Chinese fields, institution records, manual review records, and status. Generated download artifacts and `valid_status.json` are regenerated after restore.

Before collecting papers for one request, Codex must choose exactly one knowledge point from `data/categories.yaml`. If the request plausibly fits more than one, Codex asks the user to decide before collecting papers, then binds every returned paper to that category:

```bash
python3 tools/paper_cards/migrate.py batch \
  --category scaling_rlvr_test_time_compute \
  --entries scaling-llm-test-time-compute-optimally-2024 self-consistency-chain-of-thought-2023 \
  --request "Find Scaling, RLVR, and Test-Time Compute papers"
```

The request text is hashed in the local batch record, not stored verbatim. The command generates a unique batch ID unless `--batch <id>` is supplied, then forces the one category onto `data/papers.yaml.category`, `header_zh.category_ids`, and `search_queue.track_guess` for every listed entry. It also writes `prompt_batch_id` in each paper entry. Review only displays this label; changing it requires creating or updating the owning batch.

For a repository upgrade, use this sequence:

```bash
# 1. Make an immutable archive and remove only its local card/review records.
python3 tools/paper_cards/migrate.py move-out --output /safe/path/paper-cards.zip --yes

# 2. Update the repository version. Run the version-specific adjustment script, if supplied.
python3 migrations/<from>-to-<to>.py --root .

# 3. Restore the archive exactly, then validate the archive and local category batches.
python3 tools/paper_cards/migrate.py move-in --input /safe/path/paper-cards.zip
python3 tools/paper_cards/migrate.py verify --input /safe/path/paper-cards.zip
python3 tools/paper_cards/migrate.py verify-current

# 4. Regenerate derived state and open Review.
python3 tools/paper_cards/card_tool.py check
python3 scripts/validate_data.py
PORT=8770 python3 tools/paper_cards/server.py
```

Available commands are `batch`, `export`, `import`, `clear --yes`, `move-out --yes`, `move-in`, `verify`, and `verify-current`. `clear` never removes paper metadata from `data/papers.yaml`; it only removes card and local review records listed in the archive. Version-specific adjustment scripts are the only allowed way to modify restored content.
