<!-- entry_id: alphamath-almost-zero-2024 -->
<!-- card_type: recipes -->
# Paper Card: AlphaMath Almost Zero: Process Supervision without Process

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=alphamath-almost-zero-2024&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=alphamath-almost-zero-2024&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=alphamath-almost-zero-2024&mode=compare)
<!-- ask_atlas:end -->

> **One-sentence assessment:** AlphaMath converts final-answer supervision into positive and negative MCTS reasoning paths plus backed-up step values, but those values remain search estimates rather than independently verified process labels.
> **Reading priority:** Essential
> **Paper type:** Search-based process-supervision and self-training recipe
> **Knowledge categories:** Process and Trace Supervision Data; Rollout, Search, and Test-Time Trace Data; Data Construction and Open Release Recipes; Training Usage and Optimization Objectives
> **Best for:** Researchers constructing reasoning traces, value targets, and verifier-guided decoding systems from answer-labeled math data
> **Confidence:** High
> **Year / Venue:** 2024; NeurIPS 2024
> **Authors:** Guoxin Chen, Minpeng Liao, Chengxi Li, Kai Fan
> **Institutions:** Tongyi Lab
> **Links:** [Paper](https://proceedings.neurips.cc/paper_files/paper/2024/hash/30dfe47a3ccbee68cffa0c19ccb1bc00-Abstract-Conference.html); [arXiv](https://arxiv.org/abs/2405.03553); [DOI](https://doi.org/10.52202/079017-0870); [Code](https://github.com/MARIO-Math-Reasoning/Super_MARIO); [Data](https://huggingface.co/datasets/MARIO-Math-Reasoning/AlphaMath-Trainset)

---

## 1. Problem: What question does this work address?

Process-supervised mathematical reasoning usually depends on worked solutions or step labels written by humans or stronger proprietary models. AlphaMath asks whether an already pretrained language model can instead manufacture its own reasoning processes and intermediate value targets using only questions, known final answers, search, and a code interpreter. The practical challenge is to turn sparse terminal correctness into training signals for both a solution policy and a step-level value model without treating expensive external rationales as the teacher.

## 2. Core idea: What is the main contribution?

AlphaMath treats a partial solution as a search state and a generated reasoning step as an action. Monte Carlo Tree Search produces complete correct and incorrect paths, while terminal answer rewards are backed up into Q-values for intermediate states. The resulting data object combines a math question, ground-truth final answer, generated textual or Python-assisted steps, policy priors, tree depth, terminal outcome, and backed-up values. Correct paths supervise next-token generation; both correct and incorrect paths supervise the value head.

## 3. Method: How does it work?

The main experiments start from DeepSeekMath-Base-7B. The seed pool contains approximately 15,000 question-final-answer pairs from the GSM8K and MATH training splits; human-written solution analyses are omitted.

The construction loop runs for three rounds:

1. A shared policy/value model expands partial solutions inside MCTS. In round 1, generation uses a ReAct-style prompt with two demonstrations randomly selected from a pool of 20. Later rounds use the paper's SFT XML format without demonstrations.
2. Nonterminal steps receive zero immediate reward. A completed path receives +1 or -1 according to equivalence between its predicted answer and the known final answer. Optional Python execution supports numerical and symbolic work, but the terminal contract remains answer correctness.
3. MCTS combines policy priors, visit counts, terminal outcomes, and the value model. Backed-up Q-values become regression targets for intermediate states.
4. For each question-answer pair in each round, the reported setup builds ten trees and randomly samples at most four correct and four incorrect paths, maintaining an approximately balanced positive/negative mixture.
5. The policy is updated with next-token likelihood on correct paths. The value head is updated on step targets from both correct and incorrect paths. The updated model then generates the next round of trees.

The paper also introduces step-level beam search for inference. It samples several next steps and keeps candidates according to direct value predictions, avoiding full MCTS backup. Reported defaults include 40 MCTS simulations, a described maximum depth of 8, and step-level beam expansion size `B2=5`; the exact construction temperature is unknown.

## 4. Evidence: Why should we believe it?

The paper evaluates in-domain performance on GSM8K and MATH and out-of-domain performance on GaoKao2023 and OCWCourses. It compares the trained model and its MCTS or step-level beam decoding against prompting, open models, and supervised math-reasoning systems. The reported results show improvement across iterative training rounds and further gains when the learned value model guides inference. The experiments also study different model initializations and search settings.

The official Super_MARIO repository releases MCTS and decoding code, an AlphaMath-7B round-3 checkpoint, implementation details, and a round-3 training dataset. The current Hugging Face page reports 115,551 rows containing positive and negative examples with step records, `P`, `Q`, and depth fields. This supports inspection of the released data object. It does not establish that every backed-up value is a correct process label or that the public code is identical to the internal experimental system.

## 5. Novelty: What is new relative to prior work?

The distinctive contribution is not simply applying MCTS at inference. AlphaMath uses the search tree as an iterative data factory: terminal answer checks produce complete positive and negative trajectories, and search backup converts those outcomes into dense value targets for a jointly trained policy/value model. This avoids human or GPT-4 process annotations while retaining an explicit step-scoring model that can later guide MCTS or cheaper step-level beam search.

## 6. Limitations: What are the weaknesses or hidden assumptions?

- Final-answer equivalence is only an outcome check. It can reward a path with invalid intermediate reasoning or reject an alternate valid answer form.
- Backed-up Q-values are policy- and budget-dependent estimates, not independently annotated step correctness. Search errors and value-model errors propagate into training targets.
- The official repository documents value-model false positives in which incorrect solutions receive values near +1.
- Python execution can validate that code runs and produces an output, but it does not prove that the code or surrounding argument correctly represents the problem.
- The data distribution depends on the base model, prompts, tree count, depth, expansion policy, sampling temperature, and positive/negative sampling cap. The exact construction temperature is unknown.
- No explicit decontamination procedure was located. Dataset licensing is undisclosed, and GSM8K/MATH license inheritance requires separate review.
- The repository states that code was extracted from an internal corporate codebase and may differ slightly from the implementation behind the paper. Only some training-function details are released.
- Immutable revisions and exact per-source counts for the released round-3 dataset and checkpoint remain unpinned.

## 7. Uses: How can this work be used?

AlphaMath can serve as a recipe for generating SFT traces, positive/negative process examples, and trajectory-value targets from answer-labeled mathematical tasks. Its released tree-derived records are useful for studying how terminal rewards are propagated into intermediate supervision, training process verifiers, comparing MCTS with direct value-guided beam search, and auditing false-positive step values. For the Data Construction and Open Release Recipes track, it is especially useful as a case study in how search configuration, answer extraction, failed-path retention, and release versioning define the effective dataset.

## 8. Reading notes: What should readers remember?

- The seed supervision is question plus final answer, not zero supervision.
- Correct paths train the policy; correct and incorrect paths both train the value model.
- MCTS Q-values are constructed process targets, not native step annotations.
- Failed paths are a first-class released object because they support value learning and audits.
- Search budget and answer-checker behavior are part of the data specification.
- Reuse should pin artifact revisions, licenses, extraction rules, and value-model calibration.

## 9. Citation

Use the official BibTeX linked from the NeurIPS proceedings record.

```bibtex
@inproceedings{alphamath,
  author = {Chen, Guoxin and Liao, Minpeng and Li, Chengxi and Fan, Kai},
  booktitle = {Advances in Neural Information Processing Systems},
  editor = {A. Globerson and L. Mackey and D. Belgrave and A. Fan and U. Paquet and J. Tomczak and C. Zhang},
  pages = {27689--27724},
  publisher = {Curran Associates, Inc.},
  title = {AlphaMath Almost Zero: Process Supervision without Process},
  url = {https://proceedings.neurips.cc/paper_files/paper/2024/file/30dfe47a3ccbee68cffa0c19ccb1bc00-Paper-Conference.pdf},
  volume = {37},
  year = {2024}
}
```
