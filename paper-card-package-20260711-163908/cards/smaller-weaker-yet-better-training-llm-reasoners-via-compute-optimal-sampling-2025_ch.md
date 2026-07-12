# 论文卡片：Smaller, Weaker, Yet Better: Training LLM Reasoners via Compute-Optimal Sampling

> **一句话评价：** 在固定 FLOP 或价格预算下，弱而便宜的生成器凭借更多采样可构造出更有效的过滤后推理训练数据。
> **阅读优先级：** 必读
> **论文类型：** 推理数据 / scaling_study, construction_recipe 论文
> **知识点分类：** Rollout, Search, and Test-Time Trace Data
> **适合读者：** 适合研究合成推理数据、拒绝采样、预算匹配和 weak-to-strong 训练的读者。
> **置信度：** 高
> **年份 / 来源：** 2025 · ICLR 2025 Poster
> **作者：** Hritik Bansal, Arian Hosseini, Rishabh Agarwal, Vinh Q. Tran, Mehran Kazemi
> **机构：** Google DeepMind · University of California, Los Angeles · Mila
> **链接：** [Paper](https://arxiv.org/abs/2408.16737) · [OpenReview](https://openreview.net/forum?id=3OyaXFQuDl)
> **Ask the Atlas：** [解释](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=smaller-weaker-yet-better-training-llm-reasoners-via-compute-optimal-sampling-2025&mode=explain) · [审计](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=smaller-weaker-yet-better-training-llm-reasoners-via-compute-optimal-sampling-2025&mode=audit) · [对比](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=smaller-weaker-yet-better-training-llm-reasoners-via-compute-optimal-sampling-2025&mode=compare)

---

## 1. 问题：这篇论文想回答什么问题？

在固定 FLOP 或价格预算下，弱而便宜的生成器凭借更多采样可构造出更有效的过滤后推理训练数据。 原文界定的问题是：MATH and GSM8K training questions with reference final answers.

一个可复用记录包括：question, generator_model, candidate_solution, final_answer, correctness_label, sample_count, estimated_flops_or_price, coverage, diversity, false_positive_rate。

## 2. 核心思想：这篇论文的主要贡献是什么？

在固定 FLOP 或价格预算下，弱而便宜的生成器凭借更多采样可构造出更有效的过滤后推理训练数据。

核心机制是：Gemma2-9B, Gemma2-27B, Gemini-1.5-Flash, or Gemini-1.5-Pro samples complete reasoning solutions. 反馈契约是：final-answer matching is the default selector; Gemini models serve as judges in the no-ground-truth setting.

## 3. 方法：它是怎么工作的？

生成与搜索流程是：Gemma2-9B versus 27B and Gemini-1.5-Flash versus Pro. 采样或搜索协议是：compare 27B:9B at 1:3 and 10:30 samples per question; compare Pro:Flash at 1:35 by August 2024 output-token price, with a five-Flash-sample cheaper setting. 筛选规则是：remove candidates whose final answer fails the reference check; compare no filtering and LM-as-a-judge when references are unavailable.

最终记录包含：question, generator_model, candidate_solution, final_answer, correctness_label, sample_count, estimated_flops_or_price, coverage, diversity, false_positive_rate。论文报告的用途包括 sft, distillation, evaluation。

## 4. 证据：为什么应该相信它？

便宜模型数据提高覆盖/多样性并改善三种训练，虽 FPR 更高；消融等数量、混合池、多样性与无 gold 判断。证据还包括等样本数与等计算量、强弱混合候选池、多样性裁剪以及无参考答案判断等消融；这些实验说明覆盖率、多样性和 FPR 必须联合报告。

## 5. 新意：相比已有工作新在哪里？

相比单路径生成、best-of-N 和只保留最终成功答案的过滤方式，本文的变化是：在固定 FLOP 或价格预算下，弱而便宜的生成器凭借更多采样可构造出更有效的过滤后推理训练数据。

可复用的新意在于把生成、选择或验证与保留下来的推理轨迹连成一条可审计链路；通用采样、搜索、SFT 或最终答案评测并不是本文独有的新组件。

## 6. 局限：弱点或隐藏假设是什么？

参数和价格代理粗糙且价格变化；终答过滤接纳错误推理；无官方 artifact。参数量只是开放模型 FLOP 的近似，API 输出价格更不是稳定计算量；2024 年 8 月的 Pro/Flash 价格比必须带时间戳，且终答过滤仍会接纳错误推理。

## 7. 用途：我可以如何使用这篇论文？

用于规划合成数据预算，并要求记录覆盖、多样性、FPR、接受/拒绝轨迹与成本谱系。进行合成数据预算研究时，应同时保存生成器身份、每题候选、T=0.7、TopK=3、接受与拒绝结果、FLOP/价格代理、覆盖率、多样性和人工抽查 FPR。

## 8. 阅读笔记：应该记住什么？

主张是训练时采样；不要与评估 maj@1/4/8/16 混淆。主结论针对训练时数据采样：Gemma 的 1:3/10:30 与 Gemini 的 1:35 是不同成本代理；测试时 maj@1/4/8/16 只是下游评估，不能混写。

## 9. 引用

临时引用，人工 review 后替换为官方 BibTeX：

```bibtex
@misc{smaller_weaker_yet_better_training_llm_reasoners_via_compute_optimal_sampling_2025,
  title = {Smaller, Weaker, Yet Better: Training LLM Reasoners via Compute-Optimal Sampling},
  author = {Hritik Bansal and Arian Hosseini and Rishabh Agarwal and Vinh Q. Tran and Mehran Kazemi},
  year = {2025},
  howpublished = {ICLR 2025 Poster}
}
```
