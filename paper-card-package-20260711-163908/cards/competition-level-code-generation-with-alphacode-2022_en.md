# Paper Card: Competition-Level Code Generation with AlphaCode

> **One-sentence review:** Samples up to one million programs per model and problem, then filters and clusters them into ten contest submissions.
> **Reading priority:** must read
> **Paper type:** model report / scaling study / construction recipe paper
> **Best for:** Readers interested in code / competitive programming / test time compute.
> **Confidence:** high
> **Year/source:** 2022 · Science 378(6624), 1092-1097
> **Authors:** Yujia Li, David Choi, Junyoung Chung, Nate Kushman, Julian Schrittwieser, Rémi Leblond, Tom Eccles, James Keeling, Felix Gimeno, Agustin Dal Lago, Thomas Hubert, Peter Choy, Cyprien de Masson d'Autume, Igor Babuschkin, Xinyun Chen, Po-Sen Huang, Johannes Welbl, Sven Gowal, Alexey Cherepanov, James Molloy, Daniel J. Mankowitz, Esme Sutherland Robson, Pushmeet Kohli, Nando de Freitas, Koray Kavukcuoglu, Oriol Vinyals
> **Institutions:** DeepMind
> **Links:** [Paper](https://arxiv.org/abs/2203.07814) · [DOI](https://doi.org/10.1126/science.abq1158) · [Code](https://github.com/google-deepmind/code_contests) · [Project](https://deepmind.google/blog/competitive-programming-with-alphacode/) · [Venue](https://www.science.org/doi/10.1126/science.abq1158)
> **Ask the Atlas:** [Explain](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=competition-level-code-generation-with-alphacode-2022&mode=explain) · [Audit](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=competition-level-code-generation-with-alphacode-2022&mode=audit) · [Compare](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=competition-level-code-generation-with-alphacode-2022&mode=compare)

---

## 1. Problem: What question is this paper trying to answer?

CodeContests competitive-programming statements from Codeforces and related contest platforms.

The reusable object is per-problem program pools with compilation status, example-test behavior, behavioral cluster membership, rank, and up to ten submitted programs. Canonical code-reasoning example where an enormous rollout pool is converted into a small deployable submission set through executable filtering and clustering.

## 2. Core Idea: What is the paper's main contribution?

Samples up to one million programs per model and problem, then filters and clusters them into ten contest submissions.

AlphaCode policy models sample Python and C++ programs at very large scale. The feedback contract is: compilation and example-test filtering followed by clustering and model-based ranking; hidden tests provide terminal evaluation only. The terminal condition is: a selected submitted program passes the hidden contest judge within a ten-submission budget.

## 3. Method: How does it work?

an ensemble of AlphaCode models samples programs independently for each problem. draw one million samples per problem from each model in the main large-scale analysis before filtering and clustering. remove noncompiling and example-test-failing samples, cluster survivors by behavior on generated inputs, then rank representatives.

The resulting record contains per-problem program pools with compilation status, example-test behavior, behavioral cluster membership, rank, and up to ten submitted programs. The reported use is evaluation, test time compute.

## 4. Evidence: Why should we believe it?

Simulated ten recent Codeforces contests reached an estimated top-54.3% rank; example tests reject over 99% of samples; scale, filtering, clustering, and ensembling are ablated.

## 5. Novelty: What is new compared with prior work?

Compared with single-path generation, best-of-N, and outcome-only filtering, the paper contributes this change: Samples up to one million programs per model and problem, then filters and clusters them into ten contest submissions.

The reusable novelty is the paper-specific connection between generation, selection or verification, and the retained reasoning trace; generic sampling, search, SFT, or final-answer evaluation remain upstream components.

## 6. Limitations: What are the weaknesses or hidden assumptions?

Example tests reject more than 99 percent of samples but do not guarantee hidden-test correctness. One million samples per model per problem is far removed from the final ten-submission evaluation budget. Behavioral clustering depends on generated tests and can merge semantically different programs or miss equivalent ones. The sampled program pools and exact production ranking pipeline are not fully released.

Reproduction also depends on split policy (chronological contest holdouts and simulated participation in ten recent Codeforces contests.), decontamination (evaluation contests postdate the training cutoff; the paper also analyzes copying and near-duplicate behavior.), and license provenance (Apache-2.0 for the official CodeContests repository; upstream contest content retains source-specific terms.).

## 7. Usefulness: How can I use this paper?

It shows how generation budget, executable feedback, diversity control, and a hard external submission budget interact.

For reuse, preserve problem_statement, language, sampled_program, compilation_result, example_test_result, behavior_cluster, model_score, selected_submission, sample_count, together with model/version, split, stopping rule, and total compute.

## 8. Reading Notes: What should I remember?

- Sampling protocol: draw one million samples per problem from each model in the main large-scale analysis before filtering and clustering.
- Inference budget: massive generation followed by a realistic maximum of ten external submissions per problem.
- Rollout count: 1000000
- Temperature: needs review
- Feedback contract: compilation and example-test filtering followed by clustering and model-based ranking; hidden tests provide terminal evaluation only.
- Remaining checks: needs_review: keep released CodeContests artifacts separate from unreleased AlphaCode sample pools and cluster logs

## 9. Citation

Temporary citation, to be replaced by official BibTeX after human review:

```bibtex
@misc{competition_level_code_generation_with_alphacode_2022,
  title = {Competition-Level Code Generation with AlphaCode},
  author = {Yujia Li and David Choi and Junyoung Chung and Nate Kushman and Julian Schrittwieser and Rémi Leblond and Tom Eccles and James Keeling and Felix Gimeno and Agustin Dal Lago and Thomas Hubert and Peter Choy and Cyprien de Masson d'Autume and Igor Babuschkin and Xinyun Chen and Po-Sen Huang and Johannes Welbl and Sven Gowal and Alexey Cherepanov and James Molloy and Daniel J. Mankowitz and Esme Sutherland Robson and Pushmeet Kohli and Nando de Freitas and Koray Kavukcuoglu and Oriol Vinyals},
  year = {2022},
  howpublished = {Science 378(6624), 1092-1097}
}
```
