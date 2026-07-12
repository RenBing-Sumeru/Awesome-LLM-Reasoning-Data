# Paper Card: Smaller, Weaker, Yet Better: Training LLM Reasoners via Compute-Optimal Sampling

> **One-sentence review:** Shows that more samples from a weaker, cheaper generator can produce better filtered reasoning-training data under a fixed budget.
> **Reading priority:** must read
> **Paper type:** scaling study / construction recipe paper
> **Best for:** Readers interested in math / test time compute.
> **Confidence:** high
> **Year/source:** 2025 · ICLR 2025 Poster
> **Authors:** Hritik Bansal, Arian Hosseini, Rishabh Agarwal, Vinh Q. Tran, Mehran Kazemi
> **Institutions:** Google DeepMind · University of California, Los Angeles · Mila
> **Links:** [Paper](https://arxiv.org/abs/2408.16737) · [OpenReview](https://openreview.net/forum?id=3OyaXFQuDl)
> **Ask the Atlas:** [Explain](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=smaller-weaker-yet-better-training-llm-reasoners-via-compute-optimal-sampling-2025&mode=explain) · [Audit](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=smaller-weaker-yet-better-training-llm-reasoners-via-compute-optimal-sampling-2025&mode=audit) · [Compare](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=smaller-weaker-yet-better-training-llm-reasoners-via-compute-optimal-sampling-2025&mode=compare)

---

## 1. Problem: What question is this paper trying to answer?

MATH and GSM8K training questions with reference final answers.

The reusable object is per-question candidate reasoning sets with final answers, correctness filters, generator identity, and compute- or price-matched budget records. Study of how candidate-set size, generator cost, filtering, diversity, and false positives shape synthetic reasoning data under fixed budgets.

## 2. Core Idea: What is the paper's main contribution?

Shows that more samples from a weaker, cheaper generator can produce better filtered reasoning-training data under a fixed budget.

Gemma2-9B, Gemma2-27B, Gemini-1.5-Flash, or Gemini-1.5-Pro samples complete reasoning solutions. The feedback contract is: final-answer matching is the default selector; Gemini models serve as judges in the no-ground-truth setting. The terminal condition is: retain a sampled reasoning trace when its final answer matches the reference or is accepted by the designated judge.

## 3. Method: How does it work?

Gemma2-9B versus 27B and Gemini-1.5-Flash versus Pro. compare 27B:9B at 1:3 and 10:30 samples per question; compare Pro:Flash at 1:35 by August 2024 output-token price, with a five-Flash-sample cheaper setting. remove candidates whose final answer fails the reference check; compare no filtering and LM-as-a-judge when references are unavailable.

The resulting record contains per-question candidate reasoning sets with final answers, correctness filters, generator identity, and compute- or price-matched budget records. The reported use is sft, distillation, evaluation.

## 4. Evidence: Why should we believe it?

Cheaper-generator data raises coverage/diversity and improves three training settings despite higher FPR; ablations cover equal count, mixed pools, diversity, and no-gold judging.

## 5. Novelty: What is new compared with prior work?

Compared with single-path generation, best-of-N, and outcome-only filtering, the paper contributes this change: Shows that more samples from a weaker, cheaper generator can produce better filtered reasoning-training data under a fixed budget.

The reusable novelty is the paper-specific connection between generation, selection or verification, and the retained reasoning trace; generic sampling, search, SFT, or final-answer evaluation remain upstream components.

## 6. Limitations: What are the weaknesses or hidden assumptions?

Final-answer filtering admits false-positive reasoning, and weaker generators exhibit a higher measured false-positive rate. Parameter count approximates generation FLOPs and API price approximates proprietary-model compute only coarsely. The August 2024 Pro-to-Flash price ratio is time-dependent and should not be treated as a universal compute ratio. Higher coverage and diversity may add more bad traces when no reliable verifier is available.

Reproduction also depends on split policy (benchmark training sets generate fine-tuning data; standard held-out benchmark splits evaluate students.), decontamination (inherited benchmark and generator-pretraining contamination is not fully resolved.), and license provenance (paper is public; no official generated dataset or code artifact is linked.).

## 7. Usefulness: How can I use this paper?

It makes sampling budget a first-class part of synthetic reasoning-data quality rather than treating teacher strength as the only variable.

For reuse, preserve question, generator_model, candidate_solution, final_answer, correctness_label, sample_count, estimated_flops_or_price, coverage, diversity, false_positive_rate, together with model/version, split, stopping rule, and total compute.

## 8. Reading Notes: What should I remember?

- Sampling protocol: compare 27B:9B at 1:3 and 10:30 samples per question; compare Pro:Flash at 1:35 by August 2024 output-token price, with a five-Flash-sample cheaper setting.
- Inference budget: decoder FLOP proxy for open models and output-token price proxy for proprietary Gemini models; evaluation also reports maj@1,4,8,16.
- Rollout count: 35
- Temperature: 0.7
- Feedback contract: final-answer matching is the default selector; Gemini models serve as judges in the no-ground-truth setting.
- Remaining checks: needs_review: no official generated-data artifact; preserve FLOP-matched versus price-matched distinctions

## 9. Citation

Temporary citation, to be replaced by official BibTeX after human review:

```bibtex
@misc{smaller_weaker_yet_better_training_llm_reasoners_via_compute_optimal_sampling_2025,
  title = {Smaller, Weaker, Yet Better: Training LLM Reasoners via Compute-Optimal Sampling},
  author = {Hritik Bansal and Arian Hosseini and Rishabh Agarwal and Vinh Q. Tran and Mehran Kazemi},
  year = {2025},
  howpublished = {ICLR 2025 Poster}
}
```
