# Paper Card: s1: Simple test-time scaling

> **One-sentence review:** Curates 1,000 difficult, diverse, high-quality long reasoning traces for SFT and controls inference compute through budget forcing.
> **Reading priority:** worth reading
> **Paper type:** construction recipe / data release / scaling study paper
> **Best for:** Readers interested in math / reasoning.
> **Confidence:** high
> **Year/source:** 2025 · arXiv
> **Authors:** Niklas Muennighoff, Zitong Yang, Weijia Shi, Xiang Lisa Li, Li Fei-Fei, Hannaneh Hajishirzi, Luke Zettlemoyer, Percy Liang, Emmanuel Candès, Tatsunori Hashimoto
> **Institutions:** Stanford University · University of Washington · Allen Institute for AI
> **Links:** [Paper](https://arxiv.org/abs/2501.19393) · [DOI](https://doi.org/10.48550/arXiv.2501.19393) · [Code](https://github.com/simplescaling/s1) · [Data](https://huggingface.co/datasets/simplescaling/s1K) · [Hugging Face](https://huggingface.co/simplescaling/s1-32B)
> **Ask the Atlas:** [Explain](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=s1-simple-test-time-scaling-2025&mode=explain) · [Audit](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=s1-simple-test-time-scaling-2025&mode=audit) · [Compare](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=s1-simple-test-time-scaling-2025&mode=compare)

---

## 1. Problem: What question is this paper trying to answer?

Official benchmark and training tasks described in the primary paper.

The reusable object is question, source dataset, teacher reasoning trace, difficulty score, diversity cluster, quality decision, selected SFT record, token budget, forced stop or Wait extension, and final answer. Curates 1,000 difficult, diverse, high-quality long reasoning traces for SFT and controls inference compute through budget forcing.

## 2. Core Idea: What is the paper's main contribution?

Curates 1,000 difficult, diverse, high-quality long reasoning traces for SFT and controls inference compute through budget forcing.

Start from a larger question pool, score and filter for difficulty, diversity, and quality, obtain long reasoning traces, retain s1K, fine-tune Qwen2. The feedback contract is: teacher-generated trace quality, benchmark answer correctness, and curation criteria for difficulty, diversity, and quality. The terminal condition is: A candidate reaches the paper's accepted correctness or selection condition.

## 3. Method: How does it work?

The policy or teacher model generates candidate reasoning traces. Multiple candidates, continuations, or search states are generated and retained with their feedback-bearing lineage. Start from a larger question pool, score and filter for difficulty, diversity, and quality, obtain long reasoning traces, retain s1K, fine-tune Qwen2.5-32B-Instruct, then force shorter or longer thinking at test time.

The resulting record contains question, source dataset, teacher reasoning trace, difficulty score, diversity cluster, quality decision, selected SFT record, token budget, forced stop or Wait extension, and final answer. The reported use is sft, distillation, test time compute.

## 4. Evidence: Why should we believe it?

Ablations test the three curation criteria and budget forcing; the released repository includes data, training, evaluation, and model artifacts.

The evidence should be read as a joint measurement of generator quality, feedback quality, data selection, and compute. Comparisons are only interpretable when sample counts, verifier calls, token limits, and policy checkpoints are aligned. The paper's reported results support the stated mechanism, but they do not automatically establish that every retained rationale is faithful.

## 5. Novelty: What is new compared with prior work?

Compared with single-path generation, best-of-N, and outcome-only filtering, the paper contributes this change: Curates 1,000 difficult, diverse, high-quality long reasoning traces for SFT and controls inference compute through budget forcing.

The reusable novelty is the paper-specific connection between generation, selection or verification, and the retained reasoning trace; generic sampling, search, SFT, or final-answer evaluation remain upstream components.

## 6. Limitations: What are the weaknesses or hidden assumptions?

teacher trace lineage and filtering choices dominate a very small dataset. appending Wait may teach or exploit a formatting artifact rather than general search. token budget is an incomplete proxy for actual inference compute and useful reasoning.

Reproduction also depends on split policy (Use official train/evaluation splits and record any curation pool separately.), decontamination (Paper-specific; do not infer decontamination beyond explicit disclosures.), and license provenance (Check each official paper, code, data, and model artifact separately before reuse.).

## 7. Usefulness: How can I use this paper?

s1 isolates a deliberately small trace set and a simple decoding intervention, making training-data scale and inference-budget effects easier to study together.

For reuse, preserve problem or prompt, candidate rollout or reasoning state, feedback or verifier signal, sampling or search metadata, retention or selection decision, final answer or terminal outcome, together with model/version, split, stopping rule, and total compute.

## 8. Reading Notes: What should I remember?

- Sampling protocol: Multiple candidates, continuations, or search states are generated and retained with their feedback-bearing lineage.
- Inference budget: Experiment-specific; preserve sample count, search expansions, token budget, and verifier calls when reproducing.
- Rollout count: needs review
- Temperature: needs review
- Feedback contract: teacher-generated trace quality, benchmark answer correctness, and curation criteria for difficulty, diversity, and quality
- Remaining checks: human review of unresolved metadata

## 9. Citation

Temporary citation, to be replaced by official BibTeX after human review:

```bibtex
@misc{s1_simple_test_time_scaling_2025,
  title = {s1: Simple test-time scaling},
  author = {Niklas Muennighoff and Zitong Yang and Weijia Shi and Xiang Lisa Li and Li Fei-Fei and Hannaneh Hajishirzi and Luke Zettlemoyer and Percy Liang and Emmanuel Candès and Tatsunori Hashimoto},
  year = {2025},
  howpublished = {arXiv}
}
```
