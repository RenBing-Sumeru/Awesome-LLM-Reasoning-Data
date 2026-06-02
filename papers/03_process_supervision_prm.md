# 🪜 Process Supervision and Process Reward Models

> Step labels, rollout values, first-error localization, PRM datasets, process verifiers, and studies of when process rewards help or fail.

## Why this category matters

Process supervision asks a different question from outcome supervision. Instead of only asking whether the final answer is right, it asks where the reasoning path becomes reliable, uncertain, or wrong. That makes the data object richer: a prompt, a chain of steps, step-level labels or values, sometimes a first-error marker, and a reward model or verifier trained to score intermediate states. The extra structure is expensive, but it can make feedback denser and more diagnostic.

The category begins with landmark human-labeled step data such as PRM800K / Let’s Verify Step by Step, then follows automated and semi-automated routes: Math-Shepherd-style rollout values, OmegaPRM, ProcessBench, PRMBench, Qwen2.5-Math-PRM, PRIME, PROF, and newer analyses that connect GRPO, outcome rewards, and process-like credit assignment. For code and tool tasks, process supervision can mean execution traces, first failing assertion, or partial credit for reaching a better state.

Practitioners should be skeptical and precise. A process reward model can improve search, reranking, and training, but it can also reward plausible-looking steps, overfit annotation style, or disagree with the final verifier. A first-error label is not the same as a scalar reward; a rollout value is not the same as human step correctness; an implicit process signal in a policy-gradient method is not the same as a supervised PRM dataset. The page keeps those distinctions visible.

When local metadata lacks official links, entries stay in the curated list as `needs_search`. That is deliberate: process supervision has many fast-moving papers and near-duplicate names, so a clean atlas should mark uncertainty rather than promote a guessed repository or paper URL.

## How to read this category

- Identify the label granularity: step correctness, first-error position, rollout value, process reward, scalar trace score, or implicit credit assignment.
- Ask who or what labels the step: human annotator, final-answer verifier, Monte Carlo rollouts, judge model, code executor, or theorem prover.
- Check whether the PRM is used for training, reranking, search, evaluation, or diagnosis; these uses have different failure modes.
- Avoid equating a fluent chain-of-thought score with faithful reasoning unless the paper audits verifier robustness and reward hacking.

## Must-read starter set

