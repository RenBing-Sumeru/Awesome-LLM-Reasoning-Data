<!-- entry_id: permutative-preference-alignment-from-listwise-ranking-of-human-judgments-2024 -->
<!-- card_type: recipes -->
# Permutative Preference Alignment from Listwise Ranking of Human Judgments

<!-- ask_atlas:start -->
> Ask about this paper: [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=permutative-preference-alignment-from-listwise-ranking-of-human-judgments-2024&mode=explain) - [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=permutative-preference-alignment-from-listwise-ranking-of-human-judgments-2024&mode=audit) - [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=permutative-preference-alignment-from-listwise-ranking-of-human-judgments-2024&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L4_carded
> Category: preference_reward_feedback_data, training_usage_optimization_objectives
> Links: [arXiv](https://arxiv.org/abs/2410.04346) - [Data](https://huggingface.co/datasets/NDCG-alignment/ListUltraFeedback)

## TL;DR

PPA trains from multi-response list rankings using an NDCG-style objective and constructs ListUltraFeedback from UltraFeedback and SimPO-derived responses.

The released listwise object is useful, but reward-model labels and NDCG weighting need audit before reuse.

## 1. What is this work?

Permutative Preference Alignment is an offline listwise preference-alignment recipe. It argues that pairwise Bradley-Terry-style objectives can miss ordering information when many responses exist for the same prompt.

## 2. What data object does it expose?

The relevant record is:

- prompt,
- candidate response list,
- ordinal reward labels,
- response rank order,
- NDCG surrogate weight.

The paper describes ListUltraFeedback, combining four UltraFeedback responses and five generated responses from the fine-tuned Llama3-8B model used in SimPO.

## 3. What is the verifier / reward / judge / environment?

The verifier is ArmoRM assigning reward labels to the multi-response list. The paper also uses RLHFlow scoring and pair-preference models for evaluation.

This is model-judged listwise feedback. It should not be described as raw human ranking unless a specific human-labeled subset is being discussed.

## 4. How is the data constructed?

The reported recipe includes:

- collect multiple responses for the same UltraFeedback prompt,
- score responses with ArmoRM,
- select two highest-scored responses,
- select two lowest-scored responses,
- randomly draw four responses from the remaining pool,
- train with an NDCG-based listwise preference objective.

Recorded base models include Qwen2-0.5B, Mistral-7B, and Llama3.1-8B. Unknown in the local metadata: temperature, inference budget, license, and decontamination.

## 5. How can it enter post-training?

Recorded use:

- preference learning.

Use PPA/ListUltraFeedback to study ordinal and listwise preference data. Do not use AlpacaEval, MT-Bench, or reward-model win rates as data-quality proof.

## 6. What should readers audit?

- ArmoRM labels can encode reward-model-specific bias.
- Randomly selected middle responses may change list difficulty.
- NDCG weighting choices determine which ranking mistakes matter most.
- UltraFeedback and SimPO-derived response provenance must be separated.
- Evaluation with reward models can overlap with the construction signal.

## 7. What is missing or risky?

- Exact Hugging Face dataset revision.
- Whether the dataset URL is `NDCG-alignment/ListUltraFeedback`.
- ArmoRM checkpoint and scoring settings.
- Response counts and selection rule per prompt.
- License and provenance of UltraFeedback and SimPO-derived responses.
- Decontamination against target evaluation prompts.

## 8. Why it matters for post-training reasoning data

PPA makes multi-response preference lists a concrete training object. It is useful for reasoning-data curation whenever one prompt has many candidate traces and a rank order matters more than a single pair.

## 9. Links and citation

- Institution: University of Texas at Austin; University of Michigan, Ann Arbor; University of Florida.
- arXiv: https://arxiv.org/abs/2410.04346
- Data: https://huggingface.co/datasets/NDCG-alignment/ListUltraFeedback
- DOI: https://doi.org/10.48550/arXiv.2410.04346
- Code: unknown
- Data ID: `permutative-preference-alignment-from-listwise-ranking-of-human-judgments-2024`
- Citation status: verified
- Confidence: medium
