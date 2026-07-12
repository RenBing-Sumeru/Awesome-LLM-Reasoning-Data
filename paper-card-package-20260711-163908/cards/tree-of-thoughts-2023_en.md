# Paper Card: Tree of Thoughts: Deliberate Problem Solving with Large Language Models

> **One-sentence review:** Tree of Thoughts turns language reasoning into a search trace with explicit branch and evaluation budgets.
> **Reading priority:** must read
> **Paper type:** scaling study / construction recipe / agent environment paper
> **Best for:** Readers interested in planning / search / reasoning / games.
> **Confidence:** high
> **Year/source:** 2023 · NeurIPS 2023
> **Authors:** Shunyu Yao, Dian Yu, Jeffrey Zhao, Izhak Shafran, Thomas L. Griffiths, Yuan Cao, Karthik Narasimhan
> **Institutions:** Princeton University · Google DeepMind
> **Links:** [Paper](https://arxiv.org/abs/2305.10601) · [DOI](https://doi.org/10.48550/arXiv.2305.10601) · [Code](https://github.com/princeton-nlp/tree-of-thought-llm)
> **Ask the Atlas:** [Explain](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=tree-of-thoughts-2023&mode=explain) · [Audit](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=tree-of-thoughts-2023&mode=audit) · [Compare](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=tree-of-thoughts-2023&mode=compare)

---

## 1. Problem: What question is this paper trying to answer?

Planning and reasoning tasks such as Game of 24, creative writing, and Mini Crosswords.

The reusable object is Problem, intermediate thought states, branch scores, search actions, and final solution. Top-conference paper that makes search trees, branch budgets, and self-evaluation explicit test-time compute objects.

## 2. Core Idea: What is the paper's main contribution?

Tree of Thoughts turns language reasoning into a search trace with explicit branch and evaluation budgets.

Language model proposes thoughts, evaluates states, and explores a tree. The feedback contract is: Self-evaluation, task-specific checks, and final outcome scoring. The terminal condition is: Search returns a final solution accepted by the task evaluator.

## 3. Method: How does it work?

Policy model expands tree nodes into candidate thoughts. Breadth/depth and branch counts define the main TTC budget. Search keeps or prunes branches according to value estimates and task checks.

The resulting record contains Problem, intermediate thought states, branch scores, search actions, and final solution. The reported use is test time compute, evaluation, audit.

## 4. Evidence: Why should we believe it?

Reports large gains on tasks that require planning or search, including Game of 24.

Metrics and comparisons should be read together with the budget. For this track, the important question is not only whether accuracy improves, but which resource changed: data examples, generated rollouts, verifier calls, search branches, RL updates, or base model size.

## 5. Novelty: What is new compared with prior work?

Compared with single-path generation, best-of-N, and outcome-only filtering, the paper contributes this change: Tree of Thoughts turns language reasoning into a search trace with explicit branch and evaluation budgets.

The reusable novelty is the paper-specific connection between generation, selection or verification, and the retained reasoning trace; generic sampling, search, SFT, or final-answer evaluation remain upstream components.

## 6. Limitations: What are the weaknesses or hidden assumptions?

Value estimates may be prompt-sensitive. Search budget can dominate model ranking. Small task suites can overfit scaffolds.

Reproduction also depends on split policy (Task generation and test settings should be kept separate from prompt examples.), decontamination (Game/task templates can be memorized once public.), and license provenance (Check code repository and task assets before reuse.).

## 7. Usefulness: How can I use this paper?

Top-conference paper that makes search trees, branch budgets, and self-evaluation explicit test-time compute objects.

For reuse, preserve thought node, branch candidates, state evaluation, search policy, backtracking event, final answer, together with model/version, split, stopping rule, and total compute.

## 8. Reading Notes: What should I remember?

- Sampling protocol: Breadth/depth and branch counts define the main TTC budget.
- Inference budget: Number of generated thoughts, evaluations, and search steps.
- Rollout count: needs review
- Temperature: needs review
- Feedback contract: Self-evaluation, task-specific checks, and final outcome scoring.
- Remaining checks: needs_review: record task-specific branch counts before comparing against sampling-only baselines

## 9. Citation

Temporary citation, to be replaced by official BibTeX after human review:

```bibtex
@misc{tree_of_thoughts_2023,
  title = {Tree of Thoughts: Deliberate Problem Solving with Large Language Models},
  year = {2023},
  howpublished = {arXiv: 2305.10601},
  note = {NeurIPS 2023; needs BibTeX verification}
}
```
