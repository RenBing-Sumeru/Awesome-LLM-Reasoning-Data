<!-- entry_id: visualwebarena-evaluating-multimodal-agents-on-realistic-visual-web-tasks-2024 -->
<!-- card_type: agents -->
# 🌐 VisualWebArena: Evaluating Multimodal Agents on Realistic Visually Grounded Web Tasks

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=visualwebarena-evaluating-multimodal-agents-on-realistic-visual-web-tasks-2024&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=visualwebarena-evaluating-multimodal-agents-on-realistic-visual-web-tasks-2024&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=visualwebarena-evaluating-multimodal-agents-on-realistic-visual-web-tasks-2024&mode=compare)
<!-- ask_atlas:end -->

<!-- track: 🔁 Rollout / Search / TTC Trace (Track 05) · 🌐 Environment & Agent Trajectories (Track 06) · ⚖️ Judgment / Rubric / Domain Expert (Track 07) · 🎯 Training Usage & Objectives (Track 09) · 🧰 Benchmarks & Evaluation (Track 11) -->

## One-line takeaway

VisualWebArena extends web-agent evaluation to visually grounded tasks where screenshots, DOM/browser actions, and final web-state predicates define the trajectory.

## Why this matters

This agent trajectory card is included because it helps readers connect a citation to an engineering decision. Read it through three linked questions: what is the data object, what verifies it, and what would fail if the verifier or metadata were wrong?

Local role metadata: `benchmark, agent_environment`. Local verification contract: `environmental`. Local training/evaluation use: `evaluation, audit, agent_training`. The current atlas status is `verified`, while citation/artifact status is `verified`. That separation is intentional: a working official link does not mean the source mixture, split, license, lineage, and verifier internals are fully curated.

## What is the data object?

| Field | Local value |
|---|---|
| Atlas type | Agent trajectory card |
| Domains | web, vision, agents |
| Prompt/source | visually grounded web tasks over realistic websites |
| Trace/action author | multimodal browser-using agent |
| Answer/artifact format | browser trajectory with page observation, screenshot/visual context, action sequence, and outcome |
| Process fields | task instruction, screenshot/page observation, DOM/browser state, action, state transition, final success label |
| Environment/substrate | VisualWebArena web environments |
| Verifier/reward | environment task evaluator and final web-state success checks |
| Terminal predicate | requested web task is completed in the target website state |

## Verification contract

- Check parser behavior, visual observation capture, browser action execution, final-state evaluator, and verifier false negatives.
- Check reset behavior, website snapshot/versioning, observation/action schema, hidden dependencies, and terminal predicate.

A reusable reasoning-data artifact should make the accept/reject or scoring signal reproducible. If the signal depends on a moving website, hidden browser state, undocumented visual preprocessing, missing evaluator code, or unclear rubric, keep the entry `partial` until the gap is resolved.

## Supervision granularity

- Recorded granularity: `full_episode, state_action_level`.
- Recorded training/evaluation use: `evaluation, audit, agent_training`.
- Construction layer: `search_substrate, release_audit`.

Granularity controls reuse. Answer-level records, step labels, scalar rewards, preference pairs, and full environment episodes are not interchangeable. Match your training or evaluation objective to the feedback level that the source actually exposes.

## Construction recipe

| Recipe field | Local value |
|---|---|
| Base model | unknown |
| Teacher | benchmark authors and task designers |
| Generator | visually grounded web tasks and browser environment setup |
| Filtering rule | retain tasks with checkable visual/web-state success conditions |
| Sampling protocol | unknown |
| Rollout count | unknown |
| Temperature | unknown |
| Inference budget | unknown |
| Optimizer/scaffold | VisualWebArena project and web-environment scaffold |

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

- Source mixture: visually grounded web tasks; exact website snapshots and visual assets should be pinned.
- Split: unknown in local metadata.
- Decontamination: unknown.
- License: unknown in local metadata.
- Lineage: official project page, arXiv paper, and web-arena-x GitHub repository.
- Known failure modes: website drift, screenshot/DOM mismatch, visual grounding shortcuts, brittle terminal predicates, and benchmark exposure.

Local audit note: Official paper, project, and code are verified; downstream reuse should pin browser runtime, website state, and visual observation pipeline.

## Links

- arXiv: [https://arxiv.org/abs/2401.13649](https://arxiv.org/abs/2401.13649)
- Project: [https://jykoh.com/vwa](https://jykoh.com/vwa)
- Code: [https://github.com/web-arena-x/visualwebarena](https://github.com/web-arena-x/visualwebarena)

## Citation

- Title: VisualWebArena: Evaluating Multimodal Agents on Realistic Visually Grounded Web Tasks
- Year/source: 2024 · ACL
- Authors in local data: Jing Yu Koh, Robert Lo, Lawrence Jang, Vikram Duvvur, Ming Chong Lim, Po-Yu Huang, Graham Neubig, Shuyan Zhou, Ruslan Salakhutdinov, Daniel Fried
- Institutions in source: Carnegie Mellon University
- Local status: `verified`
- Citation status: `verified` · metadata status: `L4_carded`
