# Paper Card: Reinforced Self-Training (ReST) for Language Modeling

> **One-sentence review:** Alternates policy-generated offline batches with offline RL improvement, making generated candidates and their quality signals the training record.
> **Reading priority:** worth reading
> **Paper type:** construction recipe paper
> **Best for:** Readers interested in machine translation / post training / synthetic data.
> **Confidence:** high
> **Year/source:** 2023 · arXiv
> **Authors:** Caglar Gulcehre, Tom Le Paine, Srivatsan Srinivasan, Ksenia Konyushkova, Lotte Weerts, Abhishek Sharma, Aditya Siddhant, Alex Ahern, Miaosen Wang, Chenjie Gu, Wolfgang Macherey, Arnaud Doucet, Orhan Firat, Nando de Freitas
> **Institutions:** Google DeepMind · Google Research
> **Links:** [Paper](https://arxiv.org/abs/2308.08998) · [DOI](https://doi.org/10.48550/arXiv.2308.08998)
> **Ask the Atlas:** [Explain](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=reinforced-self-training-rest-for-language-modeling-2023&mode=explain) · [Audit](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=reinforced-self-training-rest-for-language-modeling-2023&mode=audit) · [Compare](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=reinforced-self-training-rest-for-language-modeling-2023&mode=compare)

---

## 1. Problem: What question is this paper trying to answer?

Machine-translation inputs used to generate an offline batch from the current policy.

The reusable object is Input-candidate-output records carrying quality/reward information for offline policy improvement. Foundational grow-and-improve recipe for treating policy-generated candidates and their quality signals as an offline reusable training batch.

## 2. Core Idea: What is the paper's main contribution?

Alternates policy-generated offline batches with offline RL improvement, making generated candidates and their quality signals the training record.

The current LM policy generates candidate translations during each grow phase. The feedback contract is: Quality signals derived from the paper's alignment/evaluation setup; the exact reward implementation should be retained with any reuse. The terminal condition is: A candidate is retained for the offline batch under the reported quality-filtering and improvement procedure.

## 3. Method: How does it work?

The current policy generates an offline batch in the grow phase. Alternate grow phases that collect a fixed policy batch with improve phases that reuse it offline. Offline RL updates reweight or select generated examples according to their reported reward/quality signal.

The resulting record contains Input-candidate-output records carrying quality/reward information for offline policy improvement. The reported use is preference learning.

## 4. Evidence: Why should we believe it?

Official evidence note: Official arXiv primary source pinned; no official reusable data artifact was identified.

Review the reported results against the exact task surface and feedback strength. Separate candidate coverage, verifier or selector precision, accepted-trajectory quality, post-training policy gain, and total generation/search/environment cost. Citation status is verified with high confidence.

## 5. Novelty: What is new compared with prior work?

Compared with single-path generation, best-of-N, and outcome-only filtering, the paper contributes this change: Alternates policy-generated offline batches with offline RL improvement, making generated candidates and their quality signals the training record.

The reusable novelty is the paper-specific connection between generation, selection or verification, and the retained reasoning trace; generic sampling, search, SFT, or final-answer evaluation remain upstream components.

## 6. Limitations: What are the weaknesses or hidden assumptions?

Quality filtering can collapse output diversity when only high-scoring candidates are retained. Offline reuse can amplify reward-model or metric bias across iterations. Reported gains should not be generalized from translation to verifiable reasoning without an equivalent feedback contract.

Reproduction also depends on split policy (Reported machine-translation train/evaluation splits.), decontamination (unknown), and license provenance (unknown).

## 7. Usefulness: How can I use this paper?

It is an early, clear reference for separating the generation batch, quality signal, and offline optimizer when interpreting self-training claims.

For reuse, preserve source_input, candidate_generation, quality_signal, grow_iteration, offline_update_batch, together with model/version, split, stopping rule, and total compute.

## 8. Reading Notes: What should I remember?

- Sampling protocol: Alternate grow phases that collect a fixed policy batch with improve phases that reuse it offline.
- Inference budget: Offline sample-generation budget per grow phase; exact counts vary by experiment.
- Rollout count: needs review
- Temperature: needs review
- Feedback contract: Quality signals derived from the paper's alignment/evaluation setup; the exact reward implementation should be retained with any reuse.
- Remaining checks: needs_metadata: pin the exact reward implementation and release terms before dataset reuse

## 9. Citation

Temporary citation, to be replaced by official BibTeX after human review:

```bibtex
@misc{reinforced_self_training_rest_for_language_modeling_2023,
  title = {Reinforced Self-Training (ReST) for Language Modeling},
  author = {Caglar Gulcehre and Tom Le Paine and Srivatsan Srinivasan and Ksenia Konyushkova and Lotte Weerts and Abhishek Sharma and Aditya Siddhant and Alex Ahern and Miaosen Wang and Chenjie Gu and Wolfgang Macherey and Arnaud Doucet and Orhan Firat and Nando de Freitas},
  year = {2023},
  howpublished = {arXiv}
}
```
