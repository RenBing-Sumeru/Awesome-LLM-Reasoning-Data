<!-- entry_id: prime-process-reinforcement-through-implicit-rewards-2025 -->
<!-- card_type: verifiers -->
# PRIME: Process Reinforcement Through Implicit Rewards

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=prime-process-reinforcement-through-implicit-rewards-2025&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=prime-process-reinforcement-through-implicit-rewards-2025&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=prime-process-reinforcement-through-implicit-rewards-2025&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L4_carded
> Category: rollout_search_test_time_trace_data
> Links: [Paper](https://arxiv.org/abs/2502.01456) · [Code](https://github.com/PRIME-RL/PRIME) · [Hugging Face](https://huggingface.co/PRIME-RL)

## TL;DR

PRIME updates a process reward signal online from policy rollouts and outcome labels, so dense process rewards can be used during RL without manually collected step labels.

For Track 05, the key object is an on-policy rollout with outcome feedback and implicit process-reward estimates, not a static human-labeled step dataset.

## 1. What is this work?

- Year / venue: 2025 · arXiv.
- Author affiliations (first five listed in the paper): Shanghai AI Laboratory; Tsinghua University; University of Illinois Urbana-Champaign; Peking University; Shanghai Jiao Tong University.
- Atlas role: process_supervision, verifier_reward, construction_recipe.
- Domains: math, code, reasoning.
- Current status: verified.
- Why it belongs: PRIME shows how rollout records can continuously update both the policy and an implicit process reward model during RLVR-style training.

## 2. What data object does it expose?

- Prompt/source: competition math and coding tasks.
- Trace/action author: the current policy samples responses during online RL.
- Answer/artifact format: rollout responses with final outcome labels and token- or step-like implicit process rewards.
- Process fields: prompt, sampled response, outcome reward, implicit process reward, advantage estimate, policy update signal.
- Environment or substrate: online RL loop with math answer checking or code-task feedback.
- Terminal predicate: final answer or code output is correct under the task verifier.

## 3. What is the verifier / reward / judge / environment?

- Verification contract: mixed. Outcome labels come from task verifiers; process rewards are inferred and updated online.
- Recorded verifier/reward/environment: implicit PRM plus outcome verifier.
- Supervision granularity: answer_level, step_level, and process_reward.

## 4. How is the data constructed?

- Base model: Qwen2.5-Math-7B-Base is reported for the main PRIME model lineage.
- Teacher: outcome verifiers rather than dense human process labels.
- Generator: policy rollouts from the current training policy.
- Filtering rule: prompts can be filtered by policy accuracy band, then outcome and implicit process rewards are combined for advantage estimation.
- Sampling protocol: on-policy RL rollouts; exact rollout counts and task mixtures should be pinned before reuse.
- Optimizer/scaffold: online RL with implicit PRM updates and policy optimization.

## 5. How can it enter post-training?

Recorded training/evaluation use: rlvr, process_supervision, reward_modeling.

PRIME can be reused as a recipe for training from rollout data when dense process labels are unavailable. The reusable record should preserve the prompt, rollout, outcome label, implicit process-reward estimate, and policy version, because all of those determine the training signal.

## 6. What should readers audit?

- Which outcome verifiers define correctness for math and code tasks?
- Are failed rollouts retained, or are only successful responses exposed?
- How is prompt filtering by policy accuracy computed, and does it bias the task distribution?
- Does the implicit PRM improve because it learns progress, or because it learns outcome-verifier shortcuts?
- Are policy and PRM updates evaluated on held-out task families?
- Are released HF datasets/models enough to reconstruct the rollout lineage?

## 7. What is missing or risky?

- Online reward updates can create reward hacking if the implicit PRM and policy co-adapt to verifier artifacts.
- Improvements can conflate outcome-verifier quality, optimizer details, prompt filtering, and data quality.
- Dataset split, license, and decontamination details still need stronger atlas pinning before L5 promotion.
- Rollout data from one policy version may not be reusable as a general process-supervision dataset for another model.

## 8. Why it matters for post-training reasoning data

PRIME is useful because it treats process supervision as a rollout-time training signal, not only as an offline annotation problem. It helps readers ask whether a reasoning model improved from better examples, denser rewards, on-policy exploration, or a changed optimizer.

## 9. Links and citation

- [Paper](https://arxiv.org/abs/2502.01456)
- [Code](https://github.com/PRIME-RL/PRIME)
- [Hugging Face organization](https://huggingface.co/PRIME-RL)
- Data ID: `prime-process-reinforcement-through-implicit-rewards-2025`
- Citation status: verified
- Confidence: high
