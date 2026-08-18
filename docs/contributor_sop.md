# Contributor SOP

How to add or change a card. The editorial judgement here is the part that matters; the
mechanics are short because `library/` is the only source of truth and every published
surface is generated from it.

[简体中文](contributor_sop_zh.md) · [Developing](DEVELOPING.md) · [CONTRIBUTING.md](../CONTRIBUTING.md)

## 1. Non-negotiable rules

- Do not add a bare title or a bare link.
- Do not guess arXiv IDs, venue pages, DOI links, code repositories, dataset pages,
  Hugging Face pages, or project pages.
- Do not hide uncertainty. Say `unknown`, or record the gap under `needs`.
- Do not broaden `training_use` beyond what the source supports.
- Do not treat a verified paper link as proof that the data, code, license, split,
  verifier, or lineage is known.
- Do not put API keys, OAuth secrets, database URLs, tokens, private prompts, internal
  logs, or screenshots containing secrets anywhere in the repository.
- Every card must answer the five practical questions: source, data object, feedback
  contract, construction, and audit risk.

## 2. What belongs in the atlas

Include a work if it helps a reader understand at least one of these:

- A data release for reasoning, math, code, proof, tool use, agents, rubrics, or domain
  reasoning.
- A benchmark whose tasks or scoring can function as a feedback contract.
- A verifier, reward model, PRM, judge, rubric, environment, terminal predicate, or
  evaluation harness.
- A construction recipe: prompt sourcing, teacher trace generation, search, rejection
  sampling, filtering, self-play, RLVR, distillation, or release metadata.
- A frontier model report that discloses post-training reasoning data, reward design,
  RLVR, distillation, inference budget, or data mixture details.
- A scaling or test-time compute study that changes how data, verifiers, or inference
  budget should be read.
- An audit or failure paper: contamination, leakage, reward hacking, verifier gaming,
  LLM-as-judge attacks, spurious rewards, reproducibility failures.
- A survey or primer that helps a reader navigate the categories above.

Leave it out if it is a generic model paper with no visible connection to reasoning
data, a secondary blog post where a primary source exists, a duplicate that adds no new
official source, or simply outside LLM post-training reasoning data however interesting
it is otherwise.

## 3. The five-sentence triage

Before creating any files, write these five sentences. If you cannot, the work is not
ready to become a card.

1. Data object: "One row or episode contains ..."
2. Feedback contract: "The behavior is checked by ..."
3. Training or evaluation use: "This could enter post-training as ..."
4. Construction recipe: "The data is produced by ..."
5. Audit risk: "The main thing that could make the claim misleading is ..."

## 4. Finding the official source

Search in this order and stop at the first official result: the venue proceedings page,
arXiv, the DOI, the project page, then the code or dataset repository. Pin what you
actually opened. If nothing official turns up, still create the card, leave the missing
artifact keys out, and record the gap under `needs` rather than inventing a URL.

A paper link proves the paper exists. It proves nothing about the dataset, the license,
the split policy, or the verifier. Those get their own fields, and `unknown` is a valid
answer for each.

## 5. What a card looks like

One directory per card under `library/cards/<entry_id>/`:

```text
library/cards/<entry_id>/
├── paper.yaml          # metadata, the five facets, data object, recipe, audit ledger
├── header_zh.json      # Chinese summary, reading priority, paper type, intended reader
├── institutions.json
├── queue.json          # the curation verdict
├── review.json         # the review state
└── sources/            # 01_problem.md … 09_citation.md, plus a _ch.md twin for each
```

`entry_id` is a lowercase slug ending in the publication year, for example
`math-shepherd-verify-and-reinforce-llm-math-reasoning-2024`. Do not append an arXiv or
proceedings identifier; `scripts/normalize_library.py` strips those.

The nine sections, in both languages: `01_problem`, `02_core_idea`, `03_method`,
`04_evidence`, `05_novelty`, `06_limitations`, `07_usefulness`, `08_reading_notes`,
`09_citation`. Each is plain prose. Write the Chinese twin as Chinese, not as a
translation-shaped English sentence: the site never mixes languages on one page, so a
half-translated section shows up as English to a Chinese reader.

## 6. Classification

