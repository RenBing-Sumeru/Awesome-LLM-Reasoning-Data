# 论文卡片：Tree of Thoughts: Deliberate Problem Solving with Large Language Models

> **一句话评价：** Tree of Thoughts 把 CoT 扩展成显式树搜索，让分支数、评估器和回溯都成为 test-time compute 记录。
> **阅读优先级：** 必读
> **论文类型：** 树搜索 / test-time compute scaffold 论文
> **知识点分类：** Rollout, Search, and Test-Time Trace Data
> **适合读者：** 适合关注 search trace、branch budget、self-evaluation 和 agent scaffold 的读者。
> **置信度：** 高
> **年份 / 来源：** 2023 · NeurIPS 2023
> **作者：** Shunyu Yao, Dian Yu, Jeffrey Zhao, Izhak Shafran, Thomas L. Griffiths, Yuan Cao, Karthik Narasimhan
> **机构：** Princeton University · Google DeepMind
> **链接：** [Paper](https://arxiv.org/abs/2305.10601) · [DOI](https://doi.org/10.48550/arXiv.2305.10601) · [Code](https://github.com/princeton-nlp/tree-of-thought-llm)
> **Ask the Atlas：** [解释](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=tree-of-thoughts-2023&mode=explain) · [审计](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=tree-of-thoughts-2023&mode=audit) · [对比](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=tree-of-thoughts-2023&mode=compare)

---

## 1. 问题：这篇论文想回答什么问题？

Tree of Thoughts 关注的是另一类推理阶段计算：不是独立采样很多完整答案，而是在推理过程中保留多个中间状态，像搜索树一样展开、评分和回退。

它适合放在这个方向，因为它把分支数、状态评估、回溯次数都变成了可以记录的推理预算。一个样本应该包含题目、思考节点、分支评分、搜索动作和最终答案。

## 2. 核心思想：这篇论文的主要贡献是什么？

核心思想是把 CoT 的线性链改成树。模型先提出几个可能的中间思路，再用自评或任务检查给这些状态打分，保留有希望的分支继续展开。

这篇的重点不是“提示词更复杂”，而是显式引入搜索框架。它让我们能问清楚：模型能力来自基础模型，还是来自树搜索、分支预算和状态评估器。

## 3. 方法：它是怎么工作的？

输入是需要规划或搜索的任务，例如 Game of 24、创意写作和 Mini Crosswords。系统让模型生成候选思路，评估每个中间状态，再按搜索策略继续展开或剪枝。

输出是一条搜索轨迹，而不只是最终答案：有哪些分支、每个状态怎么评分、什么时候回溯、最终选了哪条路径。复现时要记录 breadth、depth、评分提示词和总生成次数。

## 4. 证据：为什么应该相信它？

论文在需要规划的任务上报告了明显收益，尤其 Game of 24 这类单条 CoT 很容易走死的任务。

但这些实验也提醒我们，搜索框架本身很强。不同任务的评分函数、分支宽度和停止条件会显著影响结果，所以不能只把收益归因给基础模型。

## 5. 新意：相比已有工作新在哪里？

它的新意是把“思考更久”拆成可审计的搜索动作：展开、评价、剪枝、回溯。相比 self-consistency，它不只是采样多个完整答案，而是在中间步骤做选择。

复用前要检查任务是否太小、评分器是否独立、搜索预算是否和基线对齐。否则树搜索很容易变成给特定任务调框架。

## 6. 局限：弱点或隐藏假设是什么？

主要局限是任务和评分器依赖很强。一个提示词写得好的价值估计器可能比模型本身更关键。小任务集也容易被框架调参吃透。

审计时要分开记录模型调用次数、思考节点数、评分次数和最终答案正确率。只写“用了 ToT”是不够的。

## 7. 用途：我可以如何使用这篇论文？

这篇适合作为搜索轨迹类 TTC 的入口。后续看到 MCTS、分支搜索、反思树或验证器引导搜索，都可以拿它来对齐概念。

工程上可以借它的日志格式：把中间状态和评分存下来。没有搜索轨迹，就很难判断搜索到底在帮忙还是在浪费预算。

## 8. 阅读笔记：应该记住什么？

- ToT 的单位是思考节点，不是完整答案。
- 状态评估器是验证器的一种弱形式。
- 分支数和深度就是推理预算。
- 小任务上的收益不能直接外推到开放任务。

## 9. 引用

临时引用，人工 review 后替换为官方 BibTeX：

```bibtex
@misc{tree_of_thoughts_2023,
  title = {Tree of Thoughts: Deliberate Problem Solving with Large Language Models},
  year = {2023},
  howpublished = {arXiv:2305.10601},
  note = {NeurIPS 2023; needs BibTeX verification}
}
```