| Paper | Year | Why start here | Link status |
|---|---:|---|---|
| [Let's Verify Step by Step](https://arxiv.org/abs/2305.20050) (2023) · 🟡 partial | 2023 | Landmark process-supervision dataset for step-level correctness labels in mathematical reasoning. | linked |
| [Math-Shepherd](https://arxiv.org/abs/2312.08935) (2024) · 🟡 partial | 2024 | Monte-Carlo-style process signal reference for step supervision. | linked |
| [OmegaPRM: Improve Mathematical Reasoning in Language Models by Automated Process Supervision](https://arxiv.org/abs/2406.06592) (2024) · 🟡 partial | 2024 | Automated process-supervision recipe that uses search to locate first errors and generate PRM training signals without human labels. | linked |
| [One Token to Fool LLM-as-a-Judge](https://arxiv.org/abs/2507.08794) (2025) · 🟡 partial | 2025 | Verifier-attack paper showing trivial cue tokens can flip judge verdicts. | linked |
| [TinyV: Reducing False Negatives in Verification Improves RL for LLM Reasoning](https://arxiv.org/abs/2505.14625) (2025) · 🟡 partial | 2025 | Lightweight verifier aimed at recovering false negatives from rule-based math verifiers during RL training. | linked |
| [Self-consistency improves chain of thought reasoning in language models](https://arxiv.org/abs/2203.11171) (2023) · 🟡 partial | 2023 | Introduces sampling-and-voting over reasoning paths, a precursor to pass@k, verifier selection, and test-time compute views. | linked |
| [DeepMath-103K](https://arxiv.org/abs/2504.11456) (2025) · 🟡 partial | 2025 | Math release highlighted for verifier pinning and decontamination. | linked |
| OpenR1-Math-220k (2025) · 🟡 partial | 2025 | Open R1 math dataset/reproduction asset with large-scale math questions and reasoning traces; read it through lineage, verifier, and filtering fields. | linked |
| [Direct preference optimization: Your language model is secretly a reward model](https://arxiv.org/abs/2305.18290) (2023) · 🟡 partial | 2023 | Preference-learning objective that shows how comparison data can train policy behavior without an explicit reward-model deployment step. | linked |

## Promoted linked entries

This section only includes entries with at least one official artifact link and a non-seed local description. BibTeX-seeded records stay visible in the queue below until a curator checks primary sources and writes paper-specific metadata.

### 🧑‍🏫 Step-level human labels

- **[Let's Verify Step by Step](https://arxiv.org/abs/2305.20050)**
  <sub>2023 · arXiv · 🪜 process supervision · 🧪 verifier reward · 📦 data release · ⚖️ judgment required · 🧮 programmatic · 🪜 step level, process reward · 🎯 process supervision, reward modeling · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2305.20050) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Landmark process-supervision dataset for step-level correctness labels in mathematical reasoning.
- **[Math-Shepherd](https://arxiv.org/abs/2312.08935)**
  <sub>2024 · arXiv · 🪜 process supervision · 🧪 verifier reward · 🧮 programmatic · 🪜 step level, process reward · 🎯 process supervision, reward modeling · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2312.08935) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Monte-Carlo-style process signal reference for step supervision.
- **[Direct preference optimization: Your language model is secretly a reward model](https://arxiv.org/abs/2305.18290)**
  <sub>2023 · NeurIPS · 🧭 survey background · ⚖️ judgment required · 🪜 pairwise preference · 🎯 preference learning · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2305.18290) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Preference-learning objective that shows how comparison data can train policy behavior without an explicit reward-model deployment step.

### 🎲 Rollout values and automated process signals

- **[OmegaPRM: Improve Mathematical Reasoning in Language Models by Automated Process Supervision](https://arxiv.org/abs/2406.06592)**
  <sub>2024 · arXiv · 🪜 process supervision · 🧪 verifier reward · 🏗️ construction recipe · 🧮 programmatic · 🔀 mixed · 🪜 step level, process reward · 🎯 process supervision, reward modeling · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2406.06592) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Automated process-supervision recipe that uses search to locate first errors and generate PRM training signals without human labels.

### 🧪 PRM benchmarks and robustness

- **[One Token to Fool LLM-as-a-Judge](https://arxiv.org/abs/2507.08794)**
  <sub>2025 · arXiv · 🧯 audit failure · 🧪 verifier reward · ⚖️ judgment required · 🪜 scalar reward · 🎯 evaluation, reward modeling · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2507.08794) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Verifier-attack paper showing trivial cue tokens can flip judge verdicts.
- **[TinyV: Reducing False Negatives in Verification Improves RL for LLM Reasoning](https://arxiv.org/abs/2505.14625)**
  <sub>2025 · arXiv · 🧪 verifier reward · 🧯 audit failure · 🏗️ construction recipe · 🧮 programmatic · ⚖️ judgment required · 🪜 answer level, scalar reward · 🎯 rlvr, reward modeling · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2505.14625) · [🐙 Code](https://github.com/uw-nsl/TinyV) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Lightweight verifier aimed at recovering false negatives from rule-based math verifiers during RL training.
- **[Self-consistency improves chain of thought reasoning in language models](https://arxiv.org/abs/2203.11171)**
  <sub>2023 · ICLR · 🧭 survey background · 📈 scaling study · 🔀 mixed · 🪜 answer level · 🎯 evaluation, test time compute · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2203.11171) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Introduces sampling-and-voting over reasoning paths, a precursor to pass@k, verifier selection, and test-time compute views.
- **[DeepMath-103K](https://arxiv.org/abs/2504.11456)**
  <sub>2025 · arXiv · 📦 data release · 🧮 programmatic · 🪜 answer level · 🎯 sft, rlvr · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2504.11456) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Math release highlighted for verifier pinning and decontamination.
- **OpenR1-Math-220k**
  <sub>2025 · Hugging Face / GitHub · 📦 data release · 🏗️ construction recipe · 🧮 programmatic · 🪜 answer level · 🎯 sft, distillation · 🟡 partial</sub>
  [🐙 Code](https://github.com/huggingface/open-r1) · [🤗 Hugging Face](https://huggingface.co/datasets/open-r1/OpenR1-Math-220k) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Open R1 math dataset/reproduction asset with large-scale math questions and reasoning traces; read it through lineage, verifier, and filtering fields.

## Needs-search / metadata queue

These records are intentionally separated from the starter set. They are useful bibliography leads, but the atlas should not promote them until official links and paper-specific notes are added.

- **[ProcessBench: Identifying Process Errors in Mathematical Reasoning](https://arxiv.org/abs/2412.06559)**
  <sub>2024 · arXiv · 🧰 benchmark · 🪜 process supervision · 🧪 verifier reward · ⚖️ judgment required · 🧮 programmatic · 🪜 step level · 🎯 evaluation, process supervision · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2412.06559) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[PRMBench: A fine-grained and challenging benchmark for process-level reward models](https://arxiv.org/abs/2501.03124)**
  <sub>2025 · arXiv · 🧰 benchmark · 🧪 verifier reward · 🪜 process supervision · ⚖️ judgment required · 🔀 mixed · 🪜 step level, process reward · 🎯 evaluation, reward modeling · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2501.03124) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **Rewarding progress: Scaling automated process verifiers for LLM reasoning**
  <sub>2024 · arXiv preprint · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **Math-Shepherd: Verify and reinforce LLMs step-by-step without human annotations**
  <sub>2023 · ACL · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **PRIME: Process reinforcement through implicit rewards**
  <sub>2025 · arXiv preprint · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[Beyond Correctness: Harmonizing Process and Outcome Rewards through RL Training (PROF)](https://arxiv.org/abs/2509.03403)**
  <sub>2025 · arXiv preprint arXiv:2509.03403 · 🧭 survey background · ❔ unknown · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2509.03403) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **Process reward models for code reasoning**
  <sub>2025 · unknown · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **Qwen2.5-Math-PRM**
  <sub>2025 · arXiv preprint · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[GRPO is Secretly a Process Reward Model](https://arxiv.org/abs/2509.21154)**
  <sub>2025 · arXiv preprint arXiv:2509.21154 · 🧭 survey background · ❔ unknown · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2509.21154) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **Improve mathematical reasoning in language models by automated process supervision**
  <sub>2024 · arXiv preprint · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[WebArena: A realistic web environment for building autonomous agents](https://arxiv.org/abs/2307.13854)**
  <sub>2023 · ICLR · 🧰 benchmark · 🌐 agent environment · 🌐 environmental · 🪜 full episode · 🎯 evaluation, agent training · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2307.13854) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[An Imperfect Verifier is Good Enough: Learning with Noisy Rewards](https://arxiv.org/abs/2604.07666)**
  <sub>2026 · arXiv preprint arXiv:2604.07666 · 🧭 survey background · ❔ unknown · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2604.07666) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[CoVerRL: Breaking the Consensus Trap in Label-Free Reasoning via Generator-Verifier Co-Evolution](https://arxiv.org/abs/2603.17775)**
  <sub>2026 · arXiv preprint arXiv:2603.17775 · 🧭 survey background · ❔ unknown · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2603.17775) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **Solving math word problems with process- and outcome-based feedback**
  <sub>2022 · arXiv preprint · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.

## Open questions

- When does a process reward model add signal beyond a strong outcome verifier plus search?
- How should PRM datasets annotate uncertainty when human labels disagree about a step?
- Can process rewards scale to agent trajectories where state transitions are long and partially observable?
- What diagnostics reveal that a PRM is rewarding trace style rather than causal progress?

## Related docs

- [06_verifiers_and_rewards.md](../docs/06_verifiers_and_rewards.md)
- [03_reasoning_data_objects.md](../docs/03_reasoning_data_objects.md)
- [04_data_quality.md](../docs/04_data_quality.md)
- [08_scaling_and_test_time_compute.md](../docs/08_scaling_and_test_time_compute.md)

## Related cards

- [verifier_card_template.md](../cards/verifier_card_template.md)
- [rubric_reward_release_card.md](../cards/examples/rubric_reward_release_card.md)

## Back to map

- [📚 Paper atlas README](README.md)
- [🌟 Repository README](../README.md)
