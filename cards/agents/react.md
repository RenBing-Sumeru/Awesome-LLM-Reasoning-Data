<!-- entry_id: react-synergizing-reasoning-and-acting-in-language-models-2023 -->
<!-- card_type: agents -->
# ReAct: Synergizing reasoning and acting in language models

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=react-synergizing-reasoning-and-acting-in-language-models-2023&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=react-synergizing-reasoning-and-acting-in-language-models-2023&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=react-synergizing-reasoning-and-acting-in-language-models-2023&mode=compare)
<!-- ask_atlas:end -->

<!-- track: 🔁 Rollout / Search / TTC Trace (Track 05) · 🌐 Environment & Agent Trajectories (Track 06) · 🏗️ Construction & Open Releases (Track 08) · 🎯 Training Usage & Objectives (Track 09) · 🧰 Benchmarks & Evaluation (Track 11) -->
> Subfield: ⏱️ Test-time compute logs

> Curation level: L5_audit_ready

> Links: [📄 Paper](https://arxiv.org/abs/2210.03629) · [🏛️ OpenReview](https://openreview.net/forum?id=WE_vluYUL-X) · [🐙 Code](https://github.com/ysymyth/ReAct) · [🌐 Project](https://react-lm.github.io/)

## TL;DR

ReAct interleaves reasoning traces with task-specific actions so models can update plans from external observations.

It is a foundational agent-data pattern: the training/evaluation record is not just an answer but a trajectory of thought-like notes, actions, observations, and final response.

## 1. What is this work?

- Year / venue: 2023 · ICLR.
- Atlas role: agent_environment, construction_recipe.
- Domains: agents, tools, reasoning-acting.
- Current status: verified.
- Why it belongs: Agent-environment recipe entry for interleaving reasoning and action trajectories.

## 2. What data object does it expose?

- Prompt/source: few-shot examples for question answering, fact verification, ALFWorld, and WebShop-style tasks.
- Trace/action author: language model emits interleaved reasoning notes and environment actions.
- Answer/artifact format: trajectory containing reasoning note, action, observation, and final answer or task completion.
- Process fields:
- task state, action string, observation, reasoning note, final answer, success indicator.
- Environment or substrate: Wikipedia API, embodied/web shopping environments, and task-specific simulators.
- Terminal predicate: trajectory solves the task under the environment or answer metric.

## 3. What is the verifier / reward / judge / environment?

- Verification contract: environmental, mixed.
- Recorded verifier/reward/environment: environment success, answer correctness, or task-specific evaluation.
- Supervision granularity: state_action_level, full_episode.

## 4. How is the data constructed?

- Base model: prompted large language models in the original experiments.
- Teacher: few-shot trajectory exemplars demonstrate reasoning-action format.
- Generator: model samples interleaved reasoning and action steps.
- Filtering rule: successful trajectories can be retained for later agent training or imitation.
- Sampling protocol: task, environment, and action-space details should be pinned with each trajectory.
- Inference budget: number of allowed actions and retries changes success rates.
- Optimizer/scaffold: prompted agent loop with environment observations.

## 5. How can it enter post-training?

Recorded training/evaluation use: agent_training, evaluation, test_time_compute.

Use it as a trajectory schema for agent training, evaluation, and trace-level audit.

## 6. What should readers audit?

- Which environments and tasks produce the trajectories?
- Are trajectories split by task instance and environment version?
- Can examples leak task-specific answers or demonstrations?
- Are actions, observations, and reasoning notes logged separately?
- Are licenses, data versions, and evaluation prompts pinned before reuse?

## 7. What is missing or risky?

- Reasoning notes can rationalize bad actions.
- Environment wrappers can change task difficulty.
- Few-shot exemplars may encode brittle action formats.

## 8. Why it matters for post-training reasoning data

It is a foundational agent-data pattern: the training/evaluation record is not just an answer but a trajectory of thought-like notes, actions, observations, and final response.

The reusable lesson is to keep the feedback-bearing record attached to the claim: prompt, trace, label, preference, reward, verifier, environment state, benchmark item, or audit evidence.

## 9. Links and citation

[📄 Paper](https://arxiv.org/abs/2210.03629) · [🏛️ OpenReview](https://openreview.net/forum?id=WE_vluYUL-X) · [🐙 Code](https://github.com/ysymyth/ReAct) · [🌐 Project](https://react-lm.github.io/)

- Data ID: `react-synergizing-reasoning-and-acting-in-language-models-2023`
- Citation status: verified
- Confidence: high
