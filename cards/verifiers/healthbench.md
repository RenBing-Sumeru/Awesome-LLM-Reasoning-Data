<!-- entry_id: healthbench-2025 -->
<!-- card_type: verifiers -->
# HealthBench: Evaluating Large Language Models Towards Improved Human Health

<!-- ask_atlas:start -->
> Ask about this paper: [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=healthbench-2025&mode=explain) - [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=healthbench-2025&mode=audit) - [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=healthbench-2025&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L5_audit_ready
> Category: preference_reward_feedback_data, judgment_rubric_domain_expert_data, benchmarks_evaluation_surfaces, audit_failure_contamination_verifier_attacks
> Links: [arXiv](https://arxiv.org/abs/2505.08775) - [Code/Data](https://github.com/openai/simple-evals) - [Project](https://openai.com/index/healthbench/)

## TL;DR

HealthBench evaluates healthcare conversations with physician-written, conversation-specific rubrics across safety, accuracy, communication, and health-domain contexts.

It is a high-stakes rubric benchmark. Its scores should not be treated as proof that a model is clinically safe, and its rubrics should remain attached to every reused record.

## 1. What is this work?

HealthBench is a health conversation benchmark with physician-written rubrics and a model-based grader.

For this atlas, it is a verifier card: the reusable object is the conversation, candidate response, physician criterion, criterion weight, and criterion-met label.

## 2. What data object does it expose?

The relevant record can include:

- conversation,
- candidate response,
- rubric criterion,
- criterion weight,
- criterion-met label,
- aggregate score,
- theme,
- axis.

The release reports 5,000 realistic multi-turn health conversations and 48,562 unique rubric criteria.

## 3. What is the verifier / reward / judge / environment?

The verifier is mixed: physician-written criteria are graded by GPT-4.1 as a model-based grader.

The terminal predicate is whether the response satisfies medically relevant criteria for the conversation.

## 4. How is the data constructed?

Reported construction details include:

- create multi-turn health conversations through synthetic generation and human adversarial testing,
- have 262 physicians write conversation-specific rubrics,
- evaluate candidate responses with rubric criteria and weights,
- provide HealthBench Consensus and HealthBench Hard variants,
- expose the benchmark through the simple-evals scaffold.

Unknown locally: generation temperature and exact inference budget for all evaluated models.

## 5. How can it enter post-training?

Recorded use:

- evaluation,
- reward_modeling,
- safety_alignment.

Use it as a rubric benchmark or grader-calibration reference. Do not collapse it into a single scalar without preserving criterion-level labels.

## 6. What should readers audit?

- High-stakes medical rubrics can miss rare but severe harms.
- GPT-4.1 grading must be calibrated against physician judgment.
- Aggregate scores can hide medically critical failures.
- Public benchmark exposure creates leakage and overfitting risk.
- Benchmark performance is not evidence of clinical readiness.

## 7. What is missing or risky?

- Exact simple-evals commit and benchmark files.
- License and usage constraints for the benchmark.
- Whether HealthBench, HealthBench Consensus, or HealthBench Hard is being used.
- Criterion-level labels and weights.
- Whether local model outputs are graded with the same grader and prompt.
- Decontamination and canary-handling assumptions.

## 8. Why it matters for post-training reasoning data

HealthBench shows how domain-expert rubrics become reward/verifier data. In high-risk settings, the rubric and its provenance matter as much as the score.

## 9. Links and citation

- Institution: OpenAI.
- Official links: arXiv, DOI, OpenAI project page, and simple-evals code/data.
- arXiv: https://arxiv.org/abs/2505.08775
- DOI: https://doi.org/10.48550/arXiv.2505.08775
- Code/Data: https://github.com/openai/simple-evals
- Project: https://openai.com/index/healthbench/
- Hugging Face: null
- Data ID: `healthbench-2025`
- Citation status: verified
- Confidence: high