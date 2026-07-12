# 论文卡片：rStar-Math: Small LLMs Can Master Math Reasoning with Self-Evolved Deep Thinking

> **一句话评价：** MCTS、代码执行验证与过程偏好模型在四轮自演化中共同生成策略轨迹和同父步骤偏好数据。
> **阅读优先级：** 可读
> **论文类型：** 数据构造 / 过程监督 / 扩展规律与计算预算论文
> **知识点分类：** Rollout, Search, and Test-Time Trace Data
> **适合读者：** 适合研究树搜索轨迹、验证器、选择器、搜索派生训练数据与测试时计算的读者。
> **置信度：** 高
> **年份 / 来源：** 2025 · arXiv
> **作者：** Xinyu Guan, Li Lyna Zhang, Yifei Liu, Ning Shang, Youran Sun, Yi Zhu, Fan Yang, Mao Yang
> **机构：** Microsoft Research Asia
> **链接：** [Paper](https://arxiv.org/abs/2501.04519) · [DOI](https://doi.org/10.48550/arXiv.2501.04519) · [Code](https://github.com/microsoft/rStar/tree/rStar-math) · [Data](https://huggingface.co/datasets/ElonTusk2001/rstar_sft) · [Project](https://huggingface.co/datasets/ElonTusk2001/rstar_ppm)
> **Ask the Atlas：** [解释](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=rstar-math-2025&mode=explain) · [审计](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=rstar-math-2025&mode=audit) · [对比](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=rstar-math-2025&mode=compare)

---

## 1. 问题：这篇论文想回答什么问题？

MCTS、代码执行验证与过程偏好模型在四轮自演化中共同生成策略轨迹和同父步骤偏好数据。 原文界定的问题是：Small language models need both stronger search and trustworthy intermediate selection, but superior-model distillation obscures where reasoning capability comes from. rStar-Math studies whether verified MCTS traces can bootstrap both a math policy and its process preference model.

一个可复用记录包括：math question, code-augmented reasoning step, executable snippet and result, MCTS parent/child relation, complete rollout, terminal answer, visit/value statistics, SFT trace, sibling preference pair, evolution round。

## 2. 核心思想：这篇论文的主要贡献是什么？

MCTS、代码执行验证与过程偏好模型在四轮自演化中共同生成策略轨迹和同父步骤偏好数据。

核心机制是：The policy expands code-augmented chains in MCTS, execution and answer checks validate outcomes, and complete trees are converted into successful SFT trajectories plus sibling-step preference pairs for a process preference model. Policy and PPM are retrained and used in the next round. 反馈契约是：A code executor and final-answer checker provide grounded outcome signals; the learned process preference model ranks partial paths and guides later MCTS.

## 3. 方法：它是怎么工作的？

生成与搜索流程是：The policy expands code-augmented chains in MCTS, execution and answer checks validate outcomes, and complete trees are converted into successful SFT trajectories plus sibling-step preference pairs for a process preference model. Policy and PPM are retrained and used in the next round. 采样或搜索协议是：Tree search over partial reasoning or proof states; pin the exact node, rollout, token, and verifier-call budget per experiment. 筛选规则是：Retain or prefer trajectories and steps supported by search values and the paper's verifier contract.

最终记录包含：math question, code-augmented reasoning step, executable snippet and result, MCTS parent/child relation, complete rollout, terminal answer, visit/value statistics, SFT trace, sibling preference pair, evolution round。论文报告的用途包括 process supervision, preference learning, test time compute。

## 4. 证据：为什么应该相信它？

证据应按相同搜索预算解释；只比较单次生成与大预算搜索会高估方法收益。审核时还应区分 oracle coverage、选择后准确率、训练后策略增益和每题实际计算成本。

证据必须在候选数、节点数、token 与 verifier-call 预算匹配时解释。

## 5. 新意：相比已有工作新在哪里？

相比单路径生成、best-of-N 和只保留最终成功答案的过滤方式，本文的变化是：MCTS、代码执行验证与过程偏好模型在四轮自演化中共同生成策略轨迹和同父步骤偏好数据。

可复用的新意在于把生成、选择或验证与保留下来的推理轨迹连成一条可审计链路；通用采样、搜索、SFT 或最终答案评测并不是本文独有的新组件。

## 6. 局限：弱点或隐藏假设是什么？

这些限制直接影响数据质量：若只发布选中路径而不发布失败分支、节点值、访问次数和预算，Card 无法审计选择偏差；若验证器与生成器共享错误，搜索可能稳定放大错误而非纠正错误。选中输出可能隐藏被拒分支、policy-version 漂移与 verifier 分歧。

终局正确不能证明每个中间 rationale、程序或证明步骤忠实。

## 7. 用途：我可以如何使用这篇论文？

推荐的统一记录单位是每个问题一个 search episode，内部保留节点 ID、父子边、动作/步骤文本、模型版本、局部和终局反馈、访问/价值统计、选中路径、停止原因与总成本。SFT、PRM、偏好、RLVR 与评估记录要能区分。

## 8. 阅读笔记：应该记住什么？

阅读时分别标注哪些字段来自官方公开数据，哪些只能由代码重新生成，哪些只在论文图表中描述。若无法取得全树，应把公开工件称为“搜索派生训练数据”，不要误称为完整搜索轨迹数据集。

还要追问：哪些字段存在于发布数据，哪些只能通过代码复现，哪些只写在论文中；训练时与测试时搜索预算必须分开报告。

## 9. 引用

临时引用，人工 review 后替换为官方 BibTeX：

```bibtex
@misc{rstar_math_2025,
  title = {rStar-Math: Small LLMs Can Master Math Reasoning with Self-Evolved Deep Thinking},
  author = {Xinyu Guan and Li Lyna Zhang and Yifei Liu and Ning Shang and Youran Sun and Yi Zhu and Fan Yang and Mao Yang},
  year = {2025},
  howpublished = {arXiv}
}
```
