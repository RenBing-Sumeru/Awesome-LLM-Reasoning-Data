<!-- entry_id: compassjudger-2-towards-generalist-judge-model-via-verifiable-rewards-2025 -->
<!-- card_type: verifiers -->
# CompassJudger-2: Towards Generalist Judge Model via Verifiable Rewards
<!-- ask_atlas:start -->
> Ask about this paper: [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=compassjudger-2-towards-generalist-judge-model-via-verifiable-rewards-2025&mode=explain) - [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=compassjudger-2-towards-generalist-judge-model-via-verifiable-rewards-2025&mode=audit) - [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=compassjudger-2-towards-generalist-judge-model-via-verifiable-rewards-2025&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L4_carded
> Category: preference_reward_feedback_data, benchmarks_evaluation_surfaces, judgment_rubric_domain_expert_data, training_usage_optimization_objectives
> Links: [arXiv](https://arxiv.org/abs/2507.09104) - [Code](https://github.com/open-compass/CompassJudger) - [Model](https://huggingface.co/opencompass/CompassJudger-2-7B-Instruct)

## TL;DR

CompassJudger-2 trains generalist judge models with reconstructed judge data, reward data, synthetic knowledge/chat data, verifiable rewards, rejection sampling, and policy-gradient optimization.

It is a judge-model recipe and release. The standalone JudgerBenchV2/training data artifact remains null in local metadata unless an official release URL is identified.

## 1. What is this work?

The paper extends CompassJudger by using verifiable rewards and rejection sampling to train judge models that handle more judgment scenarios.

## 2. What data object does it expose?

The relevant record can include:

- prompt,
- response,
- response_a,
- response_b,
- rubric or instruction,
- judgment reasoning,
- prediction,
- verifiable reward,
- rejection-sampled judgment,
- score,
- choice,
- critique.

## 3. What is the verifier / reward / judge / environment?

The verifier combines rule-based rewards over final prediction correctness with model-generated judge outputs.

The supervision is mixed: programmatic checks for verifiable tasks, model-judged outputs, and judgment-required evaluation behavior.

## 4. How is the data constructed?

The reported recipe includes:

- split public judge data by an October 2024 cutoff,
- reconstruct outdated judgments,
- verify predictions against human-labeled ground truth,
- use Qwen2.5-72B-Instruct to synthesize and filter judgments,
- apply rejection sampling to keep correct reasoning paths,
- train with a margin policy-gradient loss.

Unknown locally: exact training rollout counts, prompt templates, decontamination, and standalone JudgerBenchV2 data URL.

## 5. How can it enter post-training?

Recorded use:

- reward_modeling,
- evaluation.

Use it as a judge-model training recipe or verifier component candidate. Do not treat benchmark performance as proof that the judge is reliable for open-ended preference rewards.

## 6. What should readers audit?

- Verifiable rewards can bias coverage toward automatically checkable tasks.
- JudgerBenchV2 may not cover open-ended preference ambiguity.
- Rejection sampling can hide generator-specific artifacts.
- Exact training mixture and prompt templates need artifact-level audit.

## 7. What is missing or risky?

- JudgerBenchV2 data artifact and license.
- HF model license.
- Prompt templates and output parser.
- Exact training data mixture and rollout counts.
- Decontamination against local evaluation suites.
- Whether verifiable tasks match the intended judge domain.

## 8. Why it matters for post-training reasoning data

It connects judge-model training with verifiable reward supervision, while showing a clear audit risk: what is easy to verify may dominate what the judge learns.

## 9. Links and citation

- Institution: Shanghai AI Laboratory; Tsinghua University; OpenCompass.
- Official links: arXiv, GitHub, and Hugging Face model; standalone data artifact is null.
- arXiv: https://arxiv.org/abs/2507.09104
- DOI: https://doi.org/10.48550/arXiv.2507.09104
- Code: https://github.com/open-compass/CompassJudger
- Data: null
- Model: https://huggingface.co/opencompass/CompassJudger-2-7B-Instruct
- Data ID: `compassjudger-2-towards-generalist-judge-model-via-verifiable-rewards-2025`
- Citation status: verified
- Confidence: high
