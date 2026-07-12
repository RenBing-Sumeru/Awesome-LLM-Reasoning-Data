# 论文卡片：Monte Carlo Tree Search Boosts Reasoning via Iterative Preference Learning

> **一句话评价：** 在线策略 MCTS 将终局验证和步骤自评转成步骤级偏好对，用于迭代 DPO。
> **阅读优先级：** 可读
> **论文类型：** 数据构造 / 过程监督 / 扩展规律与计算预算论文
> **知识点分类：** Rollout, Search, and Test-Time Trace Data
> **适合读者：** 适合研究树搜索轨迹、验证器、选择器、搜索派生训练数据与测试时计算的读者。
> **置信度：** 高
> **年份 / 来源：** 2024 · arXiv
> **作者：** Yuxi Xie, Anirudh Goyal, Wenyue Zheng, Min-Yen Kan, Timothy P. Lillicrap, Kenji Kawaguchi, Michael Shieh
> **机构：** National University of Singapore · Google DeepMind
> **链接：** [Paper](https://arxiv.org/abs/2405.00451) · [DOI](https://doi.org/10.48550/arXiv.2405.00451) · [Code](https://github.com/YuxiXie/MCTS-DPO) · [Data](https://github.com/YuxiXie/MCTS-DPO#dataset-download)
> **Ask the Atlas：** [解释](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=monte-carlo-tree-search-boosts-reasoning-via-iterative-preference-learning-2024&mode=explain) · [审计](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=monte-carlo-tree-search-boosts-reasoning-via-iterative-preference-learning-2024&mode=audit) · [对比](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=monte-carlo-tree-search-boosts-reasoning-via-iterative-preference-learning-2024&mode=compare)

---

## 1. 问题：这篇论文想回答什么问题？

在线策略 MCTS 将终局验证和步骤自评转成步骤级偏好对，用于迭代 DPO。 原文界定的问题是：Outcome rewards are sparse, while conventional DPO sees response-level pairs and misses the branching evidence inside search. This work asks whether MCTS look-ahead can collect on-policy alternatives and translate instance-level success into granular preferences.

一个可复用记录包括：reasoning prompt, partial state, candidate next steps sharing a parent, search visit/value, rollout outcome, step self-evaluation, chosen/rejected pair, policy iteration, inference budget。

## 2. 核心思想：这篇论文的主要贡献是什么？

在线策略 MCTS 将终局验证和步骤自评转成步骤级偏好对，用于迭代 DPO。

核心机制是：The current policy expands an MCTS tree. Outcome validation and stepwise self-evaluation update node quality; alternatives are converted to step-level preference examples and the policy is updated with DPO before the next collection round. 反馈契约是：Task answer validation supplies terminal evidence, while the language model's stepwise self-evaluation provides a softer local judge; MCTS statistics select nodes and determine preferences.

## 3. 方法：它是怎么工作的？

生成与搜索流程是：The current policy expands an MCTS tree. Outcome validation and stepwise self-evaluation update node quality; alternatives are converted to step-level preference examples and the policy is updated with DPO before the next collection round. 采样或搜索协议是：Tree search over partial reasoning or proof states; pin the exact node, rollout, token, and verifier-call budget per experiment. 筛选规则是：Retain or prefer trajectories and steps supported by search values and the paper's verifier contract.

最终记录包含：reasoning prompt, partial state, candidate next steps sharing a parent, search visit/value, rollout outcome, step self-evaluation, chosen/rejected pair, policy iteration, inference budget。论文报告的用途包括 process supervision, preference learning, test time compute。

## 4. 证据：为什么应该相信它？

在数学推理上报告迭代收益，并消融搜索与偏好构造；官方仓库提供实现和数据链接。论文的迭代性能提升应结合搜索和偏好构造消融理解；官方 MCTS-DPO 仓库提供实现与数据入口，但仍要确认发布内容是否包含每轮完整搜索树和拒绝分支。

## 5. 新意：相比已有工作新在哪里？

相比单路径生成、best-of-N 和只保留最终成功答案的过滤方式，本文的变化是：在线策略 MCTS 将终局验证和步骤自评转成步骤级偏好对，用于迭代 DPO。

可复用的新意在于把生成、选择或验证与保留下来的推理轨迹连成一条可审计链路；通用采样、搜索、SFT 或最终答案评测并不是本文独有的新组件。

## 6. 局限：弱点或隐藏假设是什么？

自评可能强化共享错误；收益混合了在线数据、DPO 与搜索计算；不同数据集答案检查强度不同；发布日志未必含全部分支。局部自评与生成策略可能共享系统性错误，且迭代收益同时受到更新后策略、更新后数据分布、DPO 与额外 MCTS 计算影响，不能简单归因于某一个组件。

## 7. 用途：我可以如何使用这篇论文？

适合构造保留父状态、终局证据、自评分和采集迭代的兄弟偏好数据。构造搜索派生偏好集时，应为每个 chosen/rejected 对保留共同父状态、两条候选步骤、终局验证结果、自评分、访问价值、策略版本与采集轮次。

## 8. 阅读笔记：应该记住什么？

不要把树派生步骤偏好压成整回答对，也不能省略生成它的策略版本。阅读时重点区分硬终答验证、软步骤自评和 MCTS 统计三个信号；同时记录节点预算与完整 rollout 预算，不能把步骤偏好压缩为普通整回答 DPO 对。

## 9. 引用

临时引用，人工 review 后替换为官方 BibTeX：

```bibtex
@misc{monte_carlo_tree_search_boosts_reasoning_via_iterative_preference_learning_2024,
  title = {Monte Carlo Tree Search Boosts Reasoning via Iterative Preference Learning},
  author = {Yuxi Xie and Anirudh Goyal and Wenyue Zheng and Min-Yen Kan and Timothy P. Lillicrap and Kenji Kawaguchi and Michael Shieh},
  year = {2024},
  howpublished = {arXiv}
}
```
