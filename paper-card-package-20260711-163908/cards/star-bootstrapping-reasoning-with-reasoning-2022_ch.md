# 论文卡片：STaR: Bootstrapping Reasoning With Reasoning

> **一句话评价：** 迭代生成推理轨迹，按最终答案正确性筛选，并用保留的自生成 rationale 继续监督微调。
> **阅读优先级：** 可读
> **论文类型：** 推理数据 / construction_recipe, model_report论文
> **知识点分类：** Rollout, Search, and Test-Time Trace Data
> **适合读者：** 适合研究 rollout、搜索轨迹、验证器、拒绝采样与 post-training 数据谱系的读者。
> **置信度：** 高
> **年份 / 来源：** 2022 · NeurIPS
> **作者：** Eric Zelikman, Yuhuai Wu, Jesse Mu, Noah D. Goodman
> **机构：** Stanford University
> **链接：** [Paper](https://arxiv.org/abs/2203.14465) · [DOI](https://doi.org/10.48550/arXiv.2203.14465) · [Code](https://github.com/ezelikman/STaR)
> **Ask the Atlas：** [解释](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=star-bootstrapping-reasoning-with-reasoning-2022&mode=explain) · [审计](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=star-bootstrapping-reasoning-with-reasoning-2022&mode=audit) · [对比](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=star-bootstrapping-reasoning-with-reasoning-2022&mode=compare)

---

## 1. 问题：这篇论文想回答什么问题？

迭代生成推理轨迹，按最终答案正确性筛选，并用保留的自生成 rationale 继续监督微调。 原文界定的问题是：Official benchmark and training tasks described in the primary paper.

一个可复用记录包括：problem or prompt, candidate rollout or reasoning state, feedback or verifier signal, sampling or search metadata, retention or selection decision, final answer or terminal outcome。

## 2. 核心思想：这篇论文的主要贡献是什么？

迭代生成推理轨迹，按最终答案正确性筛选，并用保留的自生成 rationale 继续监督微调。

核心机制是：Generate rationales from a few demonstrations, check the resulting answers, rationalize failures with the known answer, retain successful traces, fine-tune, and repeat. 反馈契约是：dataset ground-truth answer matching; failed examples may be regenerated while conditioning on the correct answer.

## 3. 方法：它是怎么工作的？

生成与搜索流程是：The policy or teacher model generates candidate reasoning traces. 采样或搜索协议是：Multiple candidates, continuations, or search states are generated and retained with their feedback-bearing lineage. 筛选规则是：Generate rationales from a few demonstrations, check the resulting answers, rationalize failures with the known answer, retain successful traces, fine-tune, and repeat.

最终记录包含：problem or prompt, candidate rollout or reasoning state, feedback or verifier signal, sampling or search metadata, retention or selection decision, final answer or terminal outcome。论文报告的用途包括 sft, distillation。

## 4. 证据：为什么应该相信它？

在算术和常识任务上报告迭代收益，并消融 rationalization；官方代码公开循环。论文在算术与常识任务上报告多轮自举提升，并通过 rationalization 消融说明失败样本恢复的作用；证据应与每轮接受率和生成模型版本一起解释。

## 5. 新意：相比已有工作新在哪里？

相比单路径生成、best-of-N 和只保留最终成功答案的过滤方式，本文的变化是：迭代生成推理轨迹，按最终答案正确性筛选，并用保留的自生成 rationale 继续监督微调。

可复用的新意在于把生成、选择或验证与保留下来的推理轨迹连成一条可审计链路；通用采样、搜索、SFT 或最终答案评测并不是本文独有的新组件。

## 6. 局限：弱点或隐藏假设是什么？

答案条件可能泄漏目标；终答过滤会隐藏错误推理；拒绝多样性常被丢弃；收益依赖种子示范与采样器。答案条件 rationalization 可能把目标泄漏进推理，终答过滤也会保留碰巧正确的错误链；若只保存接受样本，还会失去拒绝分布与选择偏差信息。

## 7. 用途：我可以如何使用这篇论文？

可作为迭代自训练的基础谱系 schema：不能省略策略轮次、接受原因或答案条件标志。复用 STaR 时应保存问题、自由生成 rationale、预测答案、正确标签、是否答案条件 rationalize、保留决定、迭代编号和生成 checkpoint。

## 8. 阅读笔记：应该记住什么？

核心数据干预是迭代过滤；rationalized 轨迹必须与自由生成成功轨迹区分。必须区分自由生成成功轨迹与给定正确答案后生成的 rationalized 轨迹；STaR 的核心不是静态 CoT 数据，而是 generate-check-retain-train 的迭代数据谱系。

## 9. 引用

临时引用，人工 review 后替换为官方 BibTeX：

```bibtex
@misc{star_bootstrapping_reasoning_with_reasoning_2022,
  title = {STaR: Bootstrapping Reasoning With Reasoning},
  author = {Eric Zelikman and Yuhuai Wu and Jesse Mu and Noah D. Goodman},
  year = {2022},
  howpublished = {NeurIPS}
}
```
