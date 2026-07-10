<!-- entry_id: gorilla-2023 -->
<!-- card_type: agents -->
# 🌐 Gorilla: Large Language Model Connected with Massive APIs

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=gorilla-2023&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=gorilla-2023&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=gorilla-2023&mode=compare)
<!-- ask_atlas:end -->

<!-- track: 🌐 Environment & Agent Trajectories (Track 06) -->
> Subfield: 🛠️ Tool-use data

## One-line takeaway

Gorilla/APIBench frames API calling as a request-plus-documentation trajectory where retrieval context and generated API calls become the reusable data object.

## Why this matters

This agent trajectory card is included because it helps readers connect a citation to an engineering decision. Read it through three linked questions: what is the data object, what verifies it, and what would fail if the verifier or metadata were wrong?

Local role metadata: `benchmark, construction_recipe, agent_environment`. Local verification contract: `programmatic, mixed`. Local training/evaluation use: `sft, agent_training, evaluation`. The current atlas status is `verified`, while citation/artifact status is `verified`. That separation is intentional: a working official link does not mean the source mixture, split, license, lineage, and verifier internals are fully curated.

## What is the data object?

| Field | Local value |
|---|---|
| Atlas type | Agent trajectory card |
| Domains | tool-use, API calling, retrieval |
| Prompt/source | user requests paired with API documentation and retrieval context |
| Trace/action author | APIBench task constructors and model-generated calls |
| Answer/artifact format | API name, arguments, generated call, and optional retrieved documentation |
| Process fields | user query, API documentation, retrieved context, function name, arguments, generated call |
| Environment/substrate | APIBench over API documentation from multiple hubs |
| Verifier/reward | API-call correctness and hallucination checks against documented API signatures |
| Terminal predicate | generated API call matches a valid API and arguments for the requested task |

## Verification contract

- Check parser behavior, answer extraction, API-signature matching, executable checks, and verifier false negatives.
- Check documentation snapshot, retrieval corpus versioning, hidden dependencies, and terminal predicate.

A reusable reasoning-data artifact should make the accept/reject or scoring signal reproducible. If the signal depends on stale API documentation, a moving service, undocumented retrieval corpus, missing executable checks, or unclear rubric, keep the entry `partial` until the gap is resolved.

## Supervision granularity

- Recorded granularity: `state_action_level, answer_level`.
- Recorded training/evaluation use: `sft, agent_training, evaluation`.
- Construction layer: `prompt_sourcing, trace_writing, release_audit`.

Granularity controls reuse. Answer-level records, step labels, scalar rewards, preference pairs, and full environment episodes are not interchangeable. Match your training or evaluation objective to the feedback level that the source actually exposes.

## Construction recipe

| Recipe field | Local value |
|---|---|
| Base model | unknown |
| Teacher | API documentation and benchmark authors |
| Generator | APIBench task construction plus retrieval-augmented fine-tuning setup |
| Filtering rule | retain examples aligned with documented API signatures |
| Sampling protocol | unknown |
| Rollout count | unknown |
| Temperature | unknown |
| Inference budget | unknown |
| Optimizer/scaffold | Gorilla/APIBench retrieval and API-call scaffold |

When reproducing this environment or trajectory artifact, fill these recipe fields before training. The missing knobs often matter more than the headline number of examples.

## How it can be used

- Reading map: compare it with neighboring entries in the same paper-category page.
- Engineering map: decide whether it supports SFT, distillation, RLVR, process supervision, reward modeling, agent training, evaluation, or audit.
- Audit map: open an issue for every `unknown` field that affects reproducibility, safety, or benchmark comparison.
- Teaching map: use it to show how reasoning data differs from plain instruction data.

## Audit checklist

- [ ] Official paper, code, data, project, and dataset links are checked.
- [ ] Source mixture, split policy, license, and lineage are recorded.
- [ ] Verifier, reward, judge, rubric, environment, or test suite is reproducible.
- [ ] Rejected/failed/ambiguous candidates are considered, not only successful examples.
- [ ] Contamination, benchmark leakage, false positives, false negatives, and reward hacking are documented.
- [ ] Training use is not broader than what the source supports.

## Known limitations / failure modes

- Source mixture: API documentation and APIBench-style examples; exact corpus snapshot should be pinned.
- Split: unknown in local metadata.
- Decontamination: unknown.
- License: unknown in local metadata.
- Lineage: official Gorilla project, arXiv paper, and GitHub release.
- Known failure modes: stale API documentation, retrieval-dominated scores, hallucinated APIs, argument mismatch, and training/evaluation leakage.

Local audit note: The official project and repository are verified; venue metadata should remain explicit because project citation metadata may differ from the original 2023 arXiv entry.

## Links

- arXiv: [https://arxiv.org/abs/2305.15334](https://arxiv.org/abs/2305.15334)
- Project: [https://gorilla.cs.berkeley.edu/](https://gorilla.cs.berkeley.edu/)
- Code: [https://github.com/ShishirPatil/gorilla](https://github.com/ShishirPatil/gorilla)

## Citation

- Title: Gorilla: Large Language Model Connected with Massive APIs
- Year/source: 2023 · arXiv preprint
- Authors in local data: Shishir G. Patil, Tianjun Zhang, Xin Wang, Joseph E. Gonzalez
- Institutions in source: UC Berkeley; Microsoft Research
- Local status: `verified`
- Citation status: `verified` · metadata status: `L4_carded`
