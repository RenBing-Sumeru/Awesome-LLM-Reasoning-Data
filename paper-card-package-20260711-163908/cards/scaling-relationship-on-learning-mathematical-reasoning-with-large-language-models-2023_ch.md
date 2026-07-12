# 论文卡片：Scaling Relationship on Learning Mathematical Reasoning with Large Language Models

> **一句话评价：** 其核心是 rejection-sampling fine-tuning：生成多条数学推理，用最终答案检查筛出正确路径再做 SFT。
> **阅读优先级：** 可读
> **论文类型：** 推理数据 / construction_recipe, scaling_study论文
> **知识点分类：** Rollout, Search, and Test-Time Trace Data
> **适合读者：** 适合研究 rollout、搜索轨迹、验证器和 post-training 数据谱系的读者。
> **置信度：** 高
> **年份 / 来源：** 2023 · arXiv
> **作者：** Zheng Yuan, Hongyi Yuan, Chengpeng Li, Guanting Dong, Keming Lu, Chuanqi Tan, Chang Zhou, Jingren Zhou
> **机构：** Alibaba DAMO Academy
> **链接：** [Paper](https://arxiv.org/abs/2308.01825) · [DOI](https://doi.org/10.48550/arXiv.2308.01825) · [Code](https://github.com/OFA-Sys/gsm8k-ScRel)
> **Ask the Atlas：** [解释](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=scaling-relationship-on-learning-mathematical-reasoning-with-large-language-models-2023&mode=explain) · [审计](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=scaling-relationship-on-learning-mathematical-reasoning-with-large-language-models-2023&mode=audit) · [对比](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=scaling-relationship-on-learning-mathematical-reasoning-with-large-language-models-2023&mode=compare)

---

## 1. 问题：这篇论文想回答什么问题？

论文研究数学推理中监督数据规模、生成数据规模和模型质量之间的关系。

## 2. 核心思想：这篇论文的主要贡献是什么？

其核心是 rejection-sampling fine-tuning：生成多条数学推理，用最终答案检查筛出正确路径再做 SFT。

## 3. 方法：它是怎么工作的？

对每道题采样多条 rationale，抽取最终答案并程序检查，保留通过者，同时记录来源模型与候选池规模。

## 4. 证据：为什么应该相信它？

规模实验说明正确生成轨迹可提升训练，但答案正确并不能保证中间推理无捷径或错误。

## 5. 新意：相比已有工作新在哪里？

它把 RFT 的候选池、接受率和来源模型明确成可分析的数据扩展变量。

## 6. 局限：弱点或隐藏假设是什么？

只发布保留样本会隐藏选择偏差；答案抽取、重复路径和 benchmark 污染也可能夸大效果。

## 7. 用途：我可以如何使用这篇论文？

适合构造数学 RFT 数据与研究数据 scaling；需保留被拒候选、检查器和每题采样预算。

## 8. 阅读笔记：应该记住什么？

关键数据对象不是“正确解”本身，而是问题—候选 rationale—答案检查—保留决策的完整链路。

## 9. 引用

临时引用，人工 review 后替换为官方 BibTeX：

```bibtex
@misc{scaling_relationship_on_learning_mathematical_reasoning_with_large_language_models_2023,
  title = {Scaling Relationship on Learning Mathematical Reasoning with Large Language Models},
  author = {Zheng Yuan and Hongyi Yuan and Chengpeng Li and Guanting Dong and Keming Lu and Chuanqi Tan and Chang Zhou and Jingren Zhou},
  year = {2023},
  howpublished = {arXiv}
}
```
