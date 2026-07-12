# 论文卡片：Improve Mathematical Reasoning in Language Models by Automated Process Supervision

> **一句话评价：** OmegaPRM 用分治式 MCTS 高效定位推理错误，并生成大规模、较平衡的 PRM 过程监督。
> **阅读优先级：** 可读
> **论文类型：** 推理数据 / process_supervision, verifier_reward, construction_recipe论文
> **知识点分类：** Rollout, Search, and Test-Time Trace Data
> **适合读者：** 适合研究 rollout、搜索轨迹、验证器、拒绝采样与 post-training 数据谱系的读者。
> **置信度：** 高
> **年份 / 来源：** 2024 · arXiv
> **作者：** Liangchen Luo, Yinxiao Liu, Rosanne Liu, Samrat Phatale, Meiqi Guo, Harsh Lara, Yunxuan Li, Lei Shu, Yun Zhu, Lei Meng, Jiao Sun, Abhinav Rastogi
> **机构：** Google
> **链接：** [Paper](https://arxiv.org/abs/2406.06592) · [DOI](https://doi.org/10.48550/arXiv.2406.06592)
> **Ask the Atlas：** [解释](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=omegaprm-automated-process-supervision-2024&mode=explain) · [审计](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=omegaprm-automated-process-supervision-2024&mode=audit) · [对比](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=omegaprm-automated-process-supervision-2024&mode=compare)

---

## 1. 问题：这篇论文想回答什么问题？

OmegaPRM 用分治式 MCTS 高效定位推理错误，并生成大规模、较平衡的 PRM 过程监督。 原文界定的问题是：Official benchmark and training tasks described in the primary paper.

一个可复用记录包括：problem or prompt, candidate rollout or reasoning state, feedback or verifier signal, sampling or search metadata, retention or selection decision, final answer or terminal outcome。

## 2. 核心思想：这篇论文的主要贡献是什么？

OmegaPRM 用分治式 MCTS 高效定位推理错误，并生成大规模、较平衡的 PRM 过程监督。

核心机制是：Build a search tree over a proposed solution, use divide-and-conquer exploration to find the earliest error, balance positive and negative nodes, train a PRM, and select outputs with weighted self-consistency. 反馈契约是：an outcome reward model or answer checker scores completed continuations; search converts outcome evidence into step labels.

## 3. 方法：它是怎么工作的？

生成与搜索流程是：The policy or teacher model generates candidate reasoning traces. 采样或搜索协议是：Multiple candidates, continuations, or search states are generated and retained with their feedback-bearing lineage. 筛选规则是：Build a search tree over a proposed solution, use divide-and-conquer exploration to find the earliest error, balance positive and negative nodes, train a PRM, and select outputs with weighted self-consistency.

最终记录包含：problem or prompt, candidate rollout or reasoning state, feedback or verifier signal, sampling or search metadata, retention or selection decision, final answer or terminal outcome。论文报告的用途包括 process supervision, reward modeling, test time compute。

## 4. 证据：为什么应该相信它？

论文在 MATH500 与 GSM8K 上评估 Gemini Pro 和 Gemma 2 27B，比较仅 outcome 选择、自动过程监督与加权 self-consistency。这些证据应视为生成器质量、反馈质量、数据筛选与计算量的联合测量。

只有在样本数、验证器调用、token 上限和策略 checkpoint 对齐时，比较才可解释。

## 5. 新意：相比已有工作新在哪里？

相比单路径生成、best-of-N 和只保留最终成功答案的过滤方式，本文的变化是：OmegaPRM 用分治式 MCTS 高效定位推理错误，并生成大规模、较平衡的 PRM 过程监督。

可复用的新意在于把生成、选择或验证与保留下来的推理轨迹连成一条可审计链路；通用采样、搜索、SFT 或最终答案评测并不是本文独有的新组件。

## 6. 局限：弱点或隐藏假设是什么？

首错定位假设后续续写能可靠诊断更早步骤。搜索树标签依赖 ORM 与 prover policy。

标注总量本身不披露每题计算量和被拒分支。

## 7. 用途：我可以如何使用这篇论文？

超过 150 万条自动过程标注用于训练 PRM；推理时 PRM 分数用于加权多个候选解。构建数据集时，应同时保留 accepted/rejected candidate 与承载反馈的字段。

训练时要区分 SFT 目标、verifier 样本和 on-policy RL rollout。

## 8. 阅读笔记：应该记住什么？

每个候选由哪个模型或教师 checkpoint 生成？每个提示使用多少候选、续写或搜索节点？

是否公开被拒轨迹，还是只公开最终选择？

## 9. 引用

临时引用，人工 review 后替换为官方 BibTeX：

```bibtex
@misc{omegaprm_automated_process_supervision_2024,
  title = {Improve Mathematical Reasoning in Language Models by Automated Process Supervision},
  author = {Liangchen Luo and Yinxiao Liu and Rosanne Liu and Samrat Phatale and Meiqi Guo and Harsh Lara and Yunxuan Li and Lei Shu and Yun Zhu and Lei Meng and Jiao Sun and Abhinav Rastogi},
  year = {2024},
  howpublished = {arXiv}
}
```
