# 论文卡片：DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning

> **一句话评价：** 结合规则奖励的 on-policy 推理 rollout、rejection-sampling SFT 数据、多阶段 RL 与长思维链蒸馏。
> **阅读优先级：** 可读
> **论文类型：** 推理数据 / model_report, construction_recipe, scaling_study论文
> **知识点分类：** Rollout, Search, and Test-Time Trace Data
> **适合读者：** 适合研究 rollout、搜索轨迹、验证器、拒绝采样与 post-training 数据谱系的读者。
> **置信度：** 高
> **年份 / 来源：** 2025 · Nature
> **作者：** DeepSeek-AI, Daya Guo, Dejian Yang, Haowei Zhang, Junxiao Song, Ruoyu Zhang, Runxin Xu, Qihao Zhu, Shirong Ma, Peiyi Wang, Xiao Bi, Xiaokang Zhang, Xingkai Yu, Yu Wu, Zhihong Shao
> **机构：** DeepSeek-AI
> **链接：** [Paper](https://arxiv.org/abs/2501.12948) · [DOI](https://doi.org/10.48550/arXiv.2501.12948) · [Code](https://github.com/deepseek-ai/DeepSeek-R1) · [Hugging Face](https://huggingface.co/deepseek-ai/DeepSeek-R1)
> **Ask the Atlas：** [解释](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=deepseek-r1-2025&mode=explain) · [审计](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=deepseek-r1-2025&mode=audit) · [对比](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=deepseek-r1-2025&mode=compare)

---

## 1. 问题：这篇论文想回答什么问题？

结合规则奖励的 on-policy 推理 rollout、rejection-sampling SFT 数据、多阶段 RL 与长思维链蒸馏。 原文界定的问题是：Official benchmark and training tasks described in the primary paper.

一个可复用记录包括：problem or prompt, candidate rollout or reasoning state, feedback or verifier signal, sampling or search metadata, retention or selection decision, final answer or terminal outcome。

## 2. 核心思想：这篇论文的主要贡献是什么？

结合规则奖励的 on-policy 推理 rollout、rejection-sampling SFT 数据、多阶段 RL 与长思维链蒸馏。

核心机制是：Train R1-Zero with large-scale RL, add cold-start traces for R1, run reasoning RL, rejection-sample successful readable responses into SFT data, mix non-reasoning data, run further RL, and distill R1 outputs. 反馈契约是：rule-based accuracy rewards and format rewards dominate verifiable reasoning tasks; quality filters and model-based signals supplement broader data.

## 3. 方法：它是怎么工作的？

生成与搜索流程是：The policy or teacher model generates candidate reasoning traces. 采样或搜索协议是：Multiple candidates, continuations, or search states are generated and retained with their feedback-bearing lineage. 筛选规则是：Train R1-Zero with large-scale RL, add cold-start traces for R1, run reasoning RL, rejection-sample successful readable responses into SFT data, mix non-reasoning data, run further RL, and distill R1 outputs.

最终记录包含：problem or prompt, candidate rollout or reasoning state, feedback or verifier signal, sampling or search metadata, retention or selection decision, final answer or terminal outcome。论文报告的用途包括 rlvr, sft, distillation, test time compute。

## 4. 证据：为什么应该相信它？

报告在 AIME、MATH-500、GPQA、代码及通用基准上评估 R1-Zero、R1 和六个蒸馏稠密模型，并发布官方权重与样例数据。这些证据应视为生成器质量、反馈质量、数据筛选与计算量的联合测量。

只有在样本数、验证器调用、token 上限和策略 checkpoint 对齐时，比较才可解释。

## 5. 新意：相比已有工作新在哪里？

相比单路径生成、best-of-N 和只保留最终成功答案的过滤方式，本文的变化是：结合规则奖励的 on-policy 推理 rollout、rejection-sampling SFT 数据、多阶段 RL 与长思维链蒸馏。

可复用的新意在于把生成、选择或验证与保留下来的推理轨迹连成一条可审计链路；通用采样、搜索、SFT 或最终答案评测并不是本文独有的新组件。

## 6. 局限：弱点或隐藏假设是什么？

完整训练 rollout 与被拒分布未公开。多阶段收益混合了 RL、cold-start 数据、拒绝采样和蒸馏。

规则正确性不能验证长 rationale 的忠实性或效率。

## 7. 用途：我可以如何使用这篇论文？

rollout 通过 GRPO 风格 RLVR 更新策略；筛选轨迹成为 SFT 目标；R1 长 CoT 监督较小的 Qwen 与 Llama 学生。构建数据集时，应同时保留 accepted/rejected candidate 与承载反馈的字段。

训练时要区分 SFT 目标、verifier 样本和 on-policy RL rollout。

## 8. 阅读笔记：应该记住什么？

每个候选由哪个模型或教师 checkpoint 生成？每个提示使用多少候选、续写或搜索节点？

是否公开被拒轨迹，还是只公开最终选择？

## 9. 引用

临时引用，人工 review 后替换为官方 BibTeX：

```bibtex
@misc{deepseek_r1_2025,
  title = {DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning},
  author = {DeepSeek-AI and Daya Guo and Dejian Yang and Haowei Zhang and Junxiao Song and Ruoyu Zhang and Runxin Xu and Qihao Zhu and Shirong Ma and Peiyi Wang and Xiao Bi and Xiaokang Zhang and Xingkai Yu and Yu Wu and Zhihong Shao},
  year = {2025},
  howpublished = {Nature}
}
```
