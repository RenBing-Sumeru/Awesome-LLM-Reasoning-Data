# Paper Card: Re-ReST: Reflection-Reinforced Self-Training for Language Agents

> **One-sentence review:** Builds self-training episodes from an agent's initial output, external feedback, reflector revision, and refined trajectory.
> **Reading priority:** worth reading
> **Paper type:** construction recipe paper
> **Best for:** Readers interested in agents / code / question answering / visual question answering.
> **Confidence:** high
> **Year/source:** 2024 · arXiv
> **Authors:** Zi-Yi Dou, Cheng-Fu Yang, Xueqing Wu, Kai-Wei Chang, Nanyun Peng
> **Institutions:** University of California, Los Angeles
> **Links:** [Paper](https://arxiv.org/abs/2406.01495) · [DOI](https://doi.org/10.48550/arXiv.2406.01495) · [Code](https://github.com/PlusLabNLP/Re-ReST)
> **Ask the Atlas:** [Explain](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=re-rest-reflection-reinforced-self-training-for-language-agents-2024&mode=explain) · [Audit](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=re-rest-reflection-reinforced-self-training-for-language-agents-2024&mode=audit) · [Compare](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=re-rest-reflection-reinforced-self-training-for-language-agents-2024&mode=compare)

---

## 1. Problem: What question is this paper trying to answer?

Agent-task inputs spanning multi-hop QA, sequential decision making, code generation, VQA, and text-to-image generation.

The reusable object is Initial agent output, external feedback, reflection, refined output, and selected self-training episode. Direct example of retaining a failed trajectory, its feedback, and a reflection-based revision as a self-training data object.

## 2. Core Idea: What is the paper's main contribution?

Builds self-training episodes from an agent's initial output, external feedback, reflector revision, and refined trajectory.

The agent generates an initial trajectory; a reflector rewrites weak samples using the trajectory and external feedback. The feedback contract is: External feedback such as code unit-test results, plus reflector-generated revisions. The terminal condition is: The refined trajectory meets the task-specific success or quality criterion.

## 3. Method: How does it work?

The agent generates candidates and the reflector produces revisions conditioned on failure feedback. Generate, observe feedback, reflect/revise, then select for self-training; an inference-time reflection variant is also studied. Refined high-quality samples enrich the self-training set; failed initial samples need not be discarded immediately.

The resulting record contains Initial agent output, external feedback, reflection, refined output, and selected self-training episode. The reported use is sft, agent training, test time compute.

## 4. Evidence: Why should we believe it?

Refined episodes are used for SFT and agent training. Preserve the original failure, feedback source, reflector prompt/model, and selection rule so the revision can be audited.

## 5. Novelty: What is new compared with prior work?

Compared with single-path generation, best-of-N, and outcome-only filtering, the paper contributes this change: Builds self-training episodes from an agent's initial output, external feedback, reflector revision, and refined trajectory.

The reusable novelty is the paper-specific connection between generation, selection or verification, and the retained reasoning trace; generic sampling, search, SFT, or final-answer evaluation remain upstream components.

## 6. Limitations: What are the weaknesses or hidden assumptions?

A reflector can rationalize an incorrect output instead of fixing it. Feedback quality differs sharply across unit tests, QA labels, and subjective generation tasks. Treating reflection calls as free hides a material test-time compute cost.

Reproduction also depends on split policy (Use the source benchmark's task split and feedback environment; details vary by domain.), decontamination (unknown), and license provenance (unknown).

## 7. Usefulness: How can I use this paper?

It makes rejected or weak agent attempts potentially useful only when their feedback and repair lineage are retained.

For reuse, preserve task_input, initial_agent_output, environment_feedback, reflection, refined_output, self-training_selection, together with model/version, split, stopping rule, and total compute.

## 8. Reading Notes: What should I remember?

- Sampling protocol: Generate, observe feedback, reflect/revise, then select for self-training; an inference-time reflection variant is also studied.
- Inference budget: Initial generation, feedback acquisition, and optional reflection/revision calls per task.
- Rollout count: needs review
- Temperature: needs review
- Feedback contract: External feedback such as code unit-test results, plus reflector-generated revisions.
- Remaining checks: human review of unresolved metadata

## 9. Citation

Temporary citation, to be replaced by official BibTeX after human review:

```bibtex
@misc{re_rest_reflection_reinforced_self_training_for_language_agents_2024,
  title = {Re-ReST: Reflection-Reinforced Self-Training for Language Agents},
  author = {Zi-Yi Dou and Cheng-Fu Yang and Xueqing Wu and Kai-Wei Chang and Nanyun Peng},
  year = {2024},
  howpublished = {arXiv}
}
```
