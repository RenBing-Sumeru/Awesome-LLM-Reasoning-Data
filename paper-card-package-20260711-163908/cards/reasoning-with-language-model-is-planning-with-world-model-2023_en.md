# Paper Card: Reasoning with Language Model is Planning with World Model

> **One-sentence review:** Uses an LM as both reasoning agent and world model to build MCTS traces with predicted states and task-specific rewards.
> **Reading priority:** worth reading
> **Paper type:** construction recipe paper
> **Best for:** Readers interested in reasoning / planning / math / test time compute.
> **Confidence:** high
> **Year/source:** 2023 · EMNLP
> **Authors:** Shibo Hao, Yi Gu, Haodi Ma, Joshua Jiahua Hong, Zhen Wang, Daisy Zhe Wang, Zhiting Hu
> **Institutions:** UC San Diego · University of Florida · Mohamed bin Zayed University of Artificial Intelligence
> **Links:** [Paper](https://arxiv.org/abs/2305.14992) · [Venue](https://aclanthology.org/2023.emnlp-main.507/)
> **Ask the Atlas:** [Explain](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=reasoning-with-language-model-is-planning-with-world-model-2023&mode=explain) · [Audit](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=reasoning-with-language-model-is-planning-with-world-model-2023&mode=audit) · [Compare](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=reasoning-with-language-model-is-planning-with-world-model-2023&mode=compare)

---

## 1. Problem: What question is this paper trying to answer?

Plan-generation, mathematical-reasoning, and logical-inference tasks used in the paper.

The reusable object is An MCTS reasoning tree containing states, candidate actions, predicted transitions, rewards, and chosen path. Representative MCTS framework in which both reasoning traces and predicted world-state transitions become the search record.

## 2. Core Idea: What is the paper's main contribution?

Uses an LM as both reasoning agent and world model to build MCTS traces with predicted states and task-specific rewards.

An LM alternates between proposing actions/reasoning steps and predicting future states as a world model. The feedback contract is: Task-specific rewards and model-predicted state transitions guide MCTS selection. The terminal condition is: A selected plan or answer satisfies the task-specific outcome criterion.

## 3. Method: How does it work?

The LM generates reasoning actions and simulates their next states. Iterative MCTS expansion, rollout, and backpropagation over language-model reasoning states. MCTS balances exploration and exploitation using task rewards and estimated values.

The resulting record contains An MCTS reasoning tree containing states, candidate actions, predicted transitions, rewards, and chosen path. The reported use is evaluation, test time compute.

## 4. Evidence: Why should we believe it?

RAP is reported as evaluation/test-time compute. Search paths could become SFT, distillation, or value-model data only if source policy, transition predictions, reward definition, and rejected branches are retained.

## 5. Novelty: What is new compared with prior work?

Compared with single-path generation, best-of-N, and outcome-only filtering, the paper contributes this change: Uses an LM as both reasoning agent and world model to build MCTS traces with predicted states and task-specific rewards.

The reusable novelty is the paper-specific connection between generation, selection or verification, and the retained reasoning trace; generic sampling, search, SFT, or final-answer evaluation remain upstream components.

## 6. Limitations: What are the weaknesses or hidden assumptions?

A hallucinated world-model transition can steer search toward an invalid plan. Improvements can conflate MCTS budget, reward design, and base-model capability. The selected path hides the distribution of rejected branches unless logs are retained.

Reproduction also depends on split policy (Reported benchmark/task settings; inspect individual task splits before reuse.), decontamination (unknown), and license provenance (unknown).

## 7. Usefulness: How can I use this paper?

It exposes an often-hidden search record—state prediction, task reward, and tree policy—that is essential for attributing planning gains.

For reuse, preserve problem, state, action_or_reasoning_step, predicted_next_state, task_reward, search_value, selected_path, together with model/version, split, stopping rule, and total compute.

## 8. Reading Notes: What should I remember?

- Sampling protocol: Iterative MCTS expansion, rollout, and backpropagation over language-model reasoning states.
- Inference budget: Search iterations, branching, rollout depth, and LM calls per task.
- Rollout count: needs review
- Temperature: needs review
- Feedback contract: Task-specific rewards and model-predicted state transitions guide MCTS selection.
- Remaining checks: human review of unresolved metadata

## 9. Citation

Temporary citation, to be replaced by official BibTeX after human review:

```bibtex
@misc{reasoning_with_language_model_is_planning_with_world_model_2023,
  title = {Reasoning with Language Model is Planning with World Model},
  author = {Shibo Hao and Yi Gu and Haodi Ma and Joshua Jiahua Hong and Zhen Wang and Daisy Zhe Wang and Zhiting Hu},
  year = {2023},
  howpublished = {EMNLP}
}
```