`category_ids` come from `library/categories.yaml`. One id is normal; two is right when
a paper genuinely belongs to both tracks. The first id is treated as the primary track.

The five facets come from `library/vocabulary.yaml`, which is the only place their
values are defined:

- `source_role` — what role the work plays
- `verification_contract` — who checks the answer. Deliberately five values: a card has
  to commit to `programmatic`, `environmental`, `judgment_required`, `mixed`, or
  `unknown`, rather than describing the reward's shape
- `supervision_granularity` — what unit the label attaches to
- `training_use` — which objective consumes the data
- `construction_layer` — which pipeline stage the work contributes

If a value you need is missing, add it to `vocabulary.yaml` with both labels, or add a
synonym pointing at the canonical value. Do not invent an unlisted value: the build
refuses to publish a card that uses one.

## 7. Writing the curated fields

`data_object`, `recipe_metadata`, and `audit` are what make a card worth more than a
citation, and they are published on the site.

- Name the record, not the paper. "One row is a Lean 4 theorem statement plus a proof
  script checked by Lean" beats "formal proof data".
- Distinguish what was released from what was only reported. A benchmark of 2,170 rows
  is not evidence that 10M training trajectories were released.
- Put a number on it when the source gives one, and say so when it does not.
- In `audit`, write the failure a reader would actually hit: an undocumented answer
  normalizer, a judge whose version is unknown, a split whose disjointness is claimed
  but not shown.
- `unknown` is a finding. Write it rather than leaving the field out.

For the one-line summary, say what the work releases and what checks it, in one
sentence. Avoid "novel", "state-of-the-art", and any claim the abstract does not
support.

## 8. Review verdicts

`queue.json` carries `manual_annotation.search_status`, which decides publication:

| Verdict | Effect |
|---|---|
| `promoted` | Publishes. |
| `candidate` | Publishes; still under consideration. |
| `rejected` | Stays in the library, never publishes. |
| absent | Treated as unreviewed and does not publish. |

`atlas.yaml` holds the exclusions, including `excluded_ids` for the case where one
curator promoted a card that another rejected while working a different track.

## 9. Running the checks

```bash
python scripts/validate_library.py      # is the card well formed?
python scripts/build_site.py            # regenerate docs/
python scripts/render_docs.py           # regenerate README, papers/, cover caption
python scripts/render_exports.py        # regenerate exports/
python scripts/build_site.py --check    # do the committed files still match the library?
python scripts/render_docs.py --check
python scripts/render_exports.py --check
python scripts/serve.py                 # preview at http://127.0.0.1:8787
```

`validate_library.py` separates breakage from thinness. An error means the card would
publish wrongly: a missing title, an unknown track, a facet value outside the
vocabulary. A warning means the card is thin or carries residue from a batch import;
those are tracked rather than blocking. `--strict` fails on warnings too.

The `--check` modes re-render into a temporary directory and compare. They prove the
committed output matches the library; they cannot tell you whether the library is right.
That is what the validator and your own reading are for.

## 10. Batches

An incoming batch of cards goes through `incoming/`:

```bash
python scripts/inspect_batches.py "incoming/<batch>"        # read-only survey
python scripts/merge_batches.py  "incoming/<batch>"         # dry run
python scripts/merge_batches.py  "incoming/<batch>" --apply --union-tracks
python scripts/dedupe_papers.py                             # then --apply
python scripts/normalize_library.py                         # then --apply
```

`merge_batches.py` resolves each `entry_id` to one card, keeping the copy with the most
content. `dedupe_papers.py` catches what it cannot: the same paper filed twice under
different ids. `normalize_library.py` folds facet synonyms, strips venue identifiers off
ids, and settles `one_line_summary` as the only summary field. All of them are dry-run by
default and back up every card they overwrite into `.backup/<timestamp>/`.

## 11. Definition of done

- The five triage sentences are written and hold up.
- Every artifact link was opened, and nothing is guessed.
- Both languages are complete and each reads as itself.
- Facets are inside `library/vocabulary.yaml`; `category_ids` are inside
  `library/categories.yaml`.
- `unknown` and `needs` carry the gaps instead of a confident-sounding guess.
- `validate_library.py` reports no errors.
- All three `--check` modes pass, so the committed site, README, track pages, and exports
  match the library.
