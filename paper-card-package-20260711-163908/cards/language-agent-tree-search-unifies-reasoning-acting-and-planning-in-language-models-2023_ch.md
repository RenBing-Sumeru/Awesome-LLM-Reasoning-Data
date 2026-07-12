# 论文卡片：Language Agent Tree Search Unifies Reasoning Acting and Planning in Language Models

> **一句话评价：** LATS 将 MCTS、语言模型价值估计、自我反思和环境反馈合成一棵 Agent 轨迹搜索树。
> **阅读优先级：** 可读
> **论文类型：** 推理数据 / construction_recipe, agent_environment论文
> **知识点分类：** Rollout, Search, and Test-Time Trace Data
> **适合读者：** 适合研究 rollout、搜索轨迹、验证器和 post-training 数据谱系的读者。
> **置信度：** 高
> **年份 / 来源：** 2023 · arXiv
> **作者：** Andy Zhou, Kai Yan, Michal Shlapentokh-Rothman, Haohan Wang, Yu-Xiong Wang
> **机构：** University of Illinois Urbana-Champaign · Lapis Labs
> **链接：** [Paper](https://arxiv.org/abs/2310.04406) · [Code](https://github.com/lapisrocks/LanguageAgentTreeSearch)
> **Ask the Atlas：** [解释](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=language-agent-tree-search-unifies-reasoning-acting-and-planning-in-language-models-2023&mode=explain) · [审计](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=language-agent-tree-search-unifies-reasoning-acting-and-planning-in-language-models-2023&mode=audit) · [对比](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=language-agent-tree-search-unifies-reasoning-acting-and-planning-in-language-models-2023&mode=compare)

---

## 1. 问题：这篇论文想回答什么问题？

论文关注语言 Agent 如何在可交互环境中联合进行推理、行动、规划与回溯。

## 2. 核心思想：这篇论文的主要贡献是什么？

LATS 将 MCTS、语言模型价值估计、自我反思和环境反馈合成一棵 Agent 轨迹搜索树。

## 3. 方法：它是怎么工作的？

Agent 提议动作，环境返回观察与结果，价值模型和反思指导 MCTS 扩展、回访和选择完整轨迹。

## 4. 证据：为什么应该相信它？

代码、交互问答、网页和数学任务提供多样证据，但动态环境和不同交互预算会影响可比性。

## 5. 新意：相比已有工作新在哪里？

它把搜索节点从“思维”扩展到真实环境中的观察—动作—反馈 episode。

## 6. 局限：弱点或隐藏假设是什么？

环境状态可能不可重放，LM 自评和反思可能看似合理却不提升成功率，搜索成本也可能主导结果。

## 7. 用途：我可以如何使用这篇论文？

适合构造 Agent 搜索轨迹数据；必须固定环境、工具 schema、交互预算并保留失败分支。

## 8. 阅读笔记：应该记住什么？

一个可复用样本是整棵带环境反馈的 episode/tree，而不是最终动作或成功答案。

## 9. 引用

临时引用，人工 review 后替换为官方 BibTeX：

```bibtex
@misc{language_agent_tree_search_unifies_reasoning_acting_and_planning_in_language_models_2023,
  title = {Language Agent Tree Search Unifies Reasoning Acting and Planning in Language Models},
  author = {Andy Zhou and Kai Yan and Michal Shlapentokh-Rothman and Haohan Wang and Yu-Xiong Wang},
  year = {2023},
  howpublished = {arXiv}
}
```
