<!-- entry_id: reasoning-gym-2025 -->
<!-- card_type: agents -->
# REASONING GYM: Reasoning Environments for Reinforcement Learning with Verifiable Rewards

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=reasoning-gym-2025&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=reasoning-gym-2025&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=reasoning-gym-2025&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L4_carded
> Category: programmatically_verifiable_outcome_data, environment_agent_trajectory_data, data_construction_open_release_recipes, training_usage_optimization_objectives, benchmarks_evaluation_surfaces
> Links: [Paper](https://arxiv.org/abs/2505.24760) · [Venue](https://openreview.net/forum?id=GqYSunGmp7) · [Code](https://github.com/open-thought/reasoning-gym)

## TL;DR

Reasoning Gym is an open Python library of more than 100 procedural reasoning-task generators and task-specific algorithmic verifiers for RL with verifiable rewards.

Its reusable data object is not a fixed corpus. It is an executable environment specification: task implementation, configuration, seed, item index, mixture weights, curriculum state, scorer implementation, and dependency versions together determine the generated question, oracle answer, metadata, and scalar reward.

For reproducible reuse, a project must freeze those inputs and preserve the realized prompts, model responses, rewards, failures, and evaluation snapshots. Referring only to "Reasoning Gym data" is not enough to identify a training distribution.

## 1. What is this work?

- Year / venue: 2025 · NeurIPS 2025 Spotlight.
- Atlas role: agent_environment, construction_recipe, verifier_reward, benchmark, infrastructure.
- Domains: algebra, arithmetic, algorithmic reasoning, code, cognition, games, geometry, graph reasoning, induction, and logic.
- Verification contract: programmatic.
- Current atlas status: verified.
- Primary release: an Apache-2.0 Python library containing procedural generators, task registry, verifier functions, evaluation utilities, training integrations, and experiment configurations.
- Fixed official dataset release: none confirmed. The repository can materialize generated entries as a Hugging Face-compatible dataset, but no canonical official fixed snapshot is linked in the accepted metadata.
- Teacher model: none. Questions and oracle answers are produced by registered task-specific algorithms rather than distilled from a teacher LLM.

Reasoning Gym belongs in the agent-environment track because it exposes executable task and reward logic. However, it is narrower than a conventional multi-turn agent environment: the paper and current metadata focus on single-turn, text-based tasks rather than persistent state-action-observation trajectories.

## 2. What data object does it expose?

The native generated entry contains:

- `question`: the text observation presented to the model;
- `answer`: the oracle answer produced by the task generator;
- `metadata`: task-specific information required for verification and provenance.

The full identity of a generated item additionally depends on:

- repository commit or package version;
- registered task or source-dataset name;
- complete generator configuration;
- seed and generated-item index;
- composite-dataset membership and task weights;
- curriculum level and update state, when enabled;
- scorer implementation and optional scorer dependencies.

### Agent-environment contract

- State: generator configuration, RNG seed, item index, task-specific latent values, composite-mixture state, and optional curriculum level.
- Observation: normally the generated `question`, plus any developer or formatting prompt added by the training scaffold.
- Action: one model-generated text response.
- Oracle information: `answer` and task-specific `metadata`; these are supplied to the verifier and should not be exposed to the policy unless an experiment explicitly chooses to do so.
- Reset: generate the next item from the configured task, seed, and index, or reseed an unbounded stream. There is no persistent multi-turn world state in the paper's main environment contract.
- Terminal predicate: the episode ends after one response and the selected task scorer returns its scalar score.
- Failure preservation: the library can score an incorrect response, but it does not define a canonical rejected-rollout or failure corpus. Reusers must explicitly log failed prompts, responses, rewards, metadata, scorer versions, and exceptions.
- Replayability: achievable only when the code revision, task registry, configuration, seeds, mixture weights, curriculum state, scorer mode, and optional dependencies are pinned. A frozen evaluation snapshot is preferable to regenerating evaluation items later.

The library therefore exposes procedural problem instances and reward-bearing environment records, not a released corpus of authored reasoning traces.

## 3. What is the verifier / reward / judge / environment?

Each registered task supplies a `score_answer` function that compares a model response with the generated entry and returns an algorithmic scalar reward.

- Native signal: task-specific programmatic correctness.
- Inputs: model response plus the generated entry, including oracle answer and metadata.
- Output: scalar reward.
- Supervision granularity: answer level and scalar reward.
- Intended use: RLVR training and environment-backed evaluation.
- Human or LLM judge: none required by the native task contract.
- Terminal behavior: score one submitted response and end the single-turn episode.

Some tasks have one canonical answer, while others admit multiple valid solutions. Their verifier must therefore encode task semantics rather than rely universally on exact string equality.

The current repository also documents an optional cascade scorer that applies progressively more permissive string normalization, numeric matching, and symbolic-math matching. This can reduce false negatives caused by formatting differences, but it is not equivalent to proving semantic correctness.

### Verifier risks

- False positives: the accepted metadata's code audit notes that a base scoring implementation can award partial credit when the oracle string appears inside a longer response. Task-specific overrides may behave differently.
- False negatives: equivalent answers may differ in wrappers, case, numeric representation, symbolic form, or valid solution choice.
- Cascade broadening: numeric tolerance, normalization, and symbolic matching widen the acceptance surface and can accept unintended responses if not tested adversarially.
- Dependency drift: symbolic verification is skipped when the optional `math-verify` dependency is unavailable, making reward behavior environment-dependent.
- Calibration: a global cross-task calibration contract is unknown. Reward scales and partial-credit semantics should be checked per task before tasks are mixed.
- Soundness: unit tests provide useful regression coverage but do not prove that every verifier is sound and complete over the full generated solution space.
- Version: paper-era scorer behavior and current repository behavior must be distinguished explicitly.

## 4. How is the data constructed?

1. A task-specific Python generator is registered under a dataset name.
2. The user supplies a size, seed, and task configuration.
3. The generator samples latent values and constructs a valid question, oracle answer, and metadata.
4. A task-specific verifier evaluates a model response against that entry.
5. Tasks may be combined into weighted composite datasets.
6. Selected tasks may expose configurable curricula that change difficulty during training.
7. Generated entries may be consumed dynamically or materialized into a fixed dataset snapshot.

Construction metadata:

- Base model in the reported transfer and curriculum experiments: Qwen2.5-3B-Instruct. The paper also reports external-transfer runs with Llama-3.2-3B-Instruct.
- Teacher: none.
- Generator: registered task-specific Python procedural generators.
- Universal corpus filter: none. Generators are expected to enforce task validity, while scorers judge submitted responses.
- Search: none as a universal construction stage; model rollout sampling occurs in the RL scaffold.
- Mixture: independent tasks or weighted composites with explicit per-task configurations.
- Difficulty knobs: task-specific structural, difficulty, and stylistic parameters.
- Curriculum: supported for a subset of tasks; difficulty attributes and update rules are task-specific.
- Paper-era repository commit: unknown.
- Canonical paper-era generated snapshot: unknown.
- Rejected or invalid generation log: unknown.

The paper reports that procedural generation provides controllable variation, but this does not by itself establish semantic decontamination from external benchmarks or independence among templates.

## 5. How can it enter post-training?

Recorded uses are RLVR and evaluation.

### RLVR

A training loop can:

1. generate a question at runtime;
2. sample one or more model responses;
3. compute task-specific rewards with `score_answer`;
4. update the policy with GRPO or another RL algorithm.

The paper uses a modified `verl` stack for most reported runs. The repository also provides separate training code for the reported Qwen math experiment.

### Curriculum RLVR

For supported tasks, difficulty can change according to recent performance. The paper's spell-backward example increases word length when performance crosses a threshold, illustrating how the data distribution can respond to the learner.

This makes curriculum state part of data lineage. Two runs with the same nominal task and seed can diverge when their model performance changes the curriculum schedule.

### Evaluation

Reasoning Gym can generate held-out examples at selected difficulty levels, but a reproducible evaluation should materialize and archive the exact items. Regenerating later against a changed repository, registry, scorer, or dependency set can change the benchmark.

### Reported budget example

The paper appendix provides one experiment-specific `verl` configuration with:

- virtual dataset size: 20,000;
- maximum prompt length: 4,096 tokens;
- maximum response length: 2,048 tokens;
- rollout samples per prompt: 8;
- rollout temperature: 1.0;
- total training steps: 500;
- training hardware: four A6000 GPUs for the described runs.

The paper separately reports 800 GRPO steps for one Llama-3.2-3B-Instruct external-transfer run and 600 steps for the corresponding Qwen2.5-3B-Instruct run. These are reported experimental settings, not universal Reasoning Gym defaults.

## 6. What should readers audit?

- Pin the exact repository commit or published package version.
- Record the full task registry rather than only saying "100+ tasks."
- Save every generator configuration, seed, item index, virtual dataset size, and reseeding rule.
- Record composite task weights and the realized sample count per task.
- Preserve curriculum attributes, initial levels, update intervals, thresholds, recent-performance window, and every level transition.
- Distinguish native task scoring from optional cascade scoring.
- Pin optional scorer dependencies, especially symbolic-math verification.
- Test each verifier for false positives, false negatives, substring leakage, numeric-tolerance errors, malformed outputs, and multiple-valid-solution coverage.
- Separate correctness reward from formatting, length, or other auxiliary rewards when reporting training curves.
- Freeze evaluation instances and keep them separate from training streams.
- Store model responses and zero/partial-reward failures; generator reproducibility alone does not preserve rollout evidence.
- Audit bundled resources or external assets used by individual task implementations, even though the main repository is Apache-2.0.
- Check semantic and template overlap with external benchmarks; procedural generation does not automatically imply decontamination.
- Report prompt, response, rollout, compute, and retry budgets alongside accuracy or reward.

## 7. What is missing or risky?

- No universal fixed train/test split exists.
- The exact commit used for each paper experiment remains unknown in the accepted metadata.
- The project is under active development, so task counts, defaults, outputs, scorers, and package behavior can change.
- A task name alone is not a stable data identifier.
- Native generation does not preserve failed model rollouts unless the surrounding training system logs them.
- Procedural variation does not prevent shared templates, semantic overlap, or uncontrolled train/evaluation reuse.
- Verifiers may reward formatting shortcuts, answer substrings, numeric-tolerance exploits, or incomplete valid outputs.
- Optional dependencies can change which answers receive credit.
- Difficulty scales are task-specific and are not necessarily comparable across environments.
- Curricula exist only for a subset of tasks.
- Generator validity and unit tests do not establish verifier soundness for every possible output.
- The current scope is single-turn and text-only; multi-turn and multimodal environment support is not part of the paper's demonstrated contract.
- Domains requiring open-ended knowledge, creativity, or human judgment are difficult to express with procedural generators and programmatic rewards.
- A canonical official materialized dataset, immutable evaluation snapshot, and complete failure ledger are unavailable or unknown.

## 8. Why it matters for post-training reasoning data

Reasoning Gym makes an important shift from treating reasoning data as a static file to treating it as a versioned executable environment.

For this class of release, the reusable data identity is:

`generator implementation + configuration + seed/index + mixture/curriculum state + scorer + dependency versions + realized rollout log`

That formulation is valuable for RLVR because it exposes both the task-generation process and the reward contract. It also makes the audit burden explicit: dynamic generation improves scale and controllability, but reproducibility depends on preserving much more than a paper title or task name.

Reasoning Gym is therefore a core example of how open reasoning-data projects can package prompt generation, difficulty control, verification, training integration, and evaluation while still requiring careful version, reward, and failure auditing.

## 9. Links and citation

[Paper](https://arxiv.org/abs/2505.24760) · [Venue / OpenReview](https://openreview.net/forum?id=GqYSunGmp7) · [Official repository](https://github.com/open-thought/reasoning-gym) · [License](https://github.com/open-thought/reasoning-gym/blob/main/LICENSE) · [Releases](https://github.com/open-thought/reasoning-gym/releases)

- Data ID: `reasoning-gym-2025`
- Citation status: verified
- Confidence: medium
- Official fixed dataset / Hugging Face release: null
- Paper-era repository commit: unknown

Zafir Stojanovski, Oliver Stanley, Joe Sharratt, Richard Jones, Abdulhakeem Adefioye, Jean Kaddour, and Andreas Köpf. 2025. "REASONING GYM: Reasoning Environments for Reinforcement Learning with Verifiable Rewards." NeurIPS 2025 Spotlight. arXiv:2505.24760.
