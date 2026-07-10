<!-- entry_id: qwen3-coder-2025 -->
<!-- card_type: recipes -->
# Qwen3-Coder

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=qwen3-coder-2025&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=qwen3-coder-2025&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=qwen3-coder-2025&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L4_carded
> Category: instruction_demonstration_rationale_data, programmatically_verifiable_outcome_data, environment_agent_trajectory_data, data_construction_open_release_recipes, training_usage_optimization_objectives, scaling_rlvr_test_time_compute, frontier_reports_data_disclosure_ledger
> Links: [Project](https://qwenlm.github.io/blog/qwen3-coder/) · [Code](https://github.com/QwenLM/Qwen3-Coder) · [HF](https://huggingface.co/Qwen/Qwen3-Coder-480B-A35B-Instruct)

## TL;DR

Qwen3-Coder is Qwen's open agentic coding model release and tooling stack for code generation, tool use, browser use, and long-horizon software tasks.

It matters for Track 01 because the public report describes how coding behavior is serialized into code solutions, tool-call traces, and agent episodes before being optimized with code RL and long-horizon agent RL.

## 1. What is this work?

- Year / venue: 2025 · Qwen official blog, GitHub, and Hugging Face model card.
- Atlas role: model_report, construction_recipe, agent_environment.
- Domains: code, software engineering, tools, browser use, agentic coding.
- Current status: verified primary artifacts; L4 carded.
- Why it belongs: Qwen3-Coder is a frontier-style public disclosure for how code corpora, synthetic execution data, tool-use tasks, and environment feedback are assembled into a coding-agent post-training stack.

## 2. What data object does it expose?

- Prompt/source: coding tasks, software-engineering tasks, tool-use tasks, browser-use tasks, and long-context repository or agent tasks disclosed at report level rather than released as a complete training dataset.
- Trace/action author: Qwen training and post-training pipeline; downstream traces can be generated through Qwen Code and compatible agent scaffolds.
- Answer/artifact format: code answer, patch, command/tool call, browser/tool observation, or multi-step agent trajectory.
- Process fields: task prompt, repository or environment context, code/action output, execution result, benchmark outcome, and agent trajectory state when tools are involved.
- Environment or substrate: code execution, terminal/browser/tool environments, Qwen Code CLI, and agentic coding benchmarks.
- Terminal predicate: code passes tests, task succeeds in the environment, or benchmark evaluator accepts the generated solution.

## 3. What is the verifier / reward / judge / environment?

- Verification contract: programmatic, environmental, mixed.
- Recorded verifier/reward/environment: unit tests and execution checks for code, environment/task success for agentic tasks, and benchmark suites for software engineering and browsing.
- Supervision granularity: answer_level for code completions and full_episode/state_action_level for tool or browser trajectories.
- Reuse risk: public reporting does not expose the full verifier implementation, failure traces, train/test overlap checks, or exact environment reset rules.

## 4. How is the data constructed?

- Base model: Qwen3-Coder-480B-A35B uses a 480B-parameter MoE model with 35B active parameters; the official model card reports 256k native context and 1M-token extrapolation with YaRN.
- Teacher: not fully disclosed.
- Generator: Qwen's code-data and agent-data pipeline, including synthetic execution data and post-training over coding and agent tasks.
- Filtering rule: official reporting describes code RL and long-horizon agent RL; reusable records should be treated as selected by tests, execution feedback, environment success, and benchmark signals.
- Sampling protocol: not fully disclosed; agentic rollouts depend on the scaffold, task environment, and inference budget.
- Inference budget: not fully disclosed; official reporting says long-horizon agent RL infrastructure scales to 20,000 independent environments.
- Optimizer/scaffold: Qwen Code CLI and Agentic Coding platform integrate the model with repository context, terminal actions, and tool execution.

## 5. How can it enter post-training?

Recorded training/evaluation use: sft, rlvr, agent_training, evaluation.

Use this card as a disclosure ledger, not as a reusable open dataset. It helps readers identify which objects a future open release should expose: coding prompt, repository state, action/tool call, execution result, terminal predicate, rejected attempts, split, and benchmark contamination audit.

## 6. What should readers audit?

- Which parts of the training corpus are code, natural language, tool-use, browser-use, or repository-agent tasks.
- Whether code RL rewards come from public tests, hidden tests, generated tests, or execution heuristics.
- Whether long-horizon agent tasks pin environment state, dependencies, browser state, repository commit, and terminal predicates.
- Whether benchmark claims separate model quality from scaffold, tool, search, and inference-budget effects.
- Whether public datasets or evaluation tasks leak into training or post-training mixtures.
- Whether Qwen Code defaults are comparable with other agent scaffolds.

## 7. What is missing or risky?

- The full training data mixture, filtering policy, rejected trajectories, and decontamination checks are not released.
- Code benchmarks can be gamed by weak or leaked tests.
- Agent trajectories can become non-replayable if repository state, dependency versions, browser state, or tools are not pinned.
- The model card and blog are strong enough for L4 curation, but not enough for L5 audit-ready reuse.

## 8. Why it matters for post-training reasoning data

Qwen3-Coder makes code reasoning look like an agent data problem: the useful record is not only final code, but also context, action, tool result, verifier output, and environment success. That is why this card is Track 01 primary with cross-tags into programmatic verification, environment trajectories, construction recipes, and training objectives.

## 9. Links and citation

[Project](https://qwenlm.github.io/blog/qwen3-coder/) · [Code](https://github.com/QwenLM/Qwen3-Coder) · [HF](https://huggingface.co/Qwen/Qwen3-Coder-480B-A35B-Instruct)

- Data ID: `qwen3-coder-2025`
- Citation status: verified
- Confidence: high
