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
- Ask the Atlas links are generated during assembly and are not stored in section files.

Run:

```bash
python tools/paper_cards/card_tool.py check
python tools/paper_cards/card_tool.py build --entry <entry_id> --lang ch
python tools/paper_cards/card_tool.py package --entries <entry_id>
python tools/paper_cards/server.py
```
