# 论文卡片：HyperTree Proof Search for Neural Theorem Proving

> **一句话评价：** 受 AlphaZero 启发的 HyperTree Proof Search 从内核检查的 AND/OR 证明搜索中在线学习。
> **阅读优先级：** 可读
> **论文类型：** 数据构造 / 过程监督 / 扩展规律与计算预算论文
> **知识点分类：** Rollout, Search, and Test-Time Trace Data
> **适合读者：** 适合研究树搜索轨迹、验证器、选择器、搜索派生训练数据与测试时计算的读者。
> **置信度：** 高
> **年份 / 来源：** 2022 · NeurIPS
> **作者：** Guillaume Lample, Marie-Anne Lachaux, Thibaut Lavril, Xavier Martinet, Amaury Hayat, Gabriel Ebner, Aurélien Rodriguez, Timothée Lacroix
> **机构：** Meta AI
> **链接：** [Paper](https://arxiv.org/abs/2205.11491) · [DOI](https://doi.org/10.48550/arXiv.2205.11491) · [Code](https://github.com/facebookresearch/Evariste) · [Data](https://github.com/facebookresearch/Evariste/tree/main/formal) · [Project](https://openreview.net/forum?id=J4pX8Q8cxHH)
> **Ask the Atlas：** [解释](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=hypertree-proof-search-for-neural-theorem-proving-2022&mode=explain) · [审计](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=hypertree-proof-search-for-neural-theorem-proving-2022&mode=audit) · [对比](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=hypertree-proof-search-for-neural-theorem-proving-2022&mode=compare)

---

## 1. 问题：这篇论文想回答什么问题？

受 AlphaZero 启发的 HyperTree Proof Search 从内核检查的 AND/OR 证明搜索中在线学习。 原文界定的问题是：Formal proofs branch into tactics that may create several dependent subgoals, so an ordinary sequence or single-goal tree loses essential structure. HTPS asks how a neural prover can search this hyper-tree and learn online from previously unsuccessful theorem searches.

一个可复用记录包括：formal theorem, accessible premises, proof state, tactic action, multiple child subgoals, AND/OR hyper-tree edge, policy/value estimate, kernel response, solved/failed proof, online-training example。

## 2. 核心思想：这篇论文的主要贡献是什么？

受 AlphaZero 启发的 HyperTree Proof Search 从内核检查的 AND/OR 证明搜索中在线学习。

核心机制是：A transformer proposes tactics and estimates proof progress. HTPS expands hyper-tree nodes whose tactics may create several subgoals, propagates solved and value information, and converts proof-search experience into online policy/value updates. 反馈契约是：Metamath, Lean, or equivalent formal kernels check tactics and proof closure; HTPS policy/value estimates and AlphaZero-style search statistics choose expansions.

## 3. 方法：它是怎么工作的？

生成与搜索流程是：A transformer proposes tactics and estimates proof progress. HTPS expands hyper-tree nodes whose tactics may create several subgoals, propagates solved and value information, and converts proof-search experience into online policy/value updates. 采样或搜索协议是：Tree search over partial reasoning or proof states; pin the exact node, rollout, token, and verifier-call budget per experiment. 筛选规则是：Retain or prefer trajectories and steps supported by search values and the paper's verifier contract.

最终记录包含：formal theorem, accessible premises, proof state, tactic action, multiple child subgoals, AND/OR hyper-tree edge, policy/value estimate, kernel response, solved/failed proof, online-training example。论文报告的用途包括 process supervision, preference learning, test time compute。

## 4. 证据：为什么应该相信它？

在 Metamath 与 Lean 类环境报告收益，并消融超树搜索和在线学习；成功证明均可由形式内核重放。证据的可信度还来自成功证明可被 Metamath 或 Lean 内核重放；性能表必须与搜索节点数、前提集合、策略价值 checkpoint 和在线更新轮次共同解读。

## 5. 新意：相比已有工作新在哪里？

相比单路径生成、best-of-N 和只保留最终成功答案的过滤方式，本文的变化是：受 AlphaZero 启发的 HyperTree Proof Search 从内核检查的 AND/OR 证明搜索中在线学习。

可复用的新意在于把生成、选择或验证与保留下来的推理轨迹连成一条可审计链路；通用采样、搜索、SFT 或最终答案评测并不是本文独有的新组件。

## 6. 局限：弱点或隐藏假设是什么？

官方仓库并非开箱即用，部分内部依赖被移除；代码多为非商业许可；未打包发布完整在线轨迹，结果依赖系统版本与前提集。若复用官方 Evariste 仓库，还需核对已移除的内部依赖、非商业许可、形式系统版本与前提库；缺少完整失败超树会限制选择器和价值估计审计。

## 7. 用途：我可以如何使用这篇论文？

可用于设计 AND/OR 证明轨迹 schema，并区分神经搜索估计与内核正确性。推荐的数据 schema 应保存一个 tactic 产生的全部子目标和 AND/OR 超边，并将策略概率、价值、访问次数、内核响应、成功路径及失败兄弟分支绑定到同一搜索实例。

## 8. 阅读笔记：应该记住什么？

一个 tactic 可产生多个必须同时解决的子目标；必须保留完整超边，不能只存最终路径。核心记忆点是一个 tactic 可能同时生成多个必须全部闭合的子目标；若只导出最终证明序列，就会丢失 HTPS 相比平坦树搜索最重要的训练和审计信息。

## 9. 引用

临时引用，人工 review 后替换为官方 BibTeX：

```bibtex
@misc{hypertree_proof_search_for_neural_theorem_proving_2022,
  title = {HyperTree Proof Search for Neural Theorem Proving},
  author = {Guillaume Lample and Marie-Anne Lachaux and Thibaut Lavril and Xavier Martinet and Amaury Hayat and Gabriel Ebner and Aurélien Rodriguez and Timothée Lacroix},
  year = {2022},
  howpublished = {NeurIPS}
}
```
