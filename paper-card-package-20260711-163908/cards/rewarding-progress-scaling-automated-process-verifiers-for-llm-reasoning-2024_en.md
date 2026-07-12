# Paper Card: Rewarding Progress: Scaling Automated Process Verifiers for LLM Reasoning

> **One-sentence review:** Defines process reward as prover-measured progress and trains Process Advantage Verifiers for more efficient search and online RL.
> **Reading priority:** worth reading
> **Paper type:** process supervision / verifier reward / scaling study paper
> **Best for:** Readers interested in math / reasoning.
> **Confidence:** high
> **Year/source:** 2024 · ICLR
> **Authors:** Amrith Setlur, Chirag Nagpal, Adam Fisch, Xinyang Geng, Jacob Eisenstein, Rishabh Agarwal, Alekh Agarwal, Jonathan Berant, Aviral Kumar
> **Institutions:** Google DeepMind · Google Research · Princeton University · Tel Aviv University
> **Links:** [Paper](https://arxiv.org/abs/2410.08146) · [DOI](https://doi.org/10.48550/arXiv.2410.08146)
> **Ask the Atlas:** [Explain](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=rewarding-progress-scaling-automated-process-verifiers-for-llm-reasoning-2024&mode=explain) · [Audit](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=rewarding-progress-scaling-automated-process-verifiers-for-llm-reasoning-2024&mode=audit) · [Compare](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=rewarding-progress-scaling-automated-process-verifiers-for-llm-reasoning-2024&mode=compare)

---

## 1. Problem: What question is this paper trying to answer?

Official benchmark and training tasks described in the primary paper.

The reusable object is problem, reasoning state before a step, proposed step, state after the step, prover rollout success estimates, process advantage target, PAV score, and search or RL outcome. Defines process reward as prover-measured progress and trains Process Advantage Verifiers for more efficient search and online RL.

## 2. Core Idea: What is the paper's main contribution?

Defines process reward as prover-measured progress and trains Process Advantage Verifiers for more efficient search and online RL.

Collect prover rollouts from adjacent reasoning states, estimate before/after success, form process-advantage labels, train PAVs, and use dense scores in beam search or online RL. The feedback contract is: progress is the change in future success probability before and after a step under a prover policy distinct from the base policy. The terminal condition is: A candidate reaches the paper's accepted correctness or selection condition.

## 3. Method: How does it work?

The policy or teacher model generates candidate reasoning traces. Multiple candidates, continuations, or search states are generated and retained with their feedback-bearing lineage. Collect prover rollouts from adjacent reasoning states, estimate before/after success, form process-advantage labels, train PAVs, and use dense scores in beam search or online RL.

The resulting record contains problem, reasoning state before a step, proposed step, state after the step, prover rollout success estimates, process advantage target, PAV score, and search or RL outcome. The reported use is reward modeling, rlvr, test time compute.

## 4. Evidence: Why should we believe it?

The paper reports over eight-point search accuracy gains over ORMs, 1.5–5× search compute efficiency, and 5–6× online-RL sample efficiency in its studied settings.

The evidence should be read as a joint measurement of generator quality, feedback quality, data selection, and compute. Comparisons are only interpretable when sample counts, verifier calls, token limits, and policy checkpoints are aligned. The paper's reported results support the stated mechanism, but they do not automatically establish that every retained rationale is faithful.

## 5. Novelty: What is new compared with prior work?

Compared with single-path generation, best-of-N, and outcome-only filtering, the paper contributes this change: Defines process reward as prover-measured progress and trains Process Advantage Verifiers for more efficient search and online RL.

The reusable novelty is the paper-specific connection between generation, selection or verification, and the retained reasoning trace; generic sampling, search, SFT, or final-answer evaluation remain upstream components.

## 6. Limitations: What are the weaknesses or hidden assumptions?

progress estimates inherit variance and bias from the chosen prover. a weak prover helps only when its errors complement the base policy. search and RL gains can be misattributed if rollout budgets and prover calls are omitted.

Reproduction also depends on split policy (Use official train/evaluation splits and record any curation pool separately.), decontamination (Paper-specific; do not infer decontamination beyond explicit disclosures.), and license provenance (Check each official paper, code, data, and model artifact separately before reuse.).

## 7. Usefulness: How can I use this paper?

The work argues that absolute prefix solvability is not the right process target; the useful signal is the step's marginal progress under a complementary prover.

For reuse, preserve problem or prompt, candidate rollout or reasoning state, feedback or verifier signal, sampling or search metadata, retention or selection decision, final answer or terminal outcome, together with model/version, split, stopping rule, and total compute.

## 8. Reading Notes: What should I remember?

- Sampling protocol: Multiple candidates, continuations, or search states are generated and retained with their feedback-bearing lineage.
- Inference budget: Experiment-specific; preserve sample count, search expansions, token budget, and verifier calls when reproducing.
- Rollout count: needs review
- Temperature: needs review
- Feedback contract: progress is the change in future success probability before and after a step under a prover policy distinct from the base policy
- Remaining checks: human review of unresolved metadata

## 9. Citation

Temporary citation, to be replaced by official BibTeX after human review:

```bibtex
@misc{rewarding_progress_scaling_automated_process_verifiers_for_llm_reasoning_2024,
  title = {Rewarding Progress: Scaling Automated Process Verifiers for LLM Reasoning},
  author = {Amrith Setlur and Chirag Nagpal and Adam Fisch and Xinyang Geng and Jacob Eisenstein and Rishabh Agarwal and Alekh Agarwal and Jonathan Berant and Aviral Kumar},
  year = {2024},
  howpublished = {ICLR}
}
```
