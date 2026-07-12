# 论文卡片：Rewarding Progress: Scaling Automated Process Verifiers for LLM Reasoning

> **一句话评价：** 将过程奖励定义为 prover 衡量的“进展”，训练 Process Advantage Verifier，以提高搜索与在线 RL 的效率。
> **阅读优先级：** 可读
> **论文类型：** 推理数据 / process_supervision, verifier_reward, scaling_study论文
> **知识点分类：** Rollout, Search, and Test-Time Trace Data
> **适合读者：** 适合研究 rollout、搜索轨迹、验证器、拒绝采样与 post-training 数据谱系的读者。
> **置信度：** 高
> **年份 / 来源：** 2024 · ICLR
> **作者：** Amrith Setlur, Chirag Nagpal, Adam Fisch, Xinyang Geng, Jacob Eisenstein, Rishabh Agarwal, Alekh Agarwal, Jonathan Berant, Aviral Kumar
> **机构：** Google DeepMind · Google Research · Princeton University · Tel Aviv University
> **链接：** [Paper](https://arxiv.org/abs/2410.08146) · [DOI](https://doi.org/10.48550/arXiv.2410.08146)
> **Ask the Atlas：** [解释](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=rewarding-progress-scaling-automated-process-verifiers-for-llm-reasoning-2024&mode=explain) · [审计](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=rewarding-progress-scaling-automated-process-verifiers-for-llm-reasoning-2024&mode=audit) · [对比](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=rewarding-progress-scaling-automated-process-verifiers-for-llm-reasoning-2024&mode=compare)

---

## 1. 问题：这篇论文想回答什么问题？

将过程奖励定义为 prover 衡量的“进展”，训练 Process Advantage Verifier，以提高搜索与在线 RL 的效率。 原文界定的问题是：Official benchmark and training tasks described in the primary paper.

一个可复用记录包括：problem or prompt, candidate rollout or reasoning state, feedback or verifier signal, sampling or search metadata, retention or selection decision, final answer or terminal outcome。

## 2. 核心思想：这篇论文的主要贡献是什么？

将过程奖励定义为 prover 衡量的“进展”，训练 Process Advantage Verifier，以提高搜索与在线 RL 的效率。

核心机制是：Collect prover rollouts from adjacent reasoning states, estimate before/after success, form process-advantage labels, train PAVs, and use dense scores in beam search or online RL. 反馈契约是：progress is the change in future success probability before and after a step under a prover policy distinct from the base policy.

## 3. 方法：它是怎么工作的？

生成与搜索流程是：The policy or teacher model generates candidate reasoning traces. 采样或搜索协议是：Multiple candidates, continuations, or search states are generated and retained with their feedback-bearing lineage. 筛选规则是：Collect prover rollouts from adjacent reasoning states, estimate before/after success, form process-advantage labels, train PAVs, and use dense scores in beam search or online RL.

最终记录包含：problem or prompt, candidate rollout or reasoning state, feedback or verifier signal, sampling or search metadata, retention or selection decision, final answer or terminal outcome。论文报告的用途包括 reward modeling, rlvr, test time compute。

## 4. 证据：为什么应该相信它？

论文在其设置中报告相对 ORM 超过 8 个点的搜索准确率收益、1.5–5 倍搜索计算效率及 5–6 倍在线 RL 样本效率。这些证据应视为生成器质量、反馈质量、数据筛选与计算量的联合测量。

只有在样本数、验证器调用、token 上限和策略 checkpoint 对齐时，比较才可解释。

## 5. 新意：相比已有工作新在哪里？

相比单路径生成、best-of-N 和只保留最终成功答案的过滤方式，本文的变化是：将过程奖励定义为 prover 衡量的“进展”，训练 Process Advantage Verifier，以提高搜索与在线 RL 的效率。

可复用的新意在于把生成、选择或验证与保留下来的推理轨迹连成一条可审计链路；通用采样、搜索、SFT 或最终答案评测并不是本文独有的新组件。

## 6. 局限：弱点或隐藏假设是什么？

进展估计继承所选 prover 的方差与偏差。弱 prover 只有在错误与基础策略互补时才有帮助。

若省略 rollout 预算与 prover 调用量，搜索和 RL 收益会被误归因。

## 7. 用途：我可以如何使用这篇论文？

PAV 分数引导测试时搜索，并为在线策略优化提供密集奖励；实验还研究 prover 强度与计算效率。构建数据集时，应同时保留 accepted/rejected candidate 与承载反馈的字段。

训练时要区分 SFT 目标、verifier 样本和 on-policy RL rollout。

## 8. 阅读笔记：应该记住什么？

每个候选由哪个模型或教师 checkpoint 生成？每个提示使用多少候选、续写或搜索节点？

是否公开被拒轨迹，还是只公开最终选择？

## 9. 引用

临时引用，人工 review 后替换为官方 BibTeX：

```bibtex
@misc{rewarding_progress_scaling_automated_process_verifiers_for_llm_reasoning_2024,
  title = {Rewarding Progress: Scaling Automated Process Verifiers for LLM Reasoning},
  author = {Amrith Setlur and Chirag Nagpal and Adam Fisch and Xinyang Geng and Jacob Eisenstein and Rishabh Agarwal and Alekh Agarwal and Jonathan Berant and Aviral Kumar},
  year = {2024},
  howpublished = {ICLR}
}
```
