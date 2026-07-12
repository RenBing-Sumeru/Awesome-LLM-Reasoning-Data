# 论文卡片：Reinforced Self-Training (ReST) for Language Modeling

> **一句话评价：** ReST 由 grow 阶段采集当前策略候选，再由 improve 阶段复用离线批次更新策略。
> **阅读优先级：** 可读
> **论文类型：** 推理数据 / construction_recipe论文
> **知识点分类：** Rollout, Search, and Test-Time Trace Data
> **适合读者：** 适合研究 rollout、搜索轨迹、验证器和 post-training 数据谱系的读者。
> **置信度：** 高
> **年份 / 来源：** 2023 · arXiv
> **作者：** Caglar Gulcehre, Tom Le Paine, Srivatsan Srinivasan, Ksenia Konyushkova, Lotte Weerts, Abhishek Sharma, Aditya Siddhant, Alex Ahern, Miaosen Wang, Chenjie Gu, Wolfgang Macherey, Arnaud Doucet, Orhan Firat, Nando de Freitas
> **机构：** Google DeepMind · Google Research
> **链接：** [Paper](https://arxiv.org/abs/2308.08998) · [DOI](https://doi.org/10.48550/arXiv.2308.08998)
> **Ask the Atlas：** [解释](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=reinforced-self-training-rest-for-language-modeling-2023&mode=explain) · [审计](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=reinforced-self-training-rest-for-language-modeling-2023&mode=audit) · [对比](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=reinforced-self-training-rest-for-language-modeling-2023&mode=compare)

---

## 1. 问题：这篇论文想回答什么问题？

论文研究如何交替生成候选数据与离线优化，在不持续在线交互的情况下进行自训练。

## 2. 核心思想：这篇论文的主要贡献是什么？

ReST 由 grow 阶段采集当前策略候选，再由 improve 阶段复用离线批次更新策略。

## 3. 方法：它是怎么工作的？

每轮记录输入、策略生成候选、质量或奖励信号、策略版本与 grow 轮次，离线 RL 在同一批次上改进模型。

## 4. 证据：为什么应该相信它？

机器翻译实验展示循环有效性，但质量信号和任务设置不能直接等同于通用推理验证器。

## 5. 新意：相比已有工作新在哪里？

它清晰拆分了数据生成批次、质量判断和离线优化器，是后续自训练方法的重要基线。

## 6. 局限：弱点或隐藏假设是什么？

旧批次会随策略更新产生分布偏移，奖励噪声和重复复用也可能放大偏差。

## 7. 用途：我可以如何使用这篇论文？

可用于设计生成—筛选—优化循环；应固定每轮生成策略、奖励模型、数据去重和复用次数。

## 8. 阅读笔记：应该记住什么？

分析 ReST 时要分别归因候选池质量、筛选信号和离线优化，而不是笼统称为自训练收益。

## 9. 引用

临时引用，人工 review 后替换为官方 BibTeX：

```bibtex
@misc{reinforced_self_training_rest_for_language_modeling_2023,
  title = {Reinforced Self-Training (ReST) for Language Modeling},
  author = {Caglar Gulcehre and Tom Le Paine and Srivatsan Srinivasan and Ksenia Konyushkova and Lotte Weerts and Abhishek Sharma and Aditya Siddhant and Alex Ahern and Miaosen Wang and Chenjie Gu and Wolfgang Macherey and Arnaud Doucet and Orhan Firat and Nando de Freitas},
  year = {2023},
  howpublished = {arXiv}
}
```
