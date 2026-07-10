<!-- entry_id: swe-bench-can-language-models-resolve-real-world-github-issues-2023 -->
<!-- card_type: agents -->
# SWE-bench: Can language models resolve real-world GitHub issues?

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=swe-bench-can-language-models-resolve-real-world-github-issues-2023&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=swe-bench-can-language-models-resolve-real-world-github-issues-2023&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=swe-bench-can-language-models-resolve-real-world-github-issues-2023&mode=compare)
<!-- ask_atlas:end -->

<!-- track: 🧮 Programmatic Verification (Track 03) · 🌐 Environment & Agent Trajectories (Track 06) · 🎯 Training Usage & Objectives (Track 09) · 🧰 Benchmarks & Evaluation (Track 11) -->
> Subfield: 💻 Code execution / unit-test data

> Curation level: L5_audit_ready

> Links: [📄 Paper](https://arxiv.org/abs/2310.06770) · [🏛️ OpenReview](https://openreview.net/forum?id=VTF8yNQM66) · [🐙 Code](https://github.com/swe-bench/SWE-bench) · [🌐 Project](https://www.swebench.com/original.html)

## TL;DR

SWE-bench turns real GitHub issues into repository-level repair tasks evaluated by applying patches and running tests.

It is the agent/environment anchor where the reasoning-data object includes repository state, issue text, actions, patches, and test-backed outcomes.

## 1. What is this work?

- Year / venue: 2023 · ICLR.
- Atlas role: benchmark, agent_environment.
- Domains: software_engineering, code.
- Current status: verified.
- Why it belongs: Core software-engineering benchmark for environmental reasoning data, replayable repository state, and patch-verification workflows.

## 2. What data object does it expose?

- Prompt/source: real GitHub issues and repository snapshots.
- Trace/action author: models or agents inspect files and produce patches.
- Answer/artifact format: code patch submitted against a specific repo state.
- Process fields: issue text, repository commit, file edits, test outcomes.
- Environment or substrate: software repository with dependency and test environment.
- Terminal predicate: patch resolves issue according to tests.

## 3. What is the verifier / reward / judge / environment?

- Verification contract: environmental and programmatic.
- Recorded verifier/reward/environment: repository checkout plus tests.
- Supervision granularity: full_episode and executable_artifact.

## 4. How is the data constructed?

- Base model: not applicable to benchmark release.
- Teacher: historical human issue fixes define target behavior.
- Generator: evaluated SWE agents produce patches.
- Filtering rule: issue/task extraction and test-based validation.
- Sampling protocol: repository tasks sampled from real projects.
- Inference budget: agent context, tool calls, and edit attempts matter.
- Optimizer/scaffold: benchmark environment for agent evaluation and data collection.

## 5. How can it enter post-training?

Recorded training/evaluation use: evaluation, agent_training.

Use it when the verifier is an environment, not a static answer key; record repository commit, dependency setup, and tests before comparing agents.

## 6. What should readers audit?

- Is the repository state pinned?
- Are tests sufficient to prevent superficial patches?
- Are dependencies and timeouts reproducible?
- Are failed trajectories preserved?
- Is task contamination from public GitHub history considered?

## 7. What is missing or risky?

- Tests may not fully capture issue resolution.
- Environment setup can be brittle.
- Public repository history can leak into training data.

## 8. Why it matters for post-training reasoning data

It is the agent/environment anchor where the reasoning-data object includes repository state, issue text, actions, patches, and test-backed outcomes.

The reusable lesson is to identify the feedback-bearing record: prompt, trace, label, preference, reward, verifier, environment state, benchmark item, or audit evidence.

## 9. Links and citation

[📄 Paper](https://arxiv.org/abs/2310.06770) · [🏛️ OpenReview](https://openreview.net/forum?id=VTF8yNQM66) · [🐙 Code](https://github.com/swe-bench/SWE-bench) · [🌐 Project](https://www.swebench.com/original.html)

- Data ID: `swe-bench-can-language-models-resolve-real-world-github-issues-2023`
- Citation status: verified
- Confidence: high
