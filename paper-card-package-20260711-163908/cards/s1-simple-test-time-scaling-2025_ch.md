# 论文卡片：s1: Simple test-time scaling

> **一句话评价：** 筛选 1,000 条困难、多样且高质量的长推理轨迹用于 SFT，并通过 budget forcing 控制推理计算量。
> **阅读优先级：** 可读
> **论文类型：** 推理数据 / construction_recipe, data_release, scaling_study论文
> **知识点分类：** Rollout, Search, and Test-Time Trace Data
> **适合读者：** 适合研究 rollout、搜索轨迹、验证器、拒绝采样与 post-training 数据谱系的读者。
> **置信度：** 高
> **年份 / 来源：** 2025 · arXiv
> **作者：** Niklas Muennighoff, Zitong Yang, Weijia Shi, Xiang Lisa Li, Li Fei-Fei, Hannaneh Hajishirzi, Luke Zettlemoyer, Percy Liang, Emmanuel Candès, Tatsunori Hashimoto
> **机构：** Stanford University · University of Washington · Allen Institute for AI
> **链接：** [Paper](https://arxiv.org/abs/2501.19393) · [DOI](https://doi.org/10.48550/arXiv.2501.19393) · [Code](https://github.com/simplescaling/s1) · [Data](https://huggingface.co/datasets/simplescaling/s1K) · [Hugging Face](https://huggingface.co/simplescaling/s1-32B)
> **Ask the Atlas：** [解释](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=s1-simple-test-time-scaling-2025&mode=explain) · [审计](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=s1-simple-test-time-scaling-2025&mode=audit) · [对比](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=s1-simple-test-time-scaling-2025&mode=compare)

---

## 1. 问题：这篇论文想回答什么问题？

筛选 1,000 条困难、多样且高质量的长推理轨迹用于 SFT，并通过 budget forcing 控制推理计算量。 原文界定的问题是：Official benchmark and training tasks described in the primary paper.

一个可复用记录包括：problem or prompt, candidate rollout or reasoning state, feedback or verifier signal, sampling or search metadata, retention or selection decision, final answer or terminal outcome。

## 2. 核心思想：这篇论文的主要贡献是什么？

筛选 1,000 条困难、多样且高质量的长推理轨迹用于 SFT，并通过 budget forcing 控制推理计算量。

核心机制是：Start from a larger question pool, score and filter for difficulty, diversity, and quality, obtain long reasoning traces, retain s1K, fine-tune Qwen2. 反馈契约是：teacher-generated trace quality, benchmark answer correctness, and curation criteria for difficulty, diversity, and quality.

## 3. 方法：它是怎么工作的？

生成与搜索流程是：The policy or teacher model generates candidate reasoning traces. 采样或搜索协议是：Multiple candidates, continuations, or search states are generated and retained with their feedback-bearing lineage. 筛选规则是：Start from a larger question pool, score and filter for difficulty, diversity, and quality, obtain long reasoning traces, retain s1K, fine-tune Qwen2.5-32B-Instruct, then force shorter or longer thinking at test time.

最终记录包含：problem or prompt, candidate rollout or reasoning state, feedback or verifier signal, sampling or search metadata, retention or selection decision, final answer or terminal outcome。论文报告的用途包括 sft, distillation, test time compute。

## 4. 证据：为什么应该相信它？

消融实验检验三项筛选准则与 budget forcing；官方仓库发布数据、训练、评估和模型产物。这些证据应视为生成器质量、反馈质量、数据筛选与计算量的联合测量。

只有在样本数、验证器调用、token 上限和策略 checkpoint 对齐时，比较才可解释。

## 5. 新意：相比已有工作新在哪里？

相比单路径生成、best-of-N 和只保留最终成功答案的过滤方式，本文的变化是：筛选 1,000 条困难、多样且高质量的长推理轨迹用于 SFT，并通过 budget forcing 控制推理计算量。

可复用的新意在于把生成、选择或验证与保留下来的推理轨迹连成一条可审计链路；通用采样、搜索、SFT 或最终答案评测并不是本文独有的新组件。

## 6. 局限：弱点或隐藏假设是什么？

在极小数据集中，教师轨迹谱系与过滤选择影响极大。追加 Wait 可能学习或利用格式伪影，而非通用搜索。

token 预算并不能完整代表实际计算量与有效推理。

## 7. 用途：我可以如何使用这篇论文？

1K 轨迹用于长 CoT SFT；budget forcing 可在预算上限截断，或在模型试图结束时追加 Wait。构建数据集时，应同时保留 accepted/rejected candidate 与承载反馈的字段。

训练时要区分 SFT 目标、verifier 样本和 on-policy RL rollout。

## 8. 阅读笔记：应该记住什么？

每个候选由哪个模型或教师 checkpoint 生成？每个提示使用多少候选、续写或搜索节点？

是否公开被拒轨迹，还是只公开最终选择？

## 9. 引用

临时引用，人工 review 后替换为官方 BibTeX：

```bibtex
@misc{s1_simple_test_time_scaling_2025,
  title = {s1: Simple test-time scaling},
  author = {Niklas Muennighoff and Zitong Yang and Weijia Shi and Xiang Lisa Li and Li Fei-Fei and Hannaneh Hajishirzi and Luke Zettlemoyer and Percy Liang and Emmanuel Candès and Tatsunori Hashimoto},
  year = {2025},
  howpublished = {arXiv}
}
```
