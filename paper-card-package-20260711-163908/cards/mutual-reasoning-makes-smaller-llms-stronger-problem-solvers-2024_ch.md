# 论文卡片：Mutual Reasoning Makes Smaller LLMs Stronger Problem-Solvers

> **一句话评价：** 生成器小模型用 MCTS 探索多种类人推理动作，另一同级模型依据相互一致性判别完整轨迹。
> **阅读优先级：** 可读
> **论文类型：** 数据构造 / 过程监督 / 扩展规律与计算预算论文
> **知识点分类：** Rollout, Search, and Test-Time Trace Data
> **适合读者：** 适合研究树搜索轨迹、验证器、选择器、搜索派生训练数据与测试时计算的读者。
> **置信度：** 高
> **年份 / 来源：** 2024 · ICLR
> **作者：** Zhenting Qi, Mingyuan Ma, Jiahang Xu, Li Lyna Zhang, Fan Yang, Mao Yang
> **机构：** Microsoft Research Asia
> **链接：** [Paper](https://arxiv.org/abs/2408.06195) · [DOI](https://doi.org/10.48550/arXiv.2408.06195) · [Code](https://github.com/zhentingqi/rStar) · [Data](https://github.com/zhentingqi/rStar/tree/main/data)
> **Ask the Atlas：** [解释](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=mutual-reasoning-makes-smaller-llms-stronger-problem-solvers-2024&mode=explain) · [审计](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=mutual-reasoning-makes-smaller-llms-stronger-problem-solvers-2024&mode=audit) · [对比](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=mutual-reasoning-makes-smaller-llms-stronger-problem-solvers-2024&mode=compare)

---

## 1. 问题：这篇论文想回答什么问题？

生成器小模型用 MCTS 探索多种类人推理动作，另一同级模型依据相互一致性判别完整轨迹。 原文界定的问题是：Small models often explore shallow or repetitive chains, and self-evaluation by the same model is poorly calibrated. rStar asks whether separating generation from peer discrimination can improve MCTS reasoning without fine-tuning or a superior teacher.

一个可复用记录包括：task prompt, MCTS state, human-like reasoning action, generated intermediate state, complete trajectory, generator answer, discriminator reconstruction or verdict, mutual-consistency label, selected path, compute budget。

## 2. 核心思想：这篇论文的主要贡献是什么？

生成器小模型用 MCTS 探索多种类人推理动作，另一同级模型依据相互一致性判别完整轨迹。

核心机制是：A target SLM uses a richer action set inside MCTS to construct diverse trajectories. A second SLM of similar capability independently discriminates candidates; mutually consistent trajectories are favored for the final solution. 反馈契约是：The peer SLM is a model-based discriminator rather than a programmatic verifier. Mutual agreement and search statistics select trajectories; benchmark answer matching evaluates the final output.

## 3. 方法：它是怎么工作的？

生成与搜索流程是：A target SLM uses a richer action set inside MCTS to construct diverse trajectories. A second SLM of similar capability independently discriminates candidates; mutually consistent trajectories are favored for the final solution. 采样或搜索协议是：Tree search over partial reasoning or proof states; pin the exact node, rollout, token, and verifier-call budget per experiment. 筛选规则是：Retain or prefer trajectories and steps supported by search values and the paper's verifier contract.

最终记录包含：task prompt, MCTS state, human-like reasoning action, generated intermediate state, complete trajectory, generator answer, discriminator reconstruction or verdict, mutual-consistency label, selected path, compute budget。论文报告的用途包括 process supervision, preference learning, test time compute。

## 4. 证据：为什么应该相信它？

在五个小模型和五个基准上显著提升，并与 SC、RAP 做 rollout 消融，生成器比较包含 128 样本 SC。除总体准确率外，还应阅读不同 rollout 数量下与 self-consistency、RAP 的比较；其中 128 条随机解答基线与 rStar 的推理轮数并非同一预算口径。

## 5. 新意：相比已有工作新在哪里？

相比单路径生成、best-of-N 和只保留最终成功答案的过滤方式，本文的变化是：生成器小模型用 MCTS 探索多种类人推理动作，另一同级模型依据相互一致性判别完整轨迹。

可复用的新意在于把生成、选择或验证与保留下来的推理轨迹连成一条可审计链路；通用采样、搜索、SFT 或最终答案评测并不是本文独有的新组件。

## 6. 局限：弱点或隐藏假设是什么？

同级模型可能共享错误；一致不等于正确；32 轮与 rollout 不能混用；仓库未必含完整实验树。同级生成器和判别器可能因相似预训练而共享错误，相互一致只表示双方同意而非程序化正确；还需检查官方仓库是否释放完整树、判别提示和随机种子。

## 7. 用途：我可以如何使用这篇论文？

适合记录每条路径的生成器、判别器、动作类型、同级证据与预算。适合建立双模型搜索轨迹格式：每条候选需绑定生成模型、判别模型、动作类型、完整轨迹、重构或判决证据、一致性标签、最终选择与推理调用预算。

## 8. 阅读笔记：应该记住什么？

核心是 mutual consistency 而非程序验证；必须同时报告搜索预算与判别调用数。最重要的概念边界是 mutual consistency 与 correctness 不同；主结果中的 32 轮、MCTS rollout 数和判别器调用数应分别记录，不能合并成单一 N。

## 9. 引用

临时引用，人工 review 后替换为官方 BibTeX：

```bibtex
@misc{mutual_reasoning_makes_smaller_llms_stronger_problem_solvers_2024,
  title = {Mutual Reasoning Makes Smaller LLMs Stronger Problem-Solvers},
  author = {Zhenting Qi and Mingyuan Ma and Jiahang Xu and Li Lyna Zhang and Fan Yang and Mao Yang},
  year = {2024},
  howpublished = {ICLR}
}
```
