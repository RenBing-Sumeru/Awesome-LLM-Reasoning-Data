# Paper Card: HyperTree Proof Search for Neural Theorem Proving

> **One-sentence review:** AlphaZero-style HyperTree Proof Search learns online from kernel-checked AND/OR proof searches across formal theorem-proving environments.
> **Reading priority:** worth reading
> **Paper type:** construction recipe / process supervision / scaling study paper
> **Best for:** Readers interested in math / reasoning.
> **Confidence:** high
> **Year/source:** 2022 · NeurIPS
> **Authors:** Guillaume Lample, Marie-Anne Lachaux, Thibaut Lavril, Xavier Martinet, Amaury Hayat, Gabriel Ebner, Aurélien Rodriguez, Timothée Lacroix
> **Institutions:** Meta AI
> **Links:** [Paper](https://arxiv.org/abs/2205.11491) · [DOI](https://doi.org/10.48550/arXiv.2205.11491) · [Code](https://github.com/facebookresearch/Evariste) · [Data](https://github.com/facebookresearch/Evariste/tree/main/formal) · [Project](https://openreview.net/forum?id=J4pX8Q8cxHH)
> **Ask the Atlas:** [Explain](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=hypertree-proof-search-for-neural-theorem-proving-2022&mode=explain) · [Audit](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=hypertree-proof-search-for-neural-theorem-proving-2022&mode=audit) · [Compare](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=hypertree-proof-search-for-neural-theorem-proving-2022&mode=compare)

---

## 1. Problem: What question is this paper trying to answer?

Formal proofs branch into tactics that may create several dependent subgoals, so an ordinary sequence or single-goal tree loses essential structure. HTPS asks how a neural prover can search this hyper-tree and learn online from previously unsuccessful theorem searches.

The reusable object is formal theorem; accessible premises; proof state; tactic action; multiple child subgoals; AND/OR hyper-tree edge; policy/value estimate; kernel response; solved/failed proof; online-training example. AlphaZero-style HyperTree Proof Search learns online from kernel-checked AND/OR proof searches across formal theorem-proving environments.

## 2. Core Idea: What is the paper's main contribution?

AlphaZero-style HyperTree Proof Search learns online from kernel-checked AND/OR proof searches across formal theorem-proving environments.

A transformer proposes tactics and estimates proof progress. HTPS expands hyper-tree nodes whose tactics may create several subgoals, propagates solved and value information, and converts proof-search experience into online policy/value updates. The feedback contract is: Metamath, Lean, or equivalent formal kernels check tactics and proof closure; HTPS policy/value estimates and AlphaZero-style search statistics choose expansions. The terminal condition is: Task answer acceptance or formal proof closure under the reported verifier.

## 3. Method: How does it work?

A transformer proposes tactics and estimates proof progress. HTPS expands hyper-tree nodes whose tactics may create several subgoals, propagates solved and value information, and converts proof-search experience into online policy/value updates. Tree search over partial reasoning or proof states; pin the exact node, rollout, token, and verifier-call budget per experiment. Retain or prefer trajectories and steps supported by search values and the paper's verifier contract.

The resulting record contains formal theorem; accessible premises; proof state; tactic action; multiple child subgoals; AND/OR hyper-tree edge; policy/value estimate; kernel response; solved/failed proof; online-training example. The reported use is process supervision, preference learning, test time compute.

## 4. Evidence: Why should we believe it?

Reports gains across Metamath and Lean-style formal environments and ablates hyper-tree search and online learning; every accepted proof is replayable by the formal kernel.

## 5. Novelty: What is new compared with prior work?

Compared with single-path generation, best-of-N, and outcome-only filtering, the paper contributes this change: AlphaZero-style HyperTree Proof Search learns online from kernel-checked AND/OR proof searches across formal theorem-proving environments.

The reusable novelty is the paper-specific connection between generation, selection or verification, and the retained reasoning trace; generic sampling, search, SFT, or final-answer evaluation remain upstream components.

## 6. Limitations: What are the weaknesses or hidden assumptions?

The official repository explicitly says it does not run out of the box after internal dependencies were removed; most code is CC-BY-NC; no packaged full online trajectory corpus is supplied; formal-system versions and premise sets strongly affect replay. Search budget or selector quality can be mistaken for base-model capability.

Reproduction also depends on split policy (Use official experiment splits; verify construction/evaluation overlap before reuse.), decontamination (unknown), and license provenance (Mixed artifact licenses; verify paper, code, generated data, and upstream problem licenses independently.).

## 7. Usefulness: How can I use this paper?

Use it for AND/OR proof-tree schemas, kernel-grounded trajectory collection, online expert iteration, and comparison with flat best-first or whole-proof sampling.

For reuse, preserve formal theorem, accessible premises, proof state, tactic action, multiple child subgoals, AND/OR hyper-tree edge, policy/value estimate, kernel response, solved/failed proof, online-training example, together with model/version, split, stopping rule, and total compute.

## 8. Reading Notes: What should I remember?

- Sampling protocol: Tree search over partial reasoning or proof states; pin the exact node, rollout, token, and verifier-call budget per experiment.
- Inference budget: Varies by experiment and must be reported with results.
- Rollout count: needs review
- Temperature: needs review
- Feedback contract: Metamath, Lean, or equivalent formal kernels check tactics and proof closure; HTPS policy/value estimates and AlphaZero-style search statistics choose expansions.
- Remaining checks: human review of unresolved metadata

## 9. Citation

Temporary citation, to be replaced by official BibTeX after human review:

```bibtex
@misc{hypertree_proof_search_for_neural_theorem_proving_2022,
  title = {HyperTree Proof Search for Neural Theorem Proving},
  author = {Guillaume Lample and Marie-Anne Lachaux and Thibaut Lavril and Xavier Martinet and Amaury Hayat and Gabriel Ebner and Aurélien Rodriguez and Timothée Lacroix},
  year = {2022},
  howpublished = {NeurIPS}
}
```
