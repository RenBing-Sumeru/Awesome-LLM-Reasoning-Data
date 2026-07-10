<!-- entry_id: workarena-how-capable-are-web-agents-at-solving-common-knowledge-work-tasks-2024 -->
<!-- card_type: agents -->
# 🌐 WorkArena: How Capable Are Web Agents at Solving Common Knowledge Work Tasks?

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=workarena-how-capable-are-web-agents-at-solving-common-knowledge-work-tasks-2024&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=workarena-how-capable-are-web-agents-at-solving-common-knowledge-work-tasks-2024&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=workarena-how-capable-are-web-agents-at-solving-common-knowledge-work-tasks-2024&mode=compare)
<!-- ask_atlas:end -->

<!-- track: 🌐 Environment & Agent Trajectories (Track 06) · ⚖️ Judgment / Rubric / Domain Expert (Track 07) · 🧰 Benchmarks & Evaluation (Track 11) -->
> Subfield: 🌍 Web/browser agents

## One-line takeaway

WorkArena evaluates web agents on enterprise-style knowledge-work tasks where browser actions must modify an application state that can be checked at the end.

## Why this matters

This agent trajectory card is included because it helps readers connect a citation to an engineering decision. Read it through three linked questions: what is the data object, what verifies it, and what would fail if the verifier or metadata were wrong?

Local role metadata: `benchmark, agent_environment`. Local verification contract: `environmental, programmatic`. Local training/evaluation use: `evaluation, audit, agent_training`. The current atlas status is `verified`, while citation/artifact status is `verified`. That separation is intentional: a working official link does not mean the source mixture, split, license, lineage, and verifier internals are fully curated.

## What is the data object?

| Field | Local value |
|---|---|
| Atlas type | Agent trajectory card |
| Domains | web, enterprise software, agents |
| Prompt/source | common knowledge-work tasks in a web application environment |
| Trace/action author | browser-using agent interacting with enterprise-style UI workflows |
| Answer/artifact format | browser observations, UI actions, state transitions, and final task result |
| Process fields | task instruction, page observation, UI action, application state, final assertion |
| Environment/substrate | WorkArena/BrowserGym-style web environment |
| Verifier/reward | programmatic application-state checks and task-specific evaluators |
| Terminal predicate | required enterprise workflow state is reached |

## Verification contract

- Check parser behavior, browser-action execution, application-state assertions, and verifier false negatives.
- Check reset behavior, environment versioning, observation/action schema, hidden dependencies, and terminal predicate.

A reusable reasoning-data artifact should make the accept/reject or scoring signal reproducible. If the signal depends on moving SaaS state, hidden browser data, undocumented test fixtures, missing application reset, or unclear rubric, keep the entry `partial` until the gap is resolved.

## Supervision granularity

- Recorded granularity: `full_episode, state_action_level`.
- Recorded training/evaluation use: `evaluation, audit, agent_training`.
- Construction layer: `search_substrate, release_audit`.

Granularity controls reuse. Answer-level records, step labels, scalar rewards, preference pairs, and full environment episodes are not interchangeable. Match your training or evaluation objective to the feedback level that the source actually exposes.

## Construction recipe

| Recipe field | Local value |
|---|---|
| Base model | unknown |
| Teacher | benchmark authors and knowledge-work task designers |
| Generator | WorkArena task suite over enterprise-style web workflows |
| Filtering rule | retain tasks with resettable environment state and checkable final assertions |
| Sampling protocol | unknown |
| Rollout count | unknown |
| Temperature | unknown |
| Inference budget | unknown |
| Optimizer/scaffold | WorkArena repository and BrowserGym integration |

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

- Source mixture: enterprise-style web tasks; task suite and application version should be pinned.
- Split: unknown in local metadata.
- Decontamination: unknown.
- License: unknown in local metadata.
- Lineage: arXiv paper and ServiceNow WorkArena GitHub repository.
- Known failure modes: environment reset failures, brittle UI selectors, hidden application-state dependencies, workflow ambiguity, and benchmark overfitting.

Local audit note: Official paper and code are verified; downstream reuse should pin application fixtures and BrowserGym/runtime versions.

## Links

- arXiv: [https://arxiv.org/abs/2403.07718](https://arxiv.org/abs/2403.07718)
- Code: [https://github.com/ServiceNow/WorkArena](https://github.com/ServiceNow/WorkArena)
- Related scaffold: [https://github.com/ServiceNow/BrowserGym](https://github.com/ServiceNow/BrowserGym)

## Citation

- Title: WorkArena: How Capable Are Web Agents at Solving Common Knowledge Work Tasks?
- Year/source: 2024 · ICML
- Authors in local data: Alexandre Drouin, Maxime Gasse, Massimo Caccia, Issam H. Laradji, Manuel Del Verme, Tom Marty, Leo Boisvert, Megh Thakkar, Quentin Cappart, David Vazquez, Nicolas Chapados, Alexandre Lacoste
- Institutions in source: ServiceNow Research; Mila - Quebec AI Research Institute; McGill University; Universite de Montreal; Polytechnique Montreal
- Local status: `verified`
- Citation status: `verified` · metadata status: `L4_carded`
