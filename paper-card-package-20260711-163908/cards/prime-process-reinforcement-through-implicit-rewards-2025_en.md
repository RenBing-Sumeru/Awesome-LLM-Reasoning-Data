# Paper Card: PRIME: Process reinforcement through implicit rewards

> **One-sentence review:** Online process-reinforcement recipe that derives implicit process rewards from policy rollouts and outcome labels.
> **Reading priority:** worth reading
> **Paper type:** process supervision / verifier reward / construction recipe paper
> **Best for:** Readers interested in math / code / reasoning.
> **Confidence:** high
> **Year/source:** 2025 · arXiv
> **Authors:** Ganqu Cui, Lifan Yuan, Zefan Wang, Hanbin Wang, Yuchen Zhang, Jiacheng Chen, Wendi Li, Bingxiang He, Yuchen Fan, Tianyu Yu, Qixin Xu, Weize Chen, Jiarui Yuan, Huayu Chen, Kaiyan Zhang, Xingtai Lv, Shuo Wang, Yuan Yao, Xu Han, Hao Peng, Yu Cheng, Zhiyuan Liu, Maosong Sun, Bowen Zhou, Ning Ding
> **Institutions:** Shanghai AI Laboratory · Tsinghua University · University of Illinois Urbana-Champaign · Peking University · Shanghai Jiao Tong University
> **Links:** [Paper](https://arxiv.org/abs/2502.01456) · [DOI](https://doi.org/10.48550/arXiv.2502.01456) · [Code](https://github.com/PRIME-RL/PRIME) · [Data](https://huggingface.co/datasets/PRIME-RL/Eurus-2-Rollout) · [Hugging Face](https://huggingface.co/PRIME-RL)
> **Ask the Atlas:** [Explain](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=prime-process-reinforcement-through-implicit-rewards-2025&mode=explain) · [Audit](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=prime-process-reinforcement-through-implicit-rewards-2025&mode=audit) · [Compare](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=prime-process-reinforcement-through-implicit-rewards-2025&mode=compare)

---

## 1. Problem: What question is this paper trying to answer?

competition math and coding tasks.

The reusable object is policy rollout with final outcome label, implicit process reward estimates, and policy update signal. PRIME is a core PRM/RLVR recipe because it trains with implicit process rewards from policy rollouts and outcome labels rather than dense human step labels.

## 2. Core Idea: What is the paper's main contribution?

Online process-reinforcement recipe that derives implicit process rewards from policy rollouts and outcome labels.

current policy samples responses during online RL. The feedback contract is: implicit process rewards derived from outcome labels and updated on policy rollouts. The terminal condition is: final-answer or code-task correctness.

## 3. Method: How does it work?

policy rollouts. on-policy RL rollouts over math and coding prompts. prompts can be filtered by policy accuracy band, then outcome rewards and implicit process rewards are combined for advantage estimation.

The resulting record contains policy rollout with final outcome label, implicit process reward estimates, and policy update signal. The reported use is rlvr, process supervision, reward modeling.

## 4. Evidence: Why should we believe it?

Recorded training/evaluation use: rlvr, process_supervision, reward_modeling.

PRIME can be reused as a recipe for training from rollout data when dense process labels are unavailable. The reusable record should preserve the prompt, rollout, outcome label, implicit process-reward estimate, and policy version, because all of those determine the training signal.

## 5. Novelty: What is new compared with prior work?

Compared with single-path generation, best-of-N, and outcome-only filtering, the paper contributes this change: Online process-reinforcement recipe that derives implicit process rewards from policy rollouts and outcome labels.

The reusable novelty is the paper-specific connection between generation, selection or verification, and the retained reasoning trace; generic sampling, search, SFT, or final-answer evaluation remain upstream components.

## 6. Limitations: What are the weaknesses or hidden assumptions?

implicit rewards can inherit outcome-verifier shortcuts. online reward updates may introduce reward hacking. benchmark improvements may conflate optimizer and reward-contract changes.

Reproduction also depends on split policy (HF organization exposes multiple datasets, but exact train/eval split mapping should be checked before reuse.), decontamination (unknown), and license provenance (code repository reports Apache-2.0; dataset/model licenses should be checked per HF artifact.).

## 7. Usefulness: How can I use this paper?

It is a clean example of process supervision without manual dense labels, useful for comparing PRM data, outcome rewards, and RLVR optimization scaffolds.

For reuse, preserve prompt, policy rollout, outcome label, implicit process reward, advantage estimate, policy version, together with model/version, split, stopping rule, and total compute.

## 8. Reading Notes: What should I remember?

- Sampling protocol: on-policy RL rollouts over math and coding prompts.
- Inference budget: needs review
- Rollout count: needs review
- Temperature: needs review
- Feedback contract: implicit process rewards derived from outcome labels and updated on policy rollouts.
- Remaining checks: needs_metadata: curator should verify atlas fields

## 9. Citation

Temporary citation, to be replaced by official BibTeX after human review:

```bibtex
@misc{prime_process_reinforcement_through_implicit_rewards_2025,
  title = {PRIME: Process reinforcement through implicit rewards},
  author = {Ganqu Cui and Lifan Yuan and Zefan Wang and Hanbin Wang and Yuchen Zhang and Jiacheng Chen and Wendi Li and Bingxiang He and Yuchen Fan and Tianyu Yu and Qixin Xu and Weize Chen and Jiarui Yuan and Huayu Chen and Kaiyan Zhang and Xingtai Lv and Shuo Wang and Yuan Yao and Xu Han and Hao Peng and Yu Cheng and Zhiyuan Liu and Maosong Sun and Bowen Zhou and Ning Ding},
  year = {2025},
  howpublished = {arXiv}
}
```
