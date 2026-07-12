# 论文卡片：Math-Shepherd: Verify and Reinforce LLMs Step-by-step without Human Annotations

> **一句话评价：** 利用 Monte Carlo 续写与最终答案检查自动生成步骤标签，用于 PRM 训练、候选重排和逐步 PPO。
> **阅读优先级：** 可读
> **论文类型：** 推理数据 / process_supervision, verifier_reward, construction_recipe论文
> **知识点分类：** Rollout, Search, and Test-Time Trace Data
> **适合读者：** 适合研究 rollout、搜索轨迹、验证器、拒绝采样与 post-training 数据谱系的读者。
> **置信度：** 高
> **年份 / 来源：** 2023 · ACL
> **作者：** Peiyi Wang, Lei Li, Zhihong Shao, Runxin Xu, Damai Dai, Yifei Li, Deli Chen, Yu Wu, Zhifang Sui
> **机构：** Peking University · DeepSeek-AI
> **链接：** [Paper](https://arxiv.org/abs/2312.08935) · [DOI](https://doi.org/10.48550/arXiv.2312.08935) · [Data](https://huggingface.co/datasets/peiyi9979/Math-Shepherd)
> **Ask the Atlas：** [解释](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=math-shepherd-2023&mode=explain) · [审计](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=math-shepherd-2023&mode=audit) · [对比](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=math-shepherd-2023&mode=compare)

---

## 1. 问题：这篇论文想回答什么问题？

利用 Monte Carlo 续写与最终答案检查自动生成步骤标签，用于 PRM 训练、候选重排和逐步 PPO。 原文界定的问题是：Official benchmark and training tasks described in the primary paper.

一个可复用记录包括：problem or prompt, candidate rollout or reasoning state, feedback or verifier signal, sampling or search metadata, retention or selection decision, final answer or terminal outcome。

## 2. 核心思想：这篇论文的主要贡献是什么？

利用 Monte Carlo 续写与最终答案检查自动生成步骤标签，用于 PRM 训练、候选重排和逐步 PPO。

核心机制是：Generate candidate solutions, split them into steps, sample continuations from prefixes, check terminal answers, derive process labels, train Math-Shepherd, then use it for reranking or PPO. 反馈契约是：final-answer correctness of sampled continuations is aggregated into process supervision for each reasoning step.

## 3. 方法：它是怎么工作的？

生成与搜索流程是：The policy or teacher model generates candidate reasoning traces. 采样或搜索协议是：Multiple candidates, continuations, or search states are generated and retained with their feedback-bearing lineage. 筛选规则是：Generate candidate solutions, split them into steps, sample continuations from prefixes, check terminal answers, derive process labels, train Math-Shepherd, then use it for reranking or PPO.

最终记录包含：problem or prompt, candidate rollout or reasoning state, feedback or verifier signal, sampling or search metadata, retention or selection decision, final answer or terminal outcome。论文报告的用途包括 process supervision, reward modeling, rlvr, test time compute。

## 4. 证据：为什么应该相信它？

论文在 GSM8K 与 MATH 上比较基础模型、验证和逐步 PPO，并发布 Math-Shepherd 数据集。这些证据应视为生成器质量、反馈质量、数据筛选与计算量的联合测量。

只有在样本数、验证器调用、token 上限和策略 checkpoint 对齐时，比较才可解释。

## 5. 新意：相比已有工作新在哪里？

相比单路径生成、best-of-N 和只保留最终成功答案的过滤方式，本文的变化是：利用 Monte Carlo 续写与最终答案检查自动生成步骤标签，用于 PRM 训练、候选重排和逐步 PPO。

可复用的新意在于把生成、选择或验证与保留下来的推理轨迹连成一条可审计链路；通用采样、搜索、SFT 或最终答案评测并不是本文独有的新组件。

## 6. 局限：弱点或隐藏假设是什么？

Monte Carlo 标签强烈依赖续写次数与策略强度。局部错误但仍可恢复的前缀可能被标为正例。

答案匹配无法证明中间推导忠实。

## 7. 用途：我可以如何使用这篇论文？

自动标注的前缀用于训练 PRM；PRM 为 PPO 提供密集奖励，并在推理时为多个完整输出评分。构建数据集时，应同时保留 accepted/rejected candidate 与承载反馈的字段。

训练时要区分 SFT 目标、verifier 样本和 on-policy RL rollout。

## 8. 阅读笔记：应该记住什么？

每个候选由哪个模型或教师 checkpoint 生成？每个提示使用多少候选、续写或搜索节点？

是否公开被拒轨迹，还是只公开最终选择？

## 9. 引用

临时引用，人工 review 后替换为官方 BibTeX：

```bibtex
@misc{math_shepherd_2023,
  title = {Math-Shepherd: Verify and Reinforce LLMs Step-by-step without Human Annotations},
  author = {Peiyi Wang and Lei Li and Zhihong Shao and Runxin Xu and Damai Dai and Yifei Li and Deli Chen and Yu Wu and Zhifang Sui},
  year = {2023},
  howpublished = {ACL}
}
```
