<!-- entry_id: judging-llm-as-a-judge-with-mt-bench-and-chatbot-arena-2023 -->
<!-- card_type: verifiers -->
# Judging LLM-as-a-judge with MT-Bench and Chatbot Arena

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=judging-llm-as-a-judge-with-mt-bench-and-chatbot-arena-2023&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=judging-llm-as-a-judge-with-mt-bench-and-chatbot-arena-2023&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=judging-llm-as-a-judge-with-mt-bench-and-chatbot-arena-2023&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L5_audit_ready
> Category: judgment_required_rubrics_safety_domain, benchmarks_evaluation, audit_failure_contamination_verifier_attacks, foundations_instruction_preference_alignment
> Links: [📄 Paper](https://arxiv.org/abs/2306.05685) · [🏛️ Venue](https://papers.nips.cc/paper_files/paper/2023/hash/91f18a1287b398d378ef22505bf41832-Abstract-Datasets_and_Benchmarks.html) · [🏛️ OpenReview](https://openreview.net/forum?id=uccHPGDlao) · [🐙 Code](https://github.com/lm-sys/FastChat/tree/main/fastchat/llm_judge)

## TL;DR

MT-Bench and Chatbot Arena establish LLM-as-a-judge and pairwise human-preference evaluation surfaces for open-ended chat models.

It is the standard cautionary reference for judge data: scalable model judges are useful, but position, verbosity, self-enhancement, and limited-reasoning biases must be audited.

## 1. What is this work?

- Year / venue: 2023 · NeurIPS Datasets and Benchmarks.
- Atlas role: benchmark, verifier_reward, audit_failure.
- Domains: llm-as-judge, preference-evaluation, chat.
- Current status: verified.
- Why it belongs: Verifier and benchmark entry for LLM-as-a-judge, MT-Bench, Chatbot Arena, and preference-evaluation data.

## 2. What data object does it expose?

- Prompt/source: MT-Bench multi-turn questions, expert votes, arena conversations, and pairwise human preferences.
- Trace/action author: models produce chat responses; model judges or humans compare/evaluate them.
- Answer/artifact format: model response, judge score, pairwise preference, or arena battle outcome.
- Process fields:
- question, turn, model identity, response, judge prompt template, score, preference label, bias-control setting.
- Environment or substrate: offline judge harness and crowd-sourced arena platform.
- Terminal predicate: response is preferred or receives higher judge score under the evaluation protocol.

## 3. What is the verifier / reward / judge / environment?

- Verification contract: judgment_required, mixed.
- Recorded verifier/reward/environment: strong model judge and human preference comparisons.
- Supervision granularity: answer_level, pairwise_preference, scalar_reward.

## 4. How is the data constructed?

- Base model: evaluated chat assistants and judge models vary.
- Teacher: human preferences and strong model judges.
- Generator: candidate chat models answer MT-Bench and arena prompts.
- Filtering rule: bias-mitigation protocol controls position and other judge artifacts.
- Sampling protocol: pin judge model, prompt template, response order, and aggregation method.
- Inference budget: judge calls and multiple comparisons affect reliability and cost.
- Optimizer/scaffold: FastChat LLM judge package and arena evaluation pipeline.

## 5. How can it enter post-training?

Recorded training/evaluation use: evaluation, reward_modeling, preference_learning, audit.

Use it when building or auditing judge-based reward/evaluation data for open-ended reasoning and chat tasks.

## 6. What should readers audit?

- Which prompts and conversation types are represented?
- Are judge-tuning examples separated from evaluation prompts?
- Could models train on MT-Bench questions or arena transcripts?
- Which judge model and prompt template produced each score?
- Are licenses, data versions, and evaluation prompts pinned before reuse?

## 7. What is missing or risky?

- Judge scores can be position-biased.
- Verbose answers can be over-rewarded.
- A model judge may share weaknesses with the evaluated model.

## 8. Why it matters for post-training reasoning data

It is the standard cautionary reference for judge data: scalable model judges are useful, but position, verbosity, self-enhancement, and limited-reasoning biases must be audited.

The reusable lesson is to keep the feedback-bearing record attached to the claim: prompt, trace, label, preference, reward, verifier, environment state, benchmark item, or audit evidence.

## 9. Links and citation

[📄 Paper](https://arxiv.org/abs/2306.05685) · [🏛️ Venue](https://papers.nips.cc/paper_files/paper/2023/hash/91f18a1287b398d378ef22505bf41832-Abstract-Datasets_and_Benchmarks.html) · [🏛️ OpenReview](https://openreview.net/forum?id=uccHPGDlao) · [🐙 Code](https://github.com/lm-sys/FastChat/tree/main/fastchat/llm_judge)

- Data ID: `judging-llm-as-a-judge-with-mt-bench-and-chatbot-arena-2023`
- Citation status: verified
- Confidence: high
