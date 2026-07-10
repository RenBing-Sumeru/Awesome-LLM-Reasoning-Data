<!-- entry_id: rstar-coder-2025 -->
<!-- card_type: releases -->
# rStar-Coder: Scaling Competitive Code Reasoning with a Large-Scale Verified Dataset

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=rstar-coder-2025&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=rstar-coder-2025&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=rstar-coder-2025&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L4_carded
> Status: partial
> Category: instruction_demonstration_rationale_data, programmatically_verifiable_outcome_data, process_trace_supervision_data, data_construction_open_release_recipes, training_usage_optimization_objectives, scaling_rlvr_test_time_compute
> Links: [NeurIPS paper](https://papers.nips.cc/paper_files/paper/2025/hash/54e847e1dffc87a8063844b149148557-Abstract-Conference.html) · [Dataset](https://huggingface.co/datasets/microsoft/rStar-Coder) · [Project repository](https://github.com/microsoft/rStar)

## TL;DR

rStar-Coder releases competitive-programming problems, long reasoning traces, executable solutions, and test cases produced through a multi-stage synthetic-data pipeline.

Expert-written problems seed synthetic problem generation; generated test inputs and candidate solutions are executed; mutually agreeing solutions establish output labels; passing long-CoT solutions are packaged for SFT; problem-and-testcase records are packaged for RLVR.

The release remains only partially reproducible. The five public configurations do not directly reconstruct the paper's stated 580K question-solution mixture, `synthetic_sft` cannot be robustly joined to the synthetic testcase configuration, per-row original source URLs are absent, and upstream source terms are not mapped to individual records.

## 1. What is this work?

- Year / venue: 2025 · NeurIPS 2025 Main Conference.
- Atlas role: data release, construction recipe, verifier/reward resource, and scaling study.
- Domains: code, competitive programming, and algorithmic reasoning.
- Verification contract: program execution against input-output tests.
- Current status: partial.

The proceedings describe 418K competition-level problems, 580K long-reasoning solutions, and tests of varying difficulty. The Microsoft release divides artifacts into five configurations rather than publishing one manifest corresponding directly to that mixture.

## 2. What data object does it expose?

The five train-only configurations are:

- `synthetic_sft`: `question`, `seed_question`, `seed_source`, `response`, `code`; no stable `question_id`, linked tests, or verification flags.
- `synthetic_rl`: `question_id`, `question`, `seed_question`, `seed_source`.
- `synthetic_rl_testcase`: `question_id`, `question`, serialized `inputs`, and `outputs`.
- `seed_sft`: `question_id`, `question`, `starter_code`, `response`, `code`, `verified`, `is_passed`; it is not uniformly restricted to passing solutions.
- `seed_testcase`: `question_id`, `question`, `starter_code`, `inputs`, `outputs`, `is_synthesized`, `test_case_type`, `func_name`, and `class_name`.

A reusable record may require original source, seed and oracle solution, generator prompt/model revision, input constraints and validators, candidate reasoning/code, tests and accepted outputs, agreement threshold, verification status, decontamination decision, configuration, and revision. The release preserves `seed_source` at platform level but not original per-row URLs; mapping to the exact paper training mixture is unknown.

## 3. What is the verifier / reward / judge / environment?

For seed problems with oracle solutions, generated inputs are passed to an oracle, and candidate code must execute successfully and match all retained outputs. This is not uniform across `seed_sft`: when no QWQ-32B candidate passes, generated seed solutions can still be retained.

For synthetic problems, QWQ-32B generates 16 candidate reasoning-and-code solutions. Candidates run on at least 50 shared inputs; complete output sets are grouped by agreement; sufficiently supported outputs are accepted; matching implementations pass; and a fastest passing solution is selected for part of SFT packaging. The normal agreement threshold is 60%, lowered to 40% for Codeforces-derived problems rated above 1600.

The native signal is pass/fail execution over retained tests, with agreement constructing expected outputs for synthetic problems. Risks include correlated candidate bugs, a sub-majority hard-problem threshold, incomplete tests and validators, environment-sensitive false negatives, test overfitting, and a fastest-solution selection objective beyond semantic correctness. Exact runtime, dependency, timeout, resource-limit, and sandbox pins are unknown.

## 4. How is the data constructed?

Seeds come from TACO, APPS, CodeContests, CodeContests-Python-Submission, OpenR1 Codeforces, USACO 2011–2023, and IOI 2002–2023. The paper reports 57,215 collected seeds reduced to 37,754 unique problems with reference solutions.

- GPT-4o generates synthetic problems.
- GPT-4o and DeepSeek-V3 generate test-input and validation utilities.
- QWQ-32B generates long-reasoning candidate solutions and code.
- Oracle programs generate expected seed outputs where available.

The pipeline filters seeds, synthesizes problems, produces constraint-aware inputs at multiple scales, generates 16 candidates, executes them on shared tests, groups output sets, applies agreement thresholds, selects passing implementations, and removes benchmark overlap. It reports 1,565,632 synthetic candidates, 380,560 retained synthetic problems, 16 solutions per problem, and at least 50 inputs per problem.

Decontamination removes 16-gram overlaps against HumanEval, HumanEval+, MBPP, MBPP+, LiveCodeBench, and USACO 2025. Per-benchmark removals and residual semantic overlap are not reported. Exact teacher revisions, prompts, decoding, retries, and cost remain unknown.

The dataset declares CC BY 4.0, but that does not resolve the rights and attribution requirements of every upstream platform. The linked repository is MIT; that license must not be assumed to cover the separate NeurIPS supplement or all data content.

## 5. How can it enter post-training?

For SFT and distillation, the paper trains Qwen2.5-Coder-Instruct 1.5B, 7B, and 14B models with six epochs, AdamW, batch size 96, 16K maximum sequence length, cosine decay from `4e-5`, FlashAttention-2, and DeepSpeed. Official rStar-Coder checkpoints are not linked, so score reproduction requires retraining.

The synthetic and seed RL/testcase configurations expose problems and executable tests for RLVR. The paper does not report an evaluated rStar-Coder RL result, so reusers must distinguish RL-ready data from a paper-validated RL recipe.

Scaling depends on seed mix, synthetic variants, generator and decoding, candidate count, test count and scale, agreement threshold, validator quality, accepted-solution rule, SFT mixture, model size, sequence length, and execution limits. Teacher-token and monetary budgets are unknown.

## 6. What should readers audit?

- Can a public manifest reconstruct the exact 580K paper mixture?
- How do 418K problems, the appendix's 480K value, and current release counts reconcile?
- Can `synthetic_sft` be joined to synthetic RL/testcase records?
- Are `verified` and `is_passed` interpreted correctly for every `seed_sft` row?
- Which failed or unverified seed solutions were retained?
- Are original URLs and upstream terms preserved per record?
- Which exact GPT-4o, DeepSeek-V3, and QWQ-32B revisions, prompts, parameters, retries, and costs were used?
- Are generated constraints and validators faithful?
- Can agreeing candidates share systematic bugs, especially at 40%?
- Does fastest-solution selection reward brittle code?
- Are runtimes, timeouts, memory, sandboxing, and network isolation pinned?
- What are contamination removal counts and residual overlap?
- Are training, verifier-calibration, and evaluation separated?
- Can scores be reproduced without checkpoints, and is the supplement licensed?

## 7. What is missing or risky?

- No manifest reconstructs the stated 580K mixture; headline and appendix counts conflict with release counts.
- All five configurations are train-only.
- `synthetic_sft` lacks `question_id`, testcase linkage, and verification flags.
- Original source URLs, source-license matrix, teacher revisions, and decoding settings are absent.
- Mutual agreement can amplify correlated errors; the hard-problem threshold is below a majority.
- `seed_sft` is not uniformly verifier-passing.
- Generated tests may miss edge cases; fastest-solution selection adds another objective.
- No verifier-calibration split or official model checkpoints are linked.
- Execution-environment pins and decontamination diagnostics are unknown.
- The dataset exceeds 480GB and some test arrays are serialized as JSON strings.
- Supplement license is unknown; CC BY 4.0 does not replace upstream provenance review.

## 8. Why it matters for post-training reasoning data

rStar-Coder shows how difficult code-reasoning data can be built as a linked system:

`competition seed → source filtering → problem synthesis → test generation → candidate long-CoT generation → execution → agreement-based labeling → solution selection → decontamination → SFT/RL packaging`

It also shows why "verified dataset" is not a binary property. Verification strength depends on test coverage, validator correctness, candidate independence, threshold choice, execution environment, and whether every released subset is actually restricted to passing examples.

## 9. Links and citation

- NeurIPS proceedings: [https://papers.nips.cc/paper_files/paper/2025/hash/54e847e1dffc87a8063844b149148557-Abstract-Conference.html](https://papers.nips.cc/paper_files/paper/2025/hash/54e847e1dffc87a8063844b149148557-Abstract-Conference.html)
- arXiv: [https://arxiv.org/abs/2505.21297](https://arxiv.org/abs/2505.21297)
- Microsoft dataset: [https://huggingface.co/datasets/microsoft/rStar-Coder](https://huggingface.co/datasets/microsoft/rStar-Coder)
- NeurIPS supplement: [https://papers.nips.cc/paper_files/paper/2025/file/54e847e1dffc87a8063844b149148557-Supplemental-Conference.zip](https://papers.nips.cc/paper_files/paper/2025/file/54e847e1dffc87a8063844b149148557-Supplemental-Conference.zip)
- Project repository: [https://github.com/microsoft/rStar](https://github.com/microsoft/rStar)

- Data ID: `rstar-coder-2025`
- Citation status: verified
- Confidence: medium
- Dataset license declaration: CC BY 4.0
- DOI: null
- Exact paper-mixture manifest: unknown
- Official model checkpoints: null

Yifei Liu, Li Lyna Zhang, Yi Zhu, Bingcheng Dong, Xudong Zhou, Ning Shang, Fan Yang, Cheng Li, and Mao Yang. 2025. "rStar-Coder: Scaling Competitive Code Reasoning with a Large-Scale Verified Dataset." NeurIPS 2025.
