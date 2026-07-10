<!-- entry_id: synlogic-2025 -->
<!-- card_type: recipes -->
# SynLogic: Synthesizing Verifiable Reasoning Data at Scale for Learning Logical Reasoning and Beyond

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=synlogic-2025&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=synlogic-2025&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=synlogic-2025&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L4_carded
> Category: programmatically_verifiable_outcome_data, data_construction_open_release_recipes, training_usage_optimization_objectives, scaling_rlvr_test_time_compute, audit_failure_contamination_verifier_attacks
> Links: [Paper](https://arxiv.org/abs/2505.19641) | [NeurIPS / OpenReview](https://openreview.net/forum?id=XtNiw8OQsy) | [Code](https://github.com/MiniMax-AI/SynLogic) | [Dataset](https://huggingface.co/datasets/MiniMaxAI/SynLogic) | [Models](https://huggingface.co/collections/MiniMaxAI/synlogic)

## TL;DR

SynLogic is an open construction recipe for synthesizing logical-reasoning prompts whose final answers can be checked by task-specific programs, then using those binary rewards for RLVR.

The reusable release is primarily a prompt-and-verifier surface: Easy and Hard configurations expose generated problem instances, task identifiers, reference/reward fields, and verifier inputs. The dataset does not expose the accepted and rejected online policy rollouts produced during RL, so it should not be treated as a released reasoning-trace corpus.

## 1. What is this work?

- Year / venue: 2025 | NeurIPS 2025.
- Atlas role: data release, construction recipe, programmatic verifier/reward surface, and scaling study.
- Domains: logical reasoning, synthetic puzzles, and RLVR.
- Current status: partial.
- Why it belongs: SynLogic connects controllable problem generators, task-specific rule verifiers, difficulty calibration, released training prompts, RL scaffolding, and trained model artifacts across a broad logical-task mixture.

The framework covers 35 tasks in its full Hard configuration. Thirty-three task families are synthesized using manually implemented rules; Zebra Puzzle and ARC-AGI draw on existing open resources. The smaller Easy configuration covers 27 tasks selected for the 7B training regime.

The official repository also releases SynLogic-7B, SynLogic-32B, and SynLogic-Mix-3-32B models. These checkpoints demonstrate how the prompt-and-verifier release was used, but their reported benchmark results do not replace an audit of the underlying data, verifier behavior, or artifact revision.

## 2. What data object does it expose?

**Data object:** chat-formatted logical-reasoning prompts paired with task identity, task-specific game state or reference material, and fields consumed by a programmatic reward function.

| Field | Released value |
|---|---|
| Prompt/source | Independently generated instances from logical games and puzzles, plus adopted Zebra Puzzle and ARC-AGI resources. |
| Dataset configurations | `easy` contains about 16.1K rows and 27 task identifiers; `hard` contains about 33.2K rows and covers all 35 tasks. |
| Splits | Easy and Hard expose train and validation splits. The construction target is approximately 10 validation examples per included task. |
| Trace author | No reasoning trace is stored in the released dataset. During RL, the current Qwen2.5 policy generates responses online. |
| Prompt format | A chat-style user prompt instructing the policy to place reasoning inside `<think>...</think>` and the final answer inside `<answer>...</answer>`. |
| Core schema | `data_source`, `prompt`, `ability`, `reward_model`, and `extra_info`. |
| Reward/reference fields | `reward_model` can contain answer, solution, and style fields; `extra_info` contains task-specific game data and an index. These fields are not uniformly populated across all task families. |
| Configuration metadata | Task family, Easy or Hard construction setting, and train or validation split. |
| Environment or substrate | Task-specific generator and verifier code, with DAPO-adapted GRPO training and separate Easy/Hard difficulty regimes. |
| Missing object | Accepted rollouts, rejected rollouts, policy reasoning traces, per-rollout rewards, and reward-hacking examples are not part of the Hugging Face dataset. |

The prompt release and online rollout stream must remain distinct in downstream documentation. SynLogic supplies inputs and executable feedback contracts; the RL system creates the actual reasoning trajectories.

## 3. What is the verifier / reward / judge / environment?

**Native feedback signal:** a binary scalar reward combining response-format compliance with task-specific final-answer verification.

### Inputs

- The task identifier in `data_source`.
- The generated prompt and task-specific `extra_info` or reference fields.
- The policy response containing reasoning and a final answer.
- The expected `<think>` and `<answer>` response format.

### Output and terminal predicate

A response receives the positive reward only when:

1. the required reasoning and answer tags can be parsed; and
2. the extracted final answer is accepted by the task-specific rule verifier.

The native supervision is answer-level correctness rather than step-level logical validity. A positive reward does not certify every statement inside `<think>`.

### Intended use

- Online RLVR with GRPO/DAPO-style training.
- Evaluation of final-answer accuracy on supported logical tasks.
- Generation of additional verifiable prompts using adjustable task parameters.
- Controlled studies of task diversity, difficulty, rollout budget, and response length.

### False positives, false negatives, and brittleness

- A lucky or shortcut final answer may receive a positive reward even when the displayed rationale is flawed.
- Parser behavior can reject an otherwise correct response when tags, whitespace, delimiters, or task-specific answer syntax differ from expectations.
- Equivalent answers may be rejected if a verifier normalizes them incompletely.
- Empty or missing reference-answer fields require task-specific inspection; the Hugging Face viewer shows such fields for ARC-AGI, where other game data may carry the actual verification state.
- Official revision history records duplicate prompts and Boolean Expressions data/generator repairs, demonstrating that a programmatic reward does not guarantee an error-free release.
- Verifier behavior is distributed across task-specific implementations. There is no reported aggregate false-positive/false-negative calibration across all 35 tasks.
- The released dataset omits rejected policy responses, so verifier rejection patterns and reward-gaming behavior cannot be measured from the dataset alone.

Before reuse, pin both the dataset revision and the verifier-code revision. A dataset row without the matching verifier implementation is not a complete feedback contract.

## 4. How is the data constructed?

1. Define a logical task family, its configurable difficulty parameters, a generator, and a task-specific answer verifier.
2. Generate problem instances from manually implemented rules. Zebra Puzzle and ARC-AGI use adopted open resources rather than the same fully synthetic path.
3. Run automated correctness and solvability checks over generated instances.
4. Calibrate difficulty using model solvability. DeepSeek R1 and OpenAI o3-mini are used to estimate upper difficulty bounds through pass@10; the chat models used for lower-bound calibration are not fully disclosed.
5. Form Easy and Hard configurations. Eight tasks with zero training accuracy are excluded from the Easy regime, leaving 27 tasks; Hard covers all 35.
6. Package prompts, reward/reference fields, task-specific game state, and split/configuration metadata.
7. During RL, sample online responses from Qwen2.5 policies and apply the format-plus-correctness binary reward.
8. Train with DAPO-adapted GRPO. The official repository additionally documents integration with Verl.

Known recipe settings:

| Recipe field | Confirmed value |
|---|---|
| Base model | Qwen2.5-7B-Base for SynLogic-Easy; Qwen2.5-32B-Base for SynLogic-Hard and mixed-domain experiments. |
| Trace teacher | None disclosed. DeepSeek R1 and o3-mini calibrate difficulty bounds; they are not released as reasoning-trace teachers. |
| Prompt generator | Manually implemented rule-based generators for 33 task families, plus adopted Zebra Puzzle and ARC-AGI resources. |
| Filtering | Automated correctness and solvability checks, model-based difficulty bounds, and removal of eight zero-training-accuracy tasks from Easy. |
| Sampling | Roughly 16K Easy and 33K Hard training instances; about 10 validation instances per included task. |
| RL rollout count | 16 rollouts per prompt in the reported training configuration. |
| Prompt batch | 128 prompts. |
| Temperature | unknown in accepted metadata. |
| Response budget | Reported maximum response lengths are 16,384 tokens for 7B training and 28,672 tokens for the main 32B SynLogic run. |
| Optimizer/scaffold | DAPO-adapted GRPO; official Verl integration guidance is available. |

### Scaling knobs

- Task-family mixture.
- Per-task generator parameters.
- Easy versus Hard configuration.
- Model-calibrated difficulty bounds.
- Number of generated prompts.
- Prompt batch size.
- Rollouts per prompt.
- Maximum response length.
- Base-model scale.
- Logical-only versus mixed logical, math, and coding training.

### Attribution and reproduction gaps

Reported model improvements combine multiple factors: task mixture, difficulty selection, online rollout count, response length, base model, reward parser, verifier quality, and RL implementation. They should not be attributed solely to the number of released prompts.

Exact reproduction additionally requires the matching dataset revision, generator/verifier code, RL framework configuration, model checkpoint, and task-level source provenance.

## 5. How can it enter post-training?

**Primary use: RLVR.**

A downstream system can sample a batch of released prompts, generate multiple policy responses, parse the required answer format, run the task-specific verifier, and optimize the policy from binary rewards.

Recommended reuse modes:

- Reproduce the Easy 7B or Hard 32B logical-reasoning training regime.
- Generate fresh instances from selected task families at controlled difficulty.
- Mix logical prompts with mathematical or coding RLVR data while retaining task identity and verifier provenance.
- Evaluate verifier robustness, difficulty calibration, task transfer, or rollout scaling.
- Use the official model checkpoints as comparison points after pinning model revisions and licenses.

Do not treat the released prompt dataset as SFT reasoning traces. It contains verifier-ready prompts and reference state, not teacher-authored or policy-authored CoTs. SFT use would require separately sourced or newly generated target responses and an explicit quality policy.

Do not infer step-level supervision from the `<think>` requirement. The released reward is answer-level and format-level.

## 6. What should readers audit?

- **Configuration identity:** record whether `easy` or `hard` is used. The default Easy viewer exposes 27 task identifiers, whereas the complete Hard framework covers 35.
- **Dataset revision:** pin an exact Hugging Face commit. Post-release changes repaired duplicate ARC-AGI prompts, duplicate Easy prompts, and Boolean Expressions data or generator problems.
- **Verifier-code revision:** retain the exact `task2verifier.py` and task implementation used to score a run.
- **Task coverage:** verify that each selected `data_source` has a working generator, parser, and verifier.
- **Reference fields:** inspect answer, solution, style, and `game_data_str` task by task; do not assume the same field carries the answer for every task.
- **Rejected responses:** regenerate and preserve verifier-negative rollouts if reward auditing, error analysis, or reward-model research is intended.
- **Parser robustness:** test tag variations, equivalent answers, malformed outputs, empty answers, and adversarial formatting.
- **Reward hacking:** check whether the final answer can be copied, guessed, leaked from prompt state, or produced without valid reasoning.
- **Difficulty attribution:** separate generator difficulty from model-specific pass@10 calibration and response-token budget.
- **Source overlap:** extend the reported exact-match comparison to semantic and template overlap against downstream benchmarks.
- **Licensing:** audit adopted datasets and benchmark-inspired task families separately from the repository-level MIT declaration.
- **Mixed-domain training:** preserve task origin and reward implementation when combining SynLogic with math or coding datasets.

## 7. What is missing or risky?

- Rejected online rollouts and verifier-rejected responses are not released.
- The dataset does not expose the accepted reasoning traces used during policy optimization.
- Full task-level source lineage and inherited redistribution terms are not documented.
- Broader semantic or template-level decontamination is unknown.
- The chat models used to calibrate lower difficulty bounds are unspecified.
- Temperature is unknown in the accepted metadata.
- Per-task verifier false-positive and false-negative rates are unknown.
- Official issue 6 reports a missing Cipher generation script; reproduction of that task should remain blocked until the repository state is rechecked.
- Some official issue reports concern missing or empty answers. These require task-level investigation because an empty generic answer field can be either a defect or a consequence of task-specific verification through `extra_info`.
- Dataset revision history shows that rows and generators have changed after release; using an unpinned `main` revision weakens reproducibility.
- There is no released corpus of reward-hacking attempts, parser failures, or ambiguous-answer cases.
- Exact separation between generator templates and target logical-reasoning benchmarks is not fully audited.
- Repository- and dataset-level MIT metadata does not by itself establish rights over every adopted or benchmark-derived source.

These gaps justify retaining `status: partial`. A real card improves interpretability but does not by itself make the entry L5 audit-ready.

## 8. Why it matters for post-training reasoning data

SynLogic makes a normally hidden RLVR data-construction layer inspectable. It exposes not just a list of puzzle names, but a reusable coupling among prompt generators, difficulty parameters, task-specific state, answer parsers, executable verifiers, online rollout budgets, and an RL scaffold.

Its most important lesson is that "programmatically verifiable" is a property of a versioned pipeline, not merely of a task label. Generator defects, duplicate prompts, missing scripts, answer-field ambiguity, parser brittleness, and unreleased rejected rollouts all remain material even when the terminal reward is executable.

For future reasoning-data releases, SynLogic provides a strong positive template—release generators, verifiers, configurations, prompts, training guidance, and model artifacts—while its revision history shows why task-level provenance, revision pinning, rejected-example preservation, and verifier calibration are still required.

## 9. Links and citation

- NeurIPS / OpenReview: [https://openreview.net/forum?id=XtNiw8OQsy](https://openreview.net/forum?id=XtNiw8OQsy)
- arXiv: [https://arxiv.org/abs/2505.19641](https://arxiv.org/abs/2505.19641)
- Code and generators: [https://github.com/MiniMax-AI/SynLogic](https://github.com/MiniMax-AI/SynLogic)
- Dataset: [https://huggingface.co/datasets/MiniMaxAI/SynLogic](https://huggingface.co/datasets/MiniMaxAI/SynLogic)
- Audited dataset revision: [bb4297b82b9c28ef39249f48386cefd5e856618a](https://huggingface.co/datasets/MiniMaxAI/SynLogic/tree/bb4297b82b9c28ef39249f48386cefd5e856618a)
- Model collection: [https://huggingface.co/collections/MiniMaxAI/synlogic](https://huggingface.co/collections/MiniMaxAI/synlogic)
- SynLogic-7B: [https://huggingface.co/MiniMaxAI/SynLogic-7B](https://huggingface.co/MiniMaxAI/SynLogic-7B)
- SynLogic-32B: [https://huggingface.co/MiniMaxAI/SynLogic-32B](https://huggingface.co/MiniMaxAI/SynLogic-32B)
- SynLogic-Mix-3-32B: [https://huggingface.co/MiniMaxAI/SynLogic-Mix-3-32B](https://huggingface.co/MiniMaxAI/SynLogic-Mix-3-32B)
- Verl training guidance: [https://github.com/MiniMax-AI/SynLogic/blob/main/docs/training_guidance.md](https://github.com/MiniMax-AI/SynLogic/blob/main/docs/training_guidance.md)
- Cipher release issue: [https://github.com/MiniMax-AI/SynLogic/issues/6](https://github.com/MiniMax-AI/SynLogic/issues/6)
- arXiv DOI: [https://doi.org/10.48550/arXiv.2505.19641](https://doi.org/10.48550/arXiv.2505.19641)

- Data ID: `synlogic-2025`
- Citation status: verified
- Confidence: medium
