# Paper Card: rStar-Math: Small LLMs Can Master Math Reasoning with Self-Evolved Deep Thinking

> **One-sentence review:** MCTS, code execution, and a process preference model co-evolve policy traces and sibling-step preference data across four rounds.
> **Reading priority:** worth reading
> **Paper type:** construction recipe / process supervision / scaling study paper
> **Best for:** Readers interested in math / reasoning.
> **Confidence:** high
> **Year/source:** 2025 · arXiv
> **Authors:** Xinyu Guan, Li Lyna Zhang, Yifei Liu, Ning Shang, Youran Sun, Yi Zhu, Fan Yang, Mao Yang
> **Institutions:** Microsoft Research Asia
> **Links:** [Paper](https://arxiv.org/abs/2501.04519) · [DOI](https://doi.org/10.48550/arXiv.2501.04519) · [Code](https://github.com/microsoft/rStar/tree/rStar-math) · [Data](https://huggingface.co/datasets/ElonTusk2001/rstar_sft) · [Project](https://huggingface.co/datasets/ElonTusk2001/rstar_ppm)
> **Ask the Atlas:** [Explain](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=rstar-math-2025&mode=explain) · [Audit](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=rstar-math-2025&mode=audit) · [Compare](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=rstar-math-2025&mode=compare)

---

## 1. Problem: What question is this paper trying to answer?

Small language models need both stronger search and trustworthy intermediate selection, but superior-model distillation obscures where reasoning capability comes from. rStar-Math studies whether verified MCTS traces can bootstrap both a math policy and its process preference model.

The reusable object is math question; code-augmented reasoning step; executable snippet and result; MCTS parent/child relation; complete rollout; terminal answer; visit/value statistics; SFT trace; sibling preference pair; evolution round. MCTS, code execution, and a process preference model co-evolve policy traces and sibling-step preference data across four rounds.

## 2. Core Idea: What is the paper's main contribution?

MCTS, code execution, and a process preference model co-evolve policy traces and sibling-step preference data across four rounds.

The policy expands code-augmented chains in MCTS, execution and answer checks validate outcomes, and complete trees are converted into successful SFT trajectories plus sibling-step preference pairs for a process preference model. Policy and PPM are retrained and used in the next round. The feedback contract is: A code executor and final-answer checker provide grounded outcome signals; the learned process preference model ranks partial paths and guides later MCTS. The terminal condition is: Task answer acceptance or formal proof closure under the reported verifier.

## 3. Method: How does it work?

The policy expands code-augmented chains in MCTS, execution and answer checks validate outcomes, and complete trees are converted into successful SFT trajectories plus sibling-step preference pairs for a process preference model. Policy and PPM are retrained and used in the next round. Tree search over partial reasoning or proof states; pin the exact node, rollout, token, and verifier-call budget per experiment. Retain or prefer trajectories and steps supported by search values and the paper's verifier contract.

The resulting record contains math question; code-augmented reasoning step; executable snippet and result; MCTS parent/child relation; complete rollout; terminal answer; visit/value statistics; SFT trace; sibling preference pair; evolution round. The reported use is process supervision, preference learning, test time compute.

## 4. Evidence: Why should we believe it?

The official branch provides MCTS generation code, scripts that extract complete traces, SFT examples, and RM pairs, plus public rstar_sft and rstar_ppm datasets. The paper reports four rounds over hundreds of thousands of problems and large gains on MATH and AIME.

Interpret evidence under matched search and verifier-call budgets. Separate oracle coverage, post-selection accuracy, post-training policy improvement, and actual per-problem compute; they answer different questions.

## 5. Novelty: What is new compared with prior work?

Compared with single-path generation, best-of-N, and outcome-only filtering, the paper contributes this change: MCTS, code execution, and a process preference model co-evolve policy traces and sibling-step preference data across four rounds.

The reusable novelty is the paper-specific connection between generation, selection or verification, and the retained reasoning trace; generic sampling, search, SFT, or final-answer evaluation remain upstream components.

## 6. Limitations: What are the weaknesses or hidden assumptions?

Public SFT/PPM tables are derived views, not necessarily full tree logs; code execution can validate an accidental shortcut; NuminaMath and MetaMath lineage and licenses must be retained; results depend heavily on GPU/search budget and PPM calibration. Search budget or selector quality can be mistaken for base-model capability.

Reproduction also depends on split policy (Use official experiment splits; verify construction/evaluation overlap before reuse.), decontamination (unknown), and license provenance (Mixed artifact licenses; verify paper, code, generated data, and upstream problem licenses independently.).

## 7. Usefulness: How can I use this paper?

Use it as a reference architecture for tree-to-SFT and tree-to-preference conversion, iterative policy/verifier co-training, and compute-aware test-time deep thinking.

For reuse, preserve math question, code-augmented reasoning step, executable snippet and result, MCTS parent/child relation, complete rollout, terminal answer, visit/value statistics, SFT trace, sibling preference pair, evolution round, together with model/version, split, stopping rule, and total compute.

## 8. Reading Notes: What should I remember?

- Sampling protocol: Tree search over partial reasoning or proof states; pin the exact node, rollout, token, and verifier-call budget per experiment.
- Inference budget: Varies by experiment and must be reported with results.
- Rollout count: needs review
- Temperature: needs review
- Feedback contract: A code executor and final-answer checker provide grounded outcome signals; the learned process preference model ranks partial paths and guides later MCTS.
- Remaining checks: human review of unresolved metadata

## 9. Citation

Temporary citation, to be replaced by official BibTeX after human review:

```bibtex
@misc{rstar_math_2025,
  title = {rStar-Math: Small LLMs Can Master Math Reasoning with Self-Evolved Deep Thinking},
  author = {Xinyu Guan and Li Lyna Zhang and Yifei Liu and Ning Shang and Youran Sun and Yi Zhu and Fan Yang and Mao Yang},
  year = {2025},
  howpublished = {arXiv}
}
```
