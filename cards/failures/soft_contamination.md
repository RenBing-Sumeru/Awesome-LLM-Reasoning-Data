<!-- entry_id: soft-contamination-means-benchmarks-test-shallow-generalization-2026 -->
<!-- card_type: failures -->
# Soft Contamination Means Benchmarks Test Shallow Generalization

<!-- ask_atlas:start -->
> Ask about this paper: [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=soft-contamination-means-benchmarks-test-shallow-generalization-2026&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=soft-contamination-means-benchmarks-test-shallow-generalization-2026&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=soft-contamination-means-benchmarks-test-shallow-generalization-2026&mode=compare)
<!-- ask_atlas:end -->

<!-- track: 🧭 Foundations & Primers (Track 00) · 🧰 Benchmarks & Evaluation (Track 11) · 🧯 Audit & Failure Modes (Track 13) -->
> Subfield: 🧯 Contamination / evaluation surveys

> Curation level: L4_carded

> Links: [Paper](https://arxiv.org/abs/2602.12413)

## TL;DR

Soft Contamination argues that semantic duplicates between training corpora and benchmark tests can inflate scores even when exact string decontamination passes.

The reusable lesson is that benchmark contamination is not only an n-gram problem; semantic near-duplicates can also turn evaluation into shallow generalization.

## 1. What is this work?

- Year / venue: 2026 · arXiv preprint.
- Atlas role: contamination audit and benchmark-failure analysis.
- Domains: contamination, benchmark audit, code, reasoning.
- Current status: paper verified; no separate official code/data/corpus snapshot pinned locally.
- Why it belongs: it directly studies whether benchmark scores remain valid under semantic training-test overlap.

## 2. What data object does it expose?

- Prompt/source: benchmark items compared against training-corpus passages and semantic duplicates.
- Trace/action author: an audit pipeline embeds benchmark and corpus text to find exact and soft duplicates.
- Answer/artifact format: contamination evidence record linking benchmark item, corpus neighbor, similarity score, and performance effect.
- Process fields: benchmark item, corpus neighbor, similarity score, contamination type, performance delta.
- Environment/substrate: static benchmark/corpus audit with embedding similarity and finetuning experiments.
- Terminal predicate: an item is flagged when exact or semantic duplicate evidence crosses the audit threshold.

## 3. Verification / scoring contract

- Contract: estimate contamination rates and compare performance changes under semantic-duplicate exposure.
- Verifier: embedding-neighbor search, duplicate classification, and benchmark performance deltas.
- Public/private/live status: public preprint; reproducible corpus snapshot and artifact release remain unknown locally.
- Contamination risk: the paper studies contamination, but publishing audited examples and methods can also expose benchmark items.

## 4. Construction recipe

The audit embeds benchmark examples and training-corpus text, searches for semantic neighbors, and tests whether exposure to semantically equivalent examples improves benchmark scores. The arXiv summary specifically mentions Olmo3 corpus auditing and examples such as CodeForces and ZebraLogic.

For reuse, the critical metadata is the corpus snapshot, embedding model, similarity threshold, benchmark versions, and the exact rule used to separate semantic duplicates from ordinary domain overlap.

## 5. How it can be used

- Audit model reports that claim decontamination based only on exact or n-gram filtering.
- Design benchmark hygiene checks that include semantic overlap.
- Interpret benchmark gains as a mixture of capability improvement and accumulated exposure risk.

It is an audit method and cautionary study, not a replacement benchmark.

## 6. Audit checklist

- Is the training corpus snapshot available or at least identified?
- Are benchmark versions and held-out splits pinned?
- Which embedding model and similarity threshold define soft contamination?
- Are false positives from ordinary topical overlap measured?
- Are performance gains separated between contaminated items and truly held-out items?
- Does the audit expose benchmark content that should remain private?

## 7. Known limitations / failure modes

- Embedding thresholds can over- or under-count contamination.
- Semantic-neighbor links may reflect domain overlap rather than memorized test data.
- Finetuning duplicate experiments may not fully represent pretraining-scale effects.
- Public audit results may become future contamination material.

## 8. Why it matters for Track 11

Track 11 needs contamination checks that match how models actually learn. Soft contamination shifts the audit boundary from literal overlap toward effective exposure to benchmark-equivalent content.

## 9. Links and citation

- Paper: [https://arxiv.org/abs/2602.12413](https://arxiv.org/abs/2602.12413)
- Data ID: `soft-contamination-means-benchmarks-test-shallow-generalization-2026`
- Citation status: verified
- Confidence: high
