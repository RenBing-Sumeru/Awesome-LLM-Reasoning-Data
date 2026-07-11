<!-- entry_id: v-star-training-verifiers-self-taught-reasoners-2024 -->
<!-- card_type: verifiers -->
# Paper Card: V-STaR: Training Verifiers for Self-Taught Reasoners

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=v-star-training-verifiers-self-taught-reasoners-2024&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=v-star-training-verifiers-self-taught-reasoners-2024&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=v-star-training-verifiers-self-taught-reasoners-2024&mode=compare)
<!-- ask_atlas:end -->

> **One-sentence assessment:** V-STaR turns both accepted and rejected self-generated solutions into iterative verifier data, but outcome-label noise, correlated preference pairs, and unreleased artifacts constrain reproducibility.
> **Reading priority:** Essential
> **Paper type:** Iterative self-training and outcome-verifier recipe
> **Knowledge categories:** Preference, Reward, and Feedback Data | Executable Code Feedback Data | Data Construction and Open Release Recipes | Scaling, RLVR, and Test-Time Compute
> **Best for:** Researchers studying rejection sampling, verifier refresh, and best-of-N reasoning
> **Confidence:** Medium
> **Year / Venue:** 2024 | COLM
> **Authors:** Arian Hosseini, Xingdi Yuan, Nikolay Malkin, Aaron Courville, Alessandro Sordoni, Rishabh Agarwal
> **Institutions:** unknown
> **Links:** [Paper](https://arxiv.org/abs/2402.06457) | [OpenReview](https://openreview.net/forum?id=stmqBSW2dV)

---

## 1. Problem: What question does this work address?

Self-training methods such as STaR and rejection-sampling fine-tuning improve a generator using correct self-generated solutions, but discard the much larger set of incorrect attempts. Separately trained outcome verifiers often learn from samples produced by a fixed generator, so their training distribution becomes stale as the generator changes. V-STaR asks whether correct and incorrect solutions can be retained together to refresh a verifier while the reasoner improves.

## 2. Core idea: What is the main contribution?

At every iteration, V-STaR samples solutions from the current generator and assigns binary outcome labels. Correct solutions augment the generator's SFT buffer; both correct and incorrect solutions enter the verifier buffer. For each problem, their Cartesian product becomes correct-versus-incorrect preference pairs used to train a DPO verifier. The final verifier scores and ranks multiple candidate solutions at test time.

## 3. Method: How does it work?

The method begins by fine-tuning a base model on original task data. It then samples 16 completions per query from the current generator in each of three iterations. GSM8K rationales are labeled by final-answer correctness, while MBPP programs are labeled by executing test cases. Only positive generations are added to generator SFT data. All labeled generations are preserved for verifier construction, and every correct completion can be paired with every incorrect completion for the same query.

The verifier is a LoRA-adapted language model trained with DPO rather than an ORM-style binary-classification head. Correct solutions are preferred and incorrect solutions are rejected. Experiments use LLaMA2 and CodeLLaMA at 7B and 13B scales. At inference, the verifier ranks candidates; the reported Best-of-64 protocol is estimated from 128 generated solutions per problem. Sampling temperature, exact checkpoint revisions, pair-balancing details beyond the stated Cartesian product, and decontamination are unknown.

## 4. Evidence: Why should we believe it?

V-STaR is trained on GSM8K and MBPP and evaluated in-domain as well as by transfer from GSM8K to a 150-problem numerical subset of MATH and from MBPP to HumanEval. The paper compares iterative V-STaR with SFT, STaR, one-iteration rejection fine-tuning, a fixed-generator verifier, a matched-budget one-iteration V-STaR baseline, ORM-style verification, and self-consistency. It reports improvements for both generator and verifier across iterations and shows DPO verifiers outperforming ORM-style verifiers on the same collected data.

The matched total generation budget of 48 completions per query helps isolate iterative collection from one-shot collection. Results also show Best-of-k saturation behavior and compare verifier ranking with majority voting. These experiments support the iterative recipe, but no official generated-data archive, implementation repository, or trained checkpoint was confirmed, so independent reproduction of the exact data distribution remains unresolved.

## 5. Novelty: What is new relative to prior work?

The key distinction is not merely training a verifier on positive and negative solutions. V-STaR refreshes that solution distribution as the generator improves, while simultaneously using correct traces for generator self-training. It also formulates outcome-verifier training as DPO over within-problem correct–incorrect pairs and compares this formulation directly with an ORM-style verifier.

## 6. Limitations: What are the weaknesses or hidden assumptions?

The native signal is outcome correctness, not step correctness. A math rationale can reach the expected final answer through invalid reasoning, and a program can pass available tests while being brittle or semantically wrong. Such false positives contaminate both generator and verifier data. False negatives are also possible when answer extraction rejects an equivalent math answer or tests omit valid program behaviors.

Cartesian-product pairing creates many correlated examples and may overweight problems according to their positive/negative sample counts. The generator and verifier share model families and self-generated data, making their errors correlated and potentially brittle under distribution shift. Verifier calibration is not the primary reported contract: scores are used for ranking, and Best-of-k gains depend strongly on the number and diversity of candidates. The paper does not provide official code, generated data, checkpoints, artifact licenses, or a decontamination report.

## 7. Uses: How can this work be used?

V-STaR is a blueprint for converting rejected reasoning attempts into preference supervision rather than deleting them. It can inform math and code self-training systems, studies of verifier refresh frequency, comparisons between DPO and classifier-style outcome models, and best-of-N test-time selection. For Track 8, it is especially useful as a data-construction contract: query, sampled trace, outcome label, iteration, generator-buffer decision, verifier-buffer decision, and pair-construction rule should all be logged together.

## 8. Reading notes: What should readers remember?

- Correct generations train the reasoner; correct and incorrect generations train the verifier.
- The verifier's native training object is a within-query correct–incorrect preference pair.
- GSM8K uses final-answer labels, while MBPP uses executable tests; neither provides process supervision.
- Three iterations with 16 samples each are compared with a matched one-shot budget of 48 samples.
- Best-of-64 performance is a joint property of the generator, verifier, and inference budget.
- Code, generated data, checkpoints, licenses, and decontamination remain unknown.

## 9. Citation

The following provisional BibTeX preserves the official arXiv identifier and verified COLM venue status; use the OpenReview export when a machine-readable official citation is required.

```bibtex
@inproceedings{hosseini2024vstar,
  title = {V-STaR: Training Verifiers for Self-Taught Reasoners},
  author = {Hosseini, Arian and Yuan, Xingdi and Malkin, Nikolay and Courville, Aaron and Sordoni, Alessandro and Agarwal, Rishabh},
  booktitle = {Conference on Language Modeling},
  year = {2024},
  eprint = {2402.06457},
  archivePrefix = {arXiv}
}
```
