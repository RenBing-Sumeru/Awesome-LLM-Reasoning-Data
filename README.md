# 🌟 Awesome LLM Reasoning Data

> A learning-first atlas of post-training reasoning data, verifiers, reward signals, construction recipes, and audit fields.

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![Paper Companion](https://img.shields.io/badge/paper-companion-blue)](docs/anonymity_note.md)
[![Local Website](https://img.shields.io/badge/site-local%20atlas-0f766e)](docs/index.html)
[![Entries](https://img.shields.io/badge/entries-269-7c3aed)](data/papers.yaml)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

<p align="center">
  <img src="assets/overview.svg" width="92%" alt="Awesome LLM Reasoning Data overview">
</p>

**Awesome LLM Reasoning Data** is a living atlas for the data layer behind reasoning-model post-training.
It is not trying to be a leaderboard, a ranking, or a complete claim of coverage.
It is a practical map for asking better questions about what a reasoning model was trained against, how feedback was produced, and what metadata is needed before a result can be trusted.

The core idea is simple:

`prompt -> answer` is rarely enough.

A useful post-training reasoning record usually looks more like:

`task/context -> trace/actions -> answer/artifact -> verifier/reward/judge/environment -> attribution metadata`

That record may be used for supervised fine-tuning, distillation, process supervision, reward modeling, RL with verifiable rewards, agent training, evaluation, or audit.
The repo is organized around those data objects and feedback contracts.

---

## 🚀 60-second version

> **Post-training reasoning data** is the data used after pretraining to teach, reinforce, or audit reasoning behavior.
>
> A useful sample is usually not only:
>
> `prompt -> answer`
>
> but:
>
> `task/context -> trace/actions -> answer/artifact -> verifier/reward/judge/environment -> metadata`
>
> This repo helps you compare those records across math, code, proof, agents, rubric judging, frontier model reports, scaling studies, and failure audits.

Read this repository if you want to answer questions like:

- 🧪 What exactly verified the answer: unit tests, a proof checker, a reward model, an LLM judge, a rubric, or an environment?
- 🪜 Was feedback attached to the final answer, each step, a rollout set, a state-action transition, or a full episode?
- 🧬 Which teacher, base model, prompt source, filtering rule, split, license, and contamination check produced the released data?
- 📈 Did a result improve the asymptote, the sample efficiency, the inference budget curve, or only the reported pass rate?
- 🧯 Where can the verifier fail, leak, overfit, reward-hack, or silently encode lineage artifacts?

---

## 📌 Contents

| Section | What you will learn | Go |
|---|---|---|
| 🧭 Start Here | Zero-to-field overview and reading paths | [docs/00](docs/00_start_here.md) |
| 🧠 60-second Model | The verifier-bearing sample mental model | [jump](#-60-second-version) |
| 🔥 Latest Updates | What changed recently in this atlas | [jump](#-latest-updates) |
| 🧭 Starter Pack | 20 papers to read first | [jump](#-starter-pack-20-papers-to-read-first) |
| 🧮 Core Paper Map | The compact map from data objects to papers | [jump](#-core-paper-map) |
| 🗺️ Category Map | Programmatic, environmental, judgment-required, scaling, audit | [jump](#-category-map) |
| 🧰 Build Data | Construction stack for reasoning datasets | [docs/05](docs/05_construction_cookbook.md) |
| 🧪 Audit Verifiers | How to inspect rewards, judges, checkers, and rubrics | [docs/06](docs/06_verifiers_and_rewards.md) |
| 🌐 Agent Trajectories | State/action/replay fields for tools, web, OS, SWE | [docs/07](docs/07_agent_trajectory_data.md) |
| 📈 Scaling Claims | RLVR, reuse, pass@k, test-time compute, inference budget | [docs/08](docs/08_scaling_and_test_time_compute.md) |
| 🧯 Failures | Leakage, contamination, verifier gaming, judge attacks | [docs/09](docs/09_audit_and_failure_modes.md) |
| 🎓 Industry Path | 6-week onboarding plan for post-training data work | [docs/10](docs/10_industry_onboarding_path.md) |
| 📚 Full Atlas | Structured entries and local searchable site | [data](data/papers.yaml) · [site](docs/index.html) |
| 🤝 Contribute | Add papers with metadata, not only links | [CONTRIBUTING](CONTRIBUTING.md) |
| 📖 Cite | Citation metadata and anonymity note | [CITATION](CITATION.cff) |

---

## 🔥 Latest Updates

| Date | Update | Why it matters |
|---|---|---|
| 2026-06-02 | Academic visual refresh using downloaded diagram/writing skill resources. | Replaces placeholder-like figures with reusable SVG/PNG assets and fixes stale homepage counts. |
| 2026-06-01 | Phase A README and visual redesign started from the v2 spec. | Turns the repo front page into a learning atlas instead of a short generated index. |
| 2026-06-01 | Reference style study added in [`reports/reference_repo_redesign_study.md`](reports/reference_repo_redesign_study.md). | Captures what to borrow from strong Awesome lists and course repos without copying their categories. |
| 2026-06-01 | Current structured snapshot: **269 entries**, **0 verified**, **114 partial**, **155 needs metadata/search**, **42 filled cards**. | Makes the atlas useful while keeping uncertainty visible. |
| 2026-06-01 | Visual map refreshed around verifier-bearing samples, taxonomy, and paper clusters. | Gives newcomers a fast mental model before they enter the long lists. |

> The atlas is intentionally conservative about metadata. If a paper/code/data/project link is not verified locally, it should stay out of the README and move to [`reports/needs_search.md`](reports/needs_search.md).

---

## 🧭 Starter Pack: 20 papers to read first

Read these in order if you are new to post-training reasoning data.
They move from process supervision and open reasoning-data recipes toward frontier reports, scaling claims, agent environments, and audit failures.

| # | Paper / report | Lens | Start with this question |
|---:|---|---|---|
| 1 | 🪜 [Let's Verify Step by Step](https://arxiv.org/abs/2305.20050) | process supervision | What does step-level feedback buy over outcome-only labels? |
| 2 | 🪜 [Math-Shepherd](https://arxiv.org/abs/2312.08935) | process reward | How can rollout-derived signals supervise intermediate reasoning? |
| 3 | 🏗️ [OpenThoughts: Data recipes for reasoning models](https://arxiv.org/abs/2506.04178) | open recipe | Which prompt, trace, filtering, and ablation fields are disclosed? |
| 4 | 📦 [OpenMathReasoning](https://arxiv.org/abs/2504.16891) | math traces | What makes a trace release reusable rather than just impressive? |
| 5 | 📦 [DeepMath-103K](https://arxiv.org/abs/2504.11456) | verifiable math | How are difficulty, decontamination, and verifier pinning reported? |
| 6 | 📦 [Big-Math-RL-Verified](https://arxiv.org/abs/2502.17387) | RLVR math | Which examples are eligible for reward-backed optimization? |
| 7 | 🏗️ [LIMO: Less Is More for Reasoning](https://arxiv.org/abs/2502.03387) | small curated data | When does a small set elicit behavior instead of covering a domain? |
| 8 | 🏗️ [DAPO](https://arxiv.org/abs/2503.14476) | RL recipe | How do filtering and optimizer choices change what reaches the gradient? |
| 9 | 🚀 [DeepSeek-R1](https://arxiv.org/abs/2501.12948) | frontier RLVR | What can and cannot be inferred from a public model report? |
| 10 | 🚀 [Kimi K1.5](https://arxiv.org/abs/2501.12599) | long-context RL | How do context length, reward, and inference budget interact? |
| 11 | 🚀 [Qwen3 Technical Report](https://arxiv.org/abs/2505.09388) | model-family report | Which post-training data partitions are disclosed clearly? |
| 12 | 🚀 [Magistral](https://arxiv.org/abs/2506.10910) | reward stack | What does the report reveal about prompt cycling and reward contracts? |
| 13 | 🚀 [Llama-Nemotron](https://arxiv.org/abs/2505.00949) | mixed post-training | How are reasoning, chat, and safety data separated? |
| 14 | ⏱️ [s1: Simple Test-Time Scaling](https://arxiv.org/abs/2501.19393) | budget forcing | When is test-time compute a data story? |
| 15 | 📈 [The Art of Scaling RL Compute for LLMs](https://arxiv.org/abs/2510.13786) | scaling attribution | Is the reported gain asymptote, efficiency, or budget allocation? |
| 16 | 🌐 [SWE-Gym](https://arxiv.org/abs/2412.21139) | agent environments | What fields make an SWE episode trainable and replayable? |
| 17 | ⚖️ [HealthBench](https://arxiv.org/abs/2505.08775) | rubric data | How does judgment-required verification become auditable? |
| 18 | 🧯 [Leaky Thoughts](https://arxiv.org/abs/2506.15674) | trace privacy | What private fields can a reasoning trace expose? |
| 19 | 🧯 [One Token to Fool LLM-as-a-Judge](https://arxiv.org/abs/2507.08794) | judge attack | How brittle can learned or prompted judges be? |
| 20 | 🧯 [Spurious Rewards](https://arxiv.org/abs/2506.10947) | reward hacking | Which reward signals produce progress-looking failures? |

Next steps:

- Newcomer: read [`docs/00_start_here.md`](docs/00_start_here.md) and [`docs/01_what_is_post_training_reasoning_data.md`](docs/01_what_is_post_training_reasoning_data.md).
- Builder: read [`docs/05_construction_cookbook.md`](docs/05_construction_cookbook.md) and fill a [`release card`](cards/release_card_template.md).
- Auditor: read [`docs/09_audit_and_failure_modes.md`](docs/09_audit_and_failure_modes.md) and compare three entries in [`data/papers.yaml`](data/papers.yaml).

---

## 🧮 Core Paper Map

<p align="center">
  <img src="assets/paper_map.svg" width="92%" alt="Core paper map for reasoning data">
</p>

| Cluster | Representative entries | What to inspect |
|---|---|---|
| 🧮 Programmatic math/code/proof | [OpenMathReasoning](https://arxiv.org/abs/2504.16891), [DeepMath-103K](https://arxiv.org/abs/2504.11456), [Big-Math-RL-Verified](https://arxiv.org/abs/2502.17387), [OpenCodeReasoning-II](https://arxiv.org/abs/2507.09075) | answer checker, unit tests, proof checker, pass-rate bands, decontamination |
| 🪜 Process supervision and PRMs | [Let's Verify Step by Step](https://arxiv.org/abs/2305.20050), [Math-Shepherd](https://arxiv.org/abs/2312.08935), [Qwen2.5-Math-PRM](data/papers.yaml) | step labels, rollout values, first-error localization, reward-model calibration |
| 🏗️ Open construction recipes | [OpenThoughts](https://arxiv.org/abs/2506.04178), [DAPO](https://arxiv.org/abs/2503.14476), [LIMO](https://arxiv.org/abs/2502.03387), [s1](https://arxiv.org/abs/2501.19393) | prompt source, teacher trace, filtering rule, optimizer/scaffold, ablation fields |
| 🚀 Frontier model reports | [DeepSeek-R1](https://arxiv.org/abs/2501.12948), [Kimi K1.5](https://arxiv.org/abs/2501.12599), [Qwen3](https://arxiv.org/abs/2505.09388), [Magistral](https://arxiv.org/abs/2506.10910) | disclosed data partitions, reward contract, RLVR setup, distillation path |
| 🌐 Agent and environment data | [SWE-Gym](https://arxiv.org/abs/2412.21139), [WebArena](data/papers.yaml), [OSWorld](data/papers.yaml), [OpenHands](data/papers.yaml) | state/action/observation schema, terminal predicate, replayability, scaffold metadata |
| ⚖️ Judgment-required rubrics | [HealthBench](https://arxiv.org/abs/2505.08775), [RewardBench](data/papers.yaml), [Safety Through Reasoning](https://arxiv.org/abs/2505.20087), [OnlineRubrics](https://arxiv.org/abs/2510.07284) | rubric provenance, judge prompts, adjudication, domain expertise, calibration |
| 📈 Scaling and test-time compute | [The Art of Scaling RL Compute](https://arxiv.org/abs/2510.13786), [s1](https://arxiv.org/abs/2501.19393), [Scaling Behaviors of LLM RL Post-Training](https://arxiv.org/abs/2509.25300) | unique data, reuse, pass@k, pass@(k,T), inference budget, search topology |
| 🧯 Audit and failure modes | [Leaky Thoughts](https://arxiv.org/abs/2506.15674), [One Token to Fool LLM-as-a-Judge](https://arxiv.org/abs/2507.08794), [Spurious Rewards](https://arxiv.org/abs/2506.10947), [Search-Time Data Contamination](https://arxiv.org/abs/2508.13180), [Subliminal Learning](https://arxiv.org/abs/2507.14805) | leakage, contamination, verifier gaming, judge attack, hidden trait transfer |

---

## 🗺️ Category Map

<p align="center">
  <img src="assets/taxonomy.svg" width="86%" alt="Verifier-anchored taxonomy">
</p>

A reasoning-data taxonomy should start from the feedback contract, not only the academic domain.
The same math problem can be an SFT trace, an RLVR answer record, a PRM step record, a rejection-sampling candidate, or a contamination probe.
The same browser task can be a benchmark item, a replayable training episode, a failure demonstration, or a scaffold comparison.

| Axis | Values | Reader question |
|---|---|---|
| 🧪 Verification contract | programmatic, environmental, judgment-required, mixed, unknown | Who or what says the sample is correct? |
| 🪜 Granularity | answer, step, transition, full episode, rollout set, scalar reward | Where does feedback attach? |
| 🧩 Data object | prompt-answer, trace-answer, PRM record, preference pair, trajectory, rubric record | What fields must be serialized? |
| 🧬 Lineage | human, teacher model, search, self-play, environment, synthetic mix | Where did the behavior come from? |
| 🧰 Training use | SFT, distillation, reward modeling, RLVR, agent training, evaluation, audit | How could this data enter a post-training pipeline? |
| 🧯 Risk | leakage, contamination, verifier failure, judge attack, reward hacking, license ambiguity | What can make the gain misleading? |

---

## 🧰 How to build a reasoning dataset

Use the construction stack from [`docs/05_construction_cookbook.md`](docs/05_construction_cookbook.md):

<p align="center">
  <img src="assets/construction_stack.svg" width="90%" alt="Reasoning dataset construction stack">
</p>

| Layer | Builder checklist | Common evidence |
|---|---|---|
| 1. 📥 Prompt sourcing | Describe source mix, license, split, difficulty, and base-model pass rate. | prompt pool, dedupe report, contamination checks |
| 2. ✍️ Trace writing | Say whether traces are human-written, teacher-generated, search-generated, or self-played. | teacher model, sampling temperature, rollout count |
| 3. 🔍 Search substrate | Record beam/search/MCTS/self-critique/scaffold details. | search budget, candidate count, pruning rules |
| 4. 🧪 Verifier layer | Pin the checker, judge, environment, rubric, or reward model. | tests, proof checker version, judge prompt, rubric |
| 5. 🧹 Filtering | Keep pass/fail bands, rejection reasons, and ambiguous cases. | filter script, verifier logs, disagreement set |
| 6. 🏋️ Optimizer/scaffold | State whether data is used for SFT, distillation, RLVR, PRM, or agent training. | loss, reward, rollout policy, curriculum |
| 7. 🧬 Release metadata | Preserve attribution, lineage, splits, license, and known failure modes. | card, datasheet, citation, changelog |

Minimal release question:

> Could a different team reproduce the data object, rerun the verifier, and explain what would fail if the verifier were wrong?

---

## 🧪 How to audit a verifier

A verifier is not just a score. It is a data-producing instrument.
Use [`docs/06_verifiers_and_rewards.md`](docs/06_verifiers_and_rewards.md) as the deeper guide.

<p align="center">
  <img src="assets/quality_matrix.svg" width="90%" alt="Reasoning data quality matrix">
</p>

| Verifier type | Audit focus | Red flag |
|---|---|---|
| 🧮 Answer checker | canonicalization, tolerance, symbolic equivalence | formatting hacks count as reasoning gains |
| 💻 Unit tests | hidden tests, flaky tests, generated tests, coverage | model learns test style rather than task skill |
| 🧾 Proof checker | version, imports, tactic environment, timeout | proof succeeds only under an undocumented environment |
| 🪜 PRM | step boundary, label policy, calibration, rollout values | reward rises while final correctness falls |
| ⚖️ Rubric judge | rubric source, domain expertise, adjudication, prompt | judge is sensitive to wording or verbosity |
| 🧑‍⚖️ LLM-as-judge | model version, prompt, decoding, attack suite | one token or style cue flips the verdict |
| 🌐 Environment | terminal predicate, reset, observation schema, replay | success transcript cannot be replayed |

A good verifier card should answer:

- What input does the verifier consume?
- What output does it produce?
- What is the failure mode when the model optimizes against it?
- Is the verifier independent from the generator or teacher?
- Can the community rerun it?

---

## 🌐 How to audit agent trajectory data

Agent data is more than a cleaned success transcript.
A trainable or auditable episode should expose the environment contract.
Read [`docs/07_agent_trajectory_data.md`](docs/07_agent_trajectory_data.md) for the full checklist.

| Field | Why it matters |
|---|---|
| 🧭 Task and initial state | Defines what the agent was actually asked to solve. |
| 👀 Observation stream | Separates visible context from hidden evaluator state. |
| 🛠️ Action schema | Makes tool, browser, OS, code, or API calls inspectable. |
| ⏱️ Budget | Records step limit, time, token budget, and retries. |
| 🧪 Terminal predicate | States exactly how success or failure is decided. |
| 🔁 Replay metadata | Lets another team re-run the episode and verify the result. |
| 🧱 Scaffold metadata | Captures planner, memory, retrieval, tool wrapper, and guardrails. |
| 🧯 Failure trace | Keeps near-misses and verifier failures instead of deleting them. |

---

## 📈 How to interpret scaling claims

Scaling claims become much clearer when you treat the training data, verifier, and inference budget as part of the same ledger.
Read [`docs/08_scaling_and_test_time_compute.md`](docs/08_scaling_and_test_time_compute.md) before comparing frontier reports.

<p align="center">
  <img src="assets/scaling_ledger.svg" width="90%" alt="Scaling attribution ledger">
</p>

| Claim | Ask for | Watch out |
|---|---|---|
| RLVR improves reasoning | reward contract, verifier coverage, base-model pass rate | reward hacking or easy-example filtering |
| More data improves performance | unique examples, reuse count, source mixture | repeated prompts counted as fresh data |
| Test-time compute scales | pass@k, pass@(k,T), budget, search topology | hidden inference budget changes |
| Distillation transfers reasoning | teacher identity, trace policy, filtering | teacher leakage or style imitation |
| Frontier report shows recipe | data partitions, curricula, ablations | optimizer details without data details |

---

## 📚 Full Paper Atlas

The homepage is intentionally compact.
Use the structured files for the long view:

| File | Use it for |
|---|---|
| [`papers/README.md`](papers/README.md) | Human-readable category index for the full paper atlas. |
| [`data/papers.yaml`](data/papers.yaml) | Main structured atlas, currently 269 entries. |
| [`docs/assets/entries.json`](docs/assets/entries.json) | Site-ready entry data for search and filtering. |
| [`docs/index.html`](docs/index.html) | Local static atlas experience. |
| [`reports/counts.md`](reports/counts.md) | Snapshot counts by status, role, contract, use, layer, and year. |
| [`reports/needs_search.md`](reports/needs_search.md) | 156 entries still missing official artifact links or metadata verification. |
| [`reports/citation_audit.md`](reports/citation_audit.md) | Citation and source-confidence notes. |

Current snapshot:

| Metric | Count |
|---|---:|
| Total entries | 269 |
| Verified | 0 |
| Partial | 114 |
| Needs metadata/search | 155 |
| Data releases | 15 |
| Verifiers / rewards | 10 |
| Agent environments | 10 |
| Scaling studies | 11 |
| Programmatic verification | 21 |
| Environmental verification | 12 |
| Judgment-required verification | 13 |

---

## 🃏 Release Cards

Cards are the bridge between a citation and an engineering decision.
Use them when adding or auditing a data release, verifier, recipe, or agent environment.

| Card type | Template | Good for |
|---|---|---|
| 🧭 Card index | [`cards/README.md`](cards/README.md) | browse the 42 filled release, verifier, recipe, agent, benchmark, and failure cards |
| 📦 Release card | [`cards/release_card_template.md`](cards/release_card_template.md) | datasets, trace releases, open reasoning corpora |
| 🧪 Verifier card | [`cards/verifier_card_template.md`](cards/verifier_card_template.md) | checkers, judges, reward models, rubrics |
| 🏗️ Recipe card | [`cards/recipe_card_template.md`](cards/recipe_card_template.md) | construction pipelines and frontier recipes |
| 🌐 Agent trajectory card | [`cards/agent_trajectory_card_template.md`](cards/agent_trajectory_card_template.md) | web, OS, app, tool, and SWE episodes |
| 🧪 Example card | [`math_reasoning_release_card`](cards/examples/math_reasoning_release_card.md) | compact example of math reasoning release metadata |
| ⚖️ Example card | [`rubric_reward_release_card`](cards/examples/rubric_reward_release_card.md) | compact example of rubric reward metadata |
| 🌐 Example card | [`agent_environment_release_card`](cards/examples/agent_environment_release_card.md) | compact example of environment metadata |

A good card should include the data object, verification contract, supervision granularity, construction recipe, training use, audit checklist, known limitations, and links.
If a field is unknown, write `unknown` or `needs_verification` instead of guessing.

---

## 🎓 Learning Routes

| You are... | Read | Produce |
|---|---|---|
| 🧭 New to the field | [`00_start_here`](docs/00_start_here.md), [`01_what_is_post_training_reasoning_data`](docs/01_what_is_post_training_reasoning_data.md), [`02_verifier_anchored_taxonomy`](docs/02_verifier_anchored_taxonomy.md) | a one-page map of data objects |
| 🧰 Building data | [`05_construction_cookbook`](docs/05_construction_cookbook.md), [`06_verifiers_and_rewards`](docs/06_verifiers_and_rewards.md) | one release card and one verifier card |
| 🌐 Working on agents | [`07_agent_trajectory_data`](docs/07_agent_trajectory_data.md) | a replayability checklist for one benchmark |
| 📈 Reading frontier reports | [`08_scaling_and_test_time_compute`](docs/08_scaling_and_test_time_compute.md), [`09_audit_and_failure_modes`](docs/09_audit_and_failure_modes.md) | a scaling ledger for one report |
| 🎓 Joining an industrial team | [`10_industry_onboarding_path`](docs/10_industry_onboarding_path.md) | a 6-week capstone mini-pipeline |

---

## 🤝 Contributing

Contributions should make the atlas more auditable, not only longer.
Please include structured metadata when you add a paper, dataset, verifier, benchmark, or report.

Minimum useful contribution:

- Title, year, venue, and official paper link.
- Source role: data release, verifier/reward, construction recipe, model report, benchmark, scaling study, audit/failure, survey/background.
- Verification contract: programmatic, environmental, judgment-required, mixed, or unknown.
- Training use: SFT, distillation, reward modeling, process supervision, RLVR, agent training, evaluation, audit, or unknown.
- One-line reason the entry belongs in a reasoning-data atlas.
- `needs_verification` notes for uncertain fields.

Start with [`CONTRIBUTING.md`](CONTRIBUTING.md), then update [`data/papers.yaml`](data/papers.yaml) or the relevant card template.

---

## 📖 Citation

Citation metadata now points to the public GitHub repository.
See [`CITATION.cff`](CITATION.cff) and [`docs/anonymity_note.md`](docs/anonymity_note.md).

If you use the atlas, please cite this repository and link back to the living resource. If a companion paper is released later, its citation can be added without changing the structured atlas.

---

## 🧩 Related Awesome Lists

These are reference neighbors, not substitutes for this data-first atlas:

- [Awesome Dataset Distillation](https://github.com/Guang000/Awesome-Dataset-Distillation) - strong maintained-list style and update rhythm.
- [Awesome LLM Post-training](https://github.com/mbzuai-oryx/awesome-llm-post-training) - broader post-training taxonomy and paper stream.
- [Awesome LLM Reasoning](https://github.com/atfortes/Awesome-LLM-Reasoning) - broader reasoning-method paper map.
- [mlabonne/llm-datasets](https://github.com/mlabonne/llm-datasets) - practical dataset-quality orientation.
- [Awesome LLM Reasoning Failures](https://github.com/Peiyang-Song/Awesome-LLM-Reasoning-Failures) - failure-analysis companion style.

---

## 🧾 Status and Caveats

- This is a living atlas with partial metadata, not a definitive list. Link verification and metadata verification are tracked separately.
- Counts come from the current local snapshot in [`reports/counts.md`](reports/counts.md).
- Many seed entries are intentionally marked `needs_metadata` because they came from local BibTeX or notes and still need curator verification.
- Do not treat missing links as absence of a project. Treat them as `needs_search` until verified from primary sources.
