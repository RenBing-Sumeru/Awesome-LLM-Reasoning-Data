<!-- entry_id: lastingbench-defend-benchmarks-against-knowledge-leakage-2025 -->
<!-- card_type: failures -->
# LastingBench: Defend Benchmarks Against Knowledge Leakage

<!-- ask_atlas:start -->
> Ask about this paper: [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=lastingbench-defend-benchmarks-against-knowledge-leakage-2025&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=lastingbench-defend-benchmarks-against-knowledge-leakage-2025&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=lastingbench-defend-benchmarks-against-knowledge-leakage-2025&mode=compare)
<!-- ask_atlas:end -->

<!-- track: 🧰 Benchmarks & Evaluation (Track 11) · 🧯 Audit & Failure Modes (Track 13) -->
> Subfield: 🧯 Live / contamination-resistant benchmarks

> Curation level: L4_carded

> Links: [Paper](https://arxiv.org/abs/2506.21614)

## TL;DR

LastingBench rewrites leakage-bearing QA contexts into counterfactual variants so benchmark scores are less dominated by memorized context-answer associations.

The key audit question is whether the rewrite preserves the original task while actually breaking the memorization route.

## 1. What is this work?

- Year / venue: 2025 · arXiv preprint.
- Atlas role: benchmark, audit failure, construction recipe.
- Domains: question answering, benchmark contamination, leakage mitigation.
- Current status: paper verified; separate code/data artifact not pinned locally.
- Why it belongs: it is a Track 11 benchmark-leakage defense rather than a normal static benchmark.

## 2. What data object does it expose?

- Prompt/source: existing QA benchmark items whose context may leak the answer.
- Trace/action author: the LastingBench procedure identifies leakage points and rewrites them into counterfactual variants.
- Answer/artifact format: QA item with rewritten context and intended answer behavior preserved.
- Process fields: source benchmark item, leakage point, perturbation, rewritten context, expected answer, score change.
- Environment/substrate: static QA benchmark surface.
- Terminal predicate: a model remains correct because it can solve the task, not because the original context was memorized.

## 3. Verification / scoring contract

- Contract: source benchmark answer scoring after counterfactual context rewriting.
- Verifier: the original benchmark's answer checker or evaluator, plus leakage-point perturbation checks.
- Public/private/live status: public paper; code/data release, hidden split policy, and refresh cadence are still unknown locally.
- Contamination risk: transformed items are meant to reduce leakage, but once released they can become new training targets.

## 4. Construction recipe

LastingBench starts from existing QA benchmarks, identifies context spans that act as leakage points, and rewrites those spans into counterfactual alternatives while trying to preserve the benchmark's original evaluative intent.

The missing release metadata matters: source benchmark versions, rewrite prompts or rules, filters, license, and any human validation policy should be pinned before treating the transformed items as reusable evaluation assets.

## 5. How it can be used

- Evaluate whether model performance is robust to context-level leakage defenses.
- Audit benchmark reports that rely on old public QA items.
- Study benchmark lifecycle design: detect leakage, perturb the risky evidence, then re-score.

Do not use it as generic training data unless the source benchmark license, rewrite validity, and split policy are reviewed.

## 6. Audit checklist

- Are source benchmark versions and examples identified?
- Does the rewrite preserve answerability and difficulty?
- Is the scoring rule identical to, or explicitly different from, the original benchmark?
- Are examples public, hidden, or refreshed?
- Can a model solve the rewritten item through artifacts of the rewriting process?
- Is there evidence that semantic memorization routes were reduced, not merely changed?

## 7. Known limitations / failure modes

- Counterfactual rewrites may change difficulty or answerability.
- Leakage-point detection can miss semantic memorization routes.
- Rewritten items may not be comparable to the original leaderboard.
- Public release can start a new contamination cycle.

## 8. Why it matters for Track 11

LastingBench makes benchmark validity a lifecycle problem. A benchmark can need active repair after public exposure, and the repair itself becomes a scoring contract that must be audited.

## 9. Links and citation

- Paper: [https://arxiv.org/abs/2506.21614](https://arxiv.org/abs/2506.21614)
- Data ID: `lastingbench-defend-benchmarks-against-knowledge-leakage-2025`
- Citation status: verified
- Confidence: high
