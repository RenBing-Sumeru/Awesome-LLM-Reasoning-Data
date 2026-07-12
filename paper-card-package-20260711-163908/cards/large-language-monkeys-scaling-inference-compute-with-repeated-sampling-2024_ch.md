# 论文卡片：Large Language Monkeys: Scaling Inference Compute with Repeated Sampling

> **一句话评价：** 核心贡献是跨数学、代码、形式化证明和仓库修复任务系统比较 pass@k、覆盖率、验证器与选择器。
> **阅读优先级：** 可读
> **论文类型：** 推理数据 / scaling_study, construction_recipe论文
> **知识点分类：** Rollout, Search, and Test-Time Trace Data
> **适合读者：** 适合研究 rollout、搜索轨迹、验证器和 post-training 数据谱系的读者。
> **置信度：** 高
> **年份 / 来源：** 2024 · arXiv preprint arXiv:2407.21787
> **作者：** Bradley Brown, Jordan Juravsky, Ryan Ehrlich, Ronald Clark, Quoc V. Le, Christopher Ré, Azalia Mirhoseini
> **机构：** Department of Computer Science, Stanford University · University of Oxford · Google DeepMind
> **链接：** [Paper](https://arxiv.org/abs/2407.21787)
> **Ask the Atlas：** [解释](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=large-language-monkeys-scaling-inference-compute-with-repeated-sampling-2024&mode=explain) · [审计](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=large-language-monkeys-scaling-inference-compute-with-repeated-sampling-2024&mode=audit) · [对比](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=large-language-monkeys-scaling-inference-compute-with-repeated-sampling-2024&mode=compare)

---

## 1. 问题：这篇论文想回答什么问题？

论文研究重复采样能否作为统一的推理计算扩展轴，并区分“采到正确解”与“可靠选出正确解”这两个问题。

## 2. 核心思想：这篇论文的主要贡献是什么？

核心贡献是跨数学、代码、形式化证明和仓库修复任务系统比较 pass@k、覆盖率、验证器与选择器。

## 3. 方法：它是怎么工作的？

对每个任务重复采样候选答案、程序、Lean 证明或补丁，记录样本数、计算量、验证结果与最终选择；不同任务由答案检查、单测、Lean 或仓库测试终止。

## 4. 证据：为什么应该相信它？

论文在多类可程序验证任务上报告随采样预算变化的覆盖率，证据适合说明预算规律，但 oracle pass@k 不等于现实可选出的性能。

## 5. 新意：相比已有工作新在哪里？

新意不在重复采样本身，而在跨任务统一刻画采样规模、任务难度、验证器可用性和选择损失。

## 6. 局限：弱点或隐藏假设是什么？

主要风险是把 oracle coverage 当成可部署准确率，以及忽略样本相关性、推理成本和不同任务验证器强弱。

## 7. 用途：我可以如何使用这篇论文？

可用于审计 best-of-N、pass@k 和 TTC 结果，要求同时保存候选池、验证器、选择方法和实际计算预算。

## 8. 阅读笔记：应该记住什么？

记住：更多样本只提高找到解的机会；没有可靠验证或选择器时，覆盖率增益未必能转化为最终性能。

## 9. 引用

临时引用，人工 review 后替换为官方 BibTeX：

```bibtex
@misc{large_language_monkeys_scaling_inference_compute_with_repeated_sampling_2024,
  title = {Large Language Monkeys: Scaling Inference Compute with Repeated Sampling},
  author = {Bradley Brown and Jordan Juravsky and Ryan Ehrlich and Ronald Clark and Quoc V. Le and Christopher Ré and Azalia Mirhoseini},
  year = {2024},
  howpublished = {arXiv preprint arXiv:2407.21787}
}
```
