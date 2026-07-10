# Paper Card SOP

This project uses bilingual 9-section paper cards.

## Source Rules

- Paper metadata lives in `data/papers.yaml`.
- Paper-card body text lives in `paper_cards/sources/<entry_id>/`.
- Chinese review header fields live in `paper_cards/header_zh.json`.
- English files use fixed section names such as `01_problem.md`.
- Chinese files use the same names with `_ch.md`, such as `01_problem_ch.md`.
- Full cards are never manually assembled.
- Python is the only mechanism that assembles previews and packages.
- The web editor edits only Chinese `_ch.md` files.

## Chinese Header Fields

Every generated paper-card review header must include `reading_priority_ch`.
The value must be exactly one of:

```text
必读
可读
暂缓
不推荐
```

Newly generated cards should start with `可读` unless the maintainer has already
made a stronger judgment. Free-form priority labels are invalid.

## Level Gates

- `L3_card_source_ready`: English card source files exist and are non-empty.
- `L4_chinese_review_ready`: Chinese section files exist and Chinese review
  fields are present. `reading_priority_ch` must pass the fixed-option assert.
- `L5_review_ready`: L4 passes, and human review annotation exists.
- `L6_reviewed`: L5 passes, and the reviewer clicks the completion action.

For maintainer-driven topic scans, do not wait for a separate topic-approval
round when the user request already gives a usable topic, year window, venue
tier, or target count. Select the strongest papers, verify official sources,
and create complete bilingual card sources so the chosen entries can be
promoted to `L4_carded`. Ask a short clarification only when the missing detail
would change the search boundary.

## Required Files

```text
01_problem.md
01_problem_ch.md
02_core_idea.md
02_core_idea_ch.md
03_method.md
03_method_ch.md
04_evidence.md
04_evidence_ch.md
05_novelty.md
05_novelty_ch.md
06_limitations.md
06_limitations_ch.md
07_usefulness.md
07_usefulness_ch.md
08_reading_notes.md
08_reading_notes_ch.md
09_citation.md
09_citation_ch.md
```

## Section Intent

1. Problem: explain the concrete question and why it matters. Include primary
   source, venue/date, decision boundary, atlas relevance, data object or
   evaluation surface, and the L4 collection note.
2. Core Idea: summarize the main contribution without copying the abstract.
   Include the core mechanism, data object or evaluation surface, feedback
   contract, direction label, and closest comparisons.
3. Method: explain the pipeline, system, data construction, or experiment setup.
   Include inputs, outputs, verifier/reward/judge/environment, training or
   evaluation use, artifacts to verify, and reproducibility notes.
4. Evidence: state the experiments, comparisons, metrics, and evidence limits.
5. Novelty: explain what changes compared with prior work. Include prior-work
   baseline, why it is a 2026 direction signal when relevant, top-conference
   quality signal, what is not new, and what to inspect before reuse.
6. Limitations: list concrete weaknesses, assumptions, missing artifacts, or risks.
7. Usefulness: explain how readers can use the paper for research, engineering, datasets, benchmarks, or review.
8. Reading Notes: keep 3-5 memorable takeaways.
9. Citation: use official BibTeX when available; otherwise mark temporary citation as `needs verification`.

## Workflow

1. Verify official paper/source links.
2. Create the 18 source files for the entry and generate
   `paper_cards/header_zh.json` with `reading_priority_ch` set to one fixed
   option, defaulting to `可读`.
3. Fill or translate the English and Chinese section files.
4. Run `python tools/paper_cards/card_tool.py check`.
5. Preview with `python tools/paper_cards/card_tool.py build --entry <entry_id> --lang ch`.
6. Use the local web editor for Chinese maintenance and human review.
7. Click completion in the Review view; the tool first checks whether the card
   is review-ready, then promotes the card to L6.
8. Generate and download submission packages only from the L6 pool.

Do not use agents for review, translation, annotation, or level changes.
