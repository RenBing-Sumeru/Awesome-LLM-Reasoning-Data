# Paper Card: Language Agent Tree Search Unifies Reasoning Acting and Planning in Language Models

> **One-sentence review:** Combines MCTS, LM value functions, self-reflection, and environment feedback into search traces for language agents.
> **Reading priority:** worth reading
> **Paper type:** construction recipe / agent environment paper
> **Best for:** Readers interested in agents / code / web / math / test time compute.
> **Confidence:** high
> **Year/source:** 2023 · arXiv
> **Authors:** Andy Zhou, Kai Yan, Michal Shlapentokh-Rothman, Haohan Wang, Yu-Xiong Wang
> **Institutions:** University of Illinois Urbana-Champaign · Lapis Labs
> **Links:** [Paper](https://arxiv.org/abs/2310.04406) · [Code](https://github.com/lapisrocks/LanguageAgentTreeSearch)
> **Ask the Atlas:** [Explain](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=language-agent-tree-search-unifies-reasoning-acting-and-planning-in-language-models-2023&mode=explain) · [Audit](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=language-agent-tree-search-unifies-reasoning-acting-and-planning-in-language-models-2023&mode=audit) · [Compare](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=language-agent-tree-search-unifies-reasoning-acting-and-planning-in-language-models-2023&mode=compare)

---

## 1. Problem: What question is this paper trying to answer?

Programming, interactive QA, web-navigation, and mathematical-reasoning tasks.

The reusable object is A search tree of observations, actions, self-reflections, value estimates, environment feedback, and terminal result. Core agent-search reference that joins MCTS, reflection, and environment feedback into a full trajectory data object.

## 2. Core Idea: What is the paper's main contribution?

Combines MCTS, LM value functions, self-reflection, and environment feedback into search traces for language agents.

A language agent proposes actions and reflections while MCTS expands environment-linked trajectories. The feedback contract is: External environment feedback together with LM-powered value functions and self-reflection. The terminal condition is: Task completion or task-specific pass criterion in the reported environment.

## 3. Method: How does it work?

The agent generates candidate actions and reflections at search nodes. Tree expansion and rollout under an MCTS controller; exact budget varies by task. MCTS selects and expands nodes using visits, value estimates, reflection, and environmental outcomes.

The resulting record contains A search tree of observations, actions, self-reflections, value estimates, environment feedback, and terminal result. The reported use is agent training, evaluation, test time compute.

## 4. Evidence: Why should we believe it?

Episodes can inform agent training or evaluation. Reuse requires pinning environment versions, observations, tool schemas, feedback, and the search/reflection policy that produced each action.

## 5. Novelty: What is new compared with prior work?

Compared with single-path generation, best-of-N, and outcome-only filtering, the paper contributes this change: Combines MCTS, LM value functions, self-reflection, and environment feedback into search traces for language agents.

The reusable novelty is the paper-specific connection between generation, selection or verification, and the retained reasoning trace; generic sampling, search, SFT, or final-answer evaluation remain upstream components.

## 6. Limitations: What are the weaknesses or hidden assumptions?

Environment state, web content, and tool versions can make trajectories non-replayable. Reflection text may sound corrective without improving the underlying action policy. Search results can be dominated by interaction budget rather than agent quality.

Reproduction also depends on split policy (Environment benchmark splits as reported by each task.), decontamination (unknown), and license provenance (unknown).

## 7. Usefulness: How can I use this paper?

It shows why a reusable agent-search trace must retain the environment state and feedback alongside the selected action path.

For reuse, preserve observation, action, reflection, node_value, visit_count, environment_feedback, terminal_reward, together with model/version, split, stopping rule, and total compute.

## 8. Reading Notes: What should I remember?

- Sampling protocol: Tree expansion and rollout under an MCTS controller; exact budget varies by task.
- Inference budget: Environment interactions, tree expansions, LM calls, and reflection calls per episode.
- Rollout count: needs review
- Temperature: needs review
- Feedback contract: External environment feedback together with LM-powered value functions and self-reflection.
- Remaining checks: human review of unresolved metadata

## 9. Citation

Temporary citation, to be replaced by official BibTeX after human review:

```bibtex
@misc{language_agent_tree_search_unifies_reasoning_acting_and_planning_in_language_models_2023,
  title = {Language Agent Tree Search Unifies Reasoning Acting and Planning in Language Models},
  author = {Andy Zhou and Kai Yan and Michal Shlapentokh-Rothman and Haohan Wang and Yu-Xiong Wang},
  year = {2023},
  howpublished = {arXiv}
}
```
