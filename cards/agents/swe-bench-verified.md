<!-- entry_id: introducing-swe-bench-verified-2024 -->
<!-- card_type: agents -->
# Introducing SWE-bench Verified

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=introducing-swe-bench-verified-2024&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=introducing-swe-bench-verified-2024&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=introducing-swe-bench-verified-2024&mode=compare)
<!-- ask_atlas:end -->

<!-- track: 🧮 Programmatic Verification (Track 03) · 🔁 Rollout / Search / TTC Trace (Track 05) · 🌐 Environment & Agent Trajectories (Track 06) · 🎯 Training Usage & Objectives (Track 09) · 🧰 Benchmarks & Evaluation (Track 11) · 🧯 Audit & Failure Modes (Track 13) -->
> Subfield: 🧰 Programmatic benchmarks

> Curation level: L5_audit_ready

> Links: [📄 Paper](https://openai.com/index/introducing-swe-bench-verified/) · [🏛️ Venue](https://www.swebench.com/verified.html) · [🐙 Code](https://github.com/swe-bench/SWE-bench) · [🗂️ Data](https://huggingface.co/datasets/princeton-nlp/SWE-bench_Verified)

## TL;DR

SWE-bench Verified is a human-filtered 500-instance subset of SWE-bench designed to reduce ambiguous, unsolvable, or incorrectly tested software-engineering tasks.

It is now a central coding-agent evaluation surface because the data object contains issue text, repository state, proposed patch, and test-backed success criteria.

## 1. What is this work?

- Year / venue: 2024 · OpenAI / SWE-bench report.
- Atlas role: benchmark, agent_environment, audit_failure.
- Domains: software-engineering, agents, unit-tests.
- Current status: verified.
- Why it belongs: Agent-environment benchmark entry for human-validated software-issue tasks and unit-test-backed evaluation.

## 2. What data object does it expose?

- Prompt/source: human-reviewed SWE-bench issue/PR pairs from real Python repositories.
- Trace/action author: agent models inspect repositories, edit code, and submit patches.
- Answer/artifact format: patch diff applied to a repository plus test execution results.
- Process fields:
- repository, issue, base commit, patch, FAIL_TO_PASS tests, PASS_TO_PASS tests, human validation notes.
- Environment or substrate: Dockerized repository checkout and unit-test harness.
- Terminal predicate: patch resolves the issue without breaking preserved tests.

## 3. What is the verifier / reward / judge / environment?

- Verification contract: environmental, programmatic.
- Recorded verifier/reward/environment: post-patch unit tests plus human filtering of task validity.
- Supervision granularity: full_episode, state_action_level.

## 4. How is the data constructed?

- Base model: evaluated coding agents and frontier models vary by leaderboard submission.
- Teacher: resolved GitHub pull requests and human validators.
- Generator: dataset curation filters original SWE-bench instances for clarity, solvability, and test validity.
- Filtering rule: human annotators remove ambiguous, unsolvable, or misleading tasks.
- Sampling protocol: pin benchmark split, repository versions, harness, and submission scaffold.
- Inference budget: agent step budget, tool access, and retries materially affect scores.
- Optimizer/scaffold: SWE-bench evaluation harness and agent scaffolds.

## 5. How can it enter post-training?

Recorded training/evaluation use: evaluation, agent_training, audit.

Use it as a coding-agent evaluation and audit benchmark, not as a simple answer-only code-generation dataset.

## 6. What should readers audit?

- Which repositories dominate the 500-task subset?
- Are tasks separated by repository, timestamp, and scaffold tuning use?
- Can agents train on public issue/PR pairs from the benchmark repositories?
- Which SWE-bench release and OpenAI collaboration notes define the task list?
- Are licenses, data versions, model checkpoints, and evaluation prompts pinned before reuse?

## 7. What is missing or risky?

- Leaderboard scores can depend strongly on scaffold design.
- Tests may not cover all acceptable patches.
- Public benchmark tasks can become training targets over time.

## 8. Why it matters for post-training reasoning data

It is now a central coding-agent evaluation surface because the data object contains issue text, repository state, proposed patch, and test-backed success criteria.

The reusable lesson is to keep the feedback-bearing record attached to the claim: prompt, trace, label, preference, reward, verifier, environment state, benchmark item, or audit evidence.

## 9. Links and citation

[📄 Paper](https://openai.com/index/introducing-swe-bench-verified/) · [🏛️ Venue](https://www.swebench.com/verified.html) · [🐙 Code](https://github.com/swe-bench/SWE-bench) · [🗂️ Data](https://huggingface.co/datasets/princeton-nlp/SWE-bench_Verified)

- Data ID: `introducing-swe-bench-verified-2024`
- Citation status: verified
- Confidence: high
