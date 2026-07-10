<!-- entry_id: weblinx-real-world-website-navigation-with-multi-turn-dialogue-2024 -->
<!-- card_type: agents -->
# 🌐 WebLINX: Real-World Website Navigation with Multi-Turn Dialogue

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=weblinx-real-world-website-navigation-with-multi-turn-dialogue-2024&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=weblinx-real-world-website-navigation-with-multi-turn-dialogue-2024&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=weblinx-real-world-website-navigation-with-multi-turn-dialogue-2024&mode=compare)
<!-- ask_atlas:end -->

<!-- track: 🌐 Environment & Agent Trajectories (Track 06) · 🧰 Benchmarks & Evaluation (Track 11) -->
> Subfield: 🌍 Web/browser agents

## One-line takeaway

WebLINX records real-world web navigation as multi-turn dialogue plus browser actions, making demonstrations and action traces the reusable data object.

## Why this matters

This agent trajectory card is included because it helps readers connect a citation to an engineering decision. Read it through three linked questions: what is the data object, what verifies it, and what would fail if the verifier or metadata were wrong?

Local role metadata: `data_release, benchmark, agent_environment`. Local verification contract: `environmental, mixed`. Local training/evaluation use: `sft, agent_training, evaluation`. The current atlas status is `verified`, while citation/artifact status is `verified`. That separation is intentional: a working official link does not mean the source mixture, split, license, lineage, and verifier internals are fully curated.

## What is the data object?

| Field | Local value |
|---|---|
| Atlas type | Agent trajectory card |
| Domains | web, browser, agents |
| Prompt/source | real-world website navigation instructions and multi-turn user dialogue |
| Trace/action author | human demonstrators and browser-navigation traces |
| Answer/artifact format | dialogue, web observations, browser actions, and final navigation outcome |
| Process fields | user utterance, page observation, action, DOM/browser state, turn history, outcome |
| Environment/substrate | WebLINX website navigation demonstrations and benchmark scaffold |
| Verifier/reward | action/trajectory matching and environment-based task success checks |
| Terminal predicate | target web navigation task is completed or the demonstration reaches the intended outcome |

## Verification contract

- Check parser behavior, action normalization, browser-state replay, demonstration alignment, and verifier false negatives.
- Check website snapshot/versioning, observation/action schema, hidden dependencies, and terminal predicate.

A reusable reasoning-data artifact should make the accept/reject or scoring signal reproducible. If the signal depends on live website drift, hidden browser state, undocumented action encoding, missing evaluator code, or unclear task boundary, keep the entry `partial` until the gap is resolved.

## Supervision granularity

- Recorded granularity: `full_episode, state_action_level`.
- Recorded training/evaluation use: `sft, agent_training, evaluation`.
- Construction layer: `trace_writing, release_audit`.

Granularity controls reuse. Answer-level records, step labels, scalar rewards, preference pairs, and full environment episodes are not interchangeable. Match your training or evaluation objective to the feedback level that the source actually exposes.

## Construction recipe

| Recipe field | Local value |
|---|---|
| Base model | unknown |
| Teacher | human web-navigation demonstrators |
| Generator | collected multi-turn web navigation demonstrations |
| Filtering rule | retain demonstrations with usable dialogue, page observations, and action traces |
| Sampling protocol | unknown |
| Rollout count | unknown |
| Temperature | unknown |
| Inference budget | unknown |
| Optimizer/scaffold | WebLINX project and benchmark scaffold |

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

- Source mixture: human web-navigation demonstrations; website/task inventory should be pinned.
- Split: unknown in local metadata.
- Decontamination: unknown.
- License: unknown in local metadata.
- Lineage: official project page, arXiv paper, and McGill-NLP GitHub repository.
- Known failure modes: website drift, action-replay brittleness, demonstration bias, train/eval leakage, and ambiguity in final task completion.

Local audit note: Official paper, project, and code are verified; downstream reuse should check whether the released traces are replayable or mainly useful for behavioral cloning.

## Links

- arXiv: [https://arxiv.org/abs/2402.05930](https://arxiv.org/abs/2402.05930)
- Project: [https://mcgill-nlp.github.io/weblinx/](https://mcgill-nlp.github.io/weblinx/)
- Code: [https://github.com/McGill-NLP/weblinx](https://github.com/McGill-NLP/weblinx)

## Citation

- Title: WebLINX: Real-World Website Navigation with Multi-Turn Dialogue
- Year/source: 2024 · ICML
- Authors in local data: Xing Han Lu, Zdenek Kasner, Siva Reddy
- Institutions in source: Mila Quebec AI Institute; Institute of Formal and Applied Linguistics, Charles University; McGill University; Facebook CIFAR AI Chair
- Local status: `verified`
- Citation status: `verified` · metadata status: `L4_carded`
