# 论文卡片：Re-ReST: Reflection-Reinforced Self-Training for Language Agents

> **一句话评价：** Re-ReST 保留初始输出到反馈、反思、修订输出以及是否纳入训练集的完整谱系。
> **阅读优先级：** 可读
> **论文类型：** 推理数据 / construction_recipe论文
> **知识点分类：** Rollout, Search, and Test-Time Trace Data
> **适合读者：** 适合研究 rollout、搜索轨迹、验证器和 post-training 数据谱系的读者。
> **置信度：** 高
> **年份 / 来源：** 2024 · arXiv
> **作者：** Zi-Yi Dou, Cheng-Fu Yang, Xueqing Wu, Kai-Wei Chang, Nanyun Peng
> **机构：** University of California, Los Angeles
> **链接：** [Paper](https://arxiv.org/abs/2406.01495) · [DOI](https://doi.org/10.48550/arXiv.2406.01495) · [Code](https://github.com/PlusLabNLP/Re-ReST)
> **Ask the Atlas：** [解释](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=re-rest-reflection-reinforced-self-training-for-language-agents-2024&mode=explain) · [审计](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=re-rest-reflection-reinforced-self-training-for-language-agents-2024&mode=audit) · [对比](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=re-rest-reflection-reinforced-self-training-for-language-agents-2024&mode=compare)

---

## 1. 问题：这篇论文想回答什么问题？

论文研究如何利用弱 Agent 的失败尝试、外部反馈和反思修订来扩充自训练数据。

## 2. 核心思想：这篇论文的主要贡献是什么？

Re-ReST 保留初始输出到反馈、反思、修订输出以及是否纳入训练集的完整谱系。

## 3. 方法：它是怎么工作的？

Agent 先生成候选，任务环境或质量信号提供反馈，反思器重写低质量样本，再筛选高质量结果进行自训练。

## 4. 证据：为什么应该相信它？

跨问答、序列决策、代码和多模态任务的实验说明方法具有广度，但反馈契约随任务而变化。

## 5. 新意：相比已有工作新在哪里？

它把被拒绝样本转化为有反馈来源的修订数据，而不是简单丢弃失败轨迹。

## 6. 局限：弱点或隐藏假设是什么？

反思器不是验证器，可能把错误包装得更流畅；混合任务信号也让统一质量标准变得困难。

## 7. 用途：我可以如何使用这篇论文？

可用于 Agent 自训练与失败修复数据构造，需保存原始失败、反馈、反思器版本和筛选判定。

## 8. 阅读笔记：应该记住什么？

修订后的正确样本只有连同失败来源和外部反馈一起保存，才具有可审计价值。

## 9. 引用

临时引用，人工 review 后替换为官方 BibTeX：

```bibtex
@misc{re_rest_reflection_reinforced_self_training_for_language_agents_2024,
  title = {Re-ReST: Reflection-Reinforced Self-Training for Language Agents},
  author = {Zi-Yi Dou and Cheng-Fu Yang and Xueqing Wu and Kai-Wei Chang and Nanyun Peng},
  year = {2024},
  howpublished = {arXiv}
}
```
