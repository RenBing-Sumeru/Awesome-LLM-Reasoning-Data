# 论文卡片：ReST-MCTS*

> **一句话评价：** 核心对象是带节点状态、候选步骤、过程价值、最终答案和正确性结果的 MCTS 搜索树。
> **阅读优先级：** 可读
> **论文类型：** 推理数据 / process_supervision, construction_recipe, scaling_study论文
> **知识点分类：** Rollout, Search, and Test-Time Trace Data
> **适合读者：** 适合研究 rollout、搜索轨迹、验证器和 post-training 数据谱系的读者。
> **置信度：** 高
> **年份 / 来源：** 2024 · NeurIPS
> **作者：** Dan Zhang, Sining Zhoubian, Ziniu Hu, Yisong Yue, Yuxiao Dong, Jie Tang
> **机构：** The Knowledge Engineering Group (KEG), Tsinghua University · California Institute of Technology
> **链接：** [Paper](https://arxiv.org/abs/2406.03816) · [DOI](https://doi.org/10.48550/arXiv.2406.03816) · [Code](https://github.com/THUDM/ReST-MCTS) · [Data](https://huggingface.co/datasets/zd21/ReST-MCTS-PRM-0th) · [Project](https://rest-mcts.github.io/)
> **Ask the Atlas：** [解释](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=rest-mcts-2024&mode=explain) · [审计](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=rest-mcts-2024&mode=audit) · [对比](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=rest-mcts-2024&mode=compare)

---

## 1. 问题：这篇论文想回答什么问题？

论文研究如何用过程奖励引导树搜索，并把搜索得到的推理轨迹重新用于自训练。

## 2. 核心思想：这篇论文的主要贡献是什么？

核心对象是带节点状态、候选步骤、过程价值、最终答案和正确性结果的 MCTS 搜索树。

## 3. 方法：它是怎么工作的？

策略模型扩展自然语言推理节点，PRM/价值模型指导选择，终局答案检查产生结果，并反推步骤级训练目标。

## 4. 证据：为什么应该相信它？

论文在数学与科学推理任务上展示搜索和自训练收益，但结论需与相同采样预算的基线比较。

## 5. 新意：相比已有工作新在哪里？

它把搜索轨迹同时转成策略训练数据与过程奖励目标，连接了 TTC 和 post-training。

## 6. 局限：弱点或隐藏假设是什么？

自举式 PRM 可能放大早期错误；若不公开失败分支、节点值和预算，就难以归因收益。

## 7. 用途：我可以如何使用这篇论文？

可用于设计搜索生成数据和 PRM 自训练流水线，需保存树结构、价值来源与每轮策略版本。

## 8. 阅读笔记：应该记住什么？

应把数据生成器、过程验证器和搜索预算拆开审计，避免把 scaffold 增益误认为模型能力。

## 9. 引用

临时引用，人工 review 后替换为官方 BibTeX：

```bibtex
@misc{rest_mcts_2024,
  title = {ReST-MCTS*},
  author = {Dan Zhang and Sining Zhoubian and Ziniu Hu and Yisong Yue and Yuxiao Dong and Jie Tang},
  year = {2024},
  howpublished = {NeurIPS}
}
```
