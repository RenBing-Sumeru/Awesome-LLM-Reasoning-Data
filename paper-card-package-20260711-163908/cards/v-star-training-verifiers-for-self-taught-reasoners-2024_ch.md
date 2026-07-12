# 论文卡片：V-STaR: Training Verifiers for Self-Taught Reasoners

> **一句话评价：** 同时复用正确与错误的自生成解答，共同演化 reasoner 与基于 DPO 的 verifier，并用于 best-of-N 选择。
> **阅读优先级：** 可读
> **论文类型：** 推理数据 / construction_recipe, verifier_reward, scaling_study论文
> **知识点分类：** Rollout, Search, and Test-Time Trace Data
> **适合读者：** 适合研究 rollout、搜索轨迹、验证器、拒绝采样与 post-training 数据谱系的读者。
> **置信度：** 高
> **年份 / 来源：** 2024 · COLM
> **作者：** Arian Hosseini, Xingdi Yuan, Nikolay Malkin, Aaron Courville, Alessandro Sordoni, Rishabh Agarwal
> **机构：** Mila – Quebec AI Institute · Université de Montréal · Microsoft Research · Google DeepMind
> **链接：** [Paper](https://arxiv.org/abs/2402.06457) · [DOI](https://doi.org/10.48550/arXiv.2402.06457)
> **Ask the Atlas：** [解释](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=v-star-training-verifiers-for-self-taught-reasoners-2024&mode=explain) · [审计](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=v-star-training-verifiers-for-self-taught-reasoners-2024&mode=audit) · [对比](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=v-star-training-verifiers-for-self-taught-reasoners-2024&mode=compare)

---

## 1. 问题：这篇论文想回答什么问题？

同时复用正确与错误的自生成解答，共同演化 reasoner 与基于 DPO 的 verifier，并用于 best-of-N 选择。 原文界定的问题是：Official benchmark and training tasks described in the primary paper.

一个可复用记录包括：problem or prompt, candidate rollout or reasoning state, feedback or verifier signal, sampling or search metadata, retention or selection decision, final answer or terminal outcome。

## 2. 核心思想：这篇论文的主要贡献是什么？

同时复用正确与错误的自生成解答，共同演化 reasoner 与基于 DPO 的 verifier，并用于 best-of-N 选择。

核心机制是：Sample many solutions, partition them by automatic correctness, fine-tune the reasoner on positives, train the verifier with correct/incorrect pairs, rerank candidates, and iterate. 反馈契约是：unit tests or exact-answer checks label generated solutions; DPO learns to prefer correct solutions over incorrect ones.

## 3. 方法：它是怎么工作的？

生成与搜索流程是：The policy or teacher model generates candidate reasoning traces. 采样或搜索协议是：Multiple candidates, continuations, or search states are generated and retained with their feedback-bearing lineage. 筛选规则是：Sample many solutions, partition them by automatic correctness, fine-tune the reasoner on positives, train the verifier with correct/incorrect pairs, rerank candidates, and iterate.

最终记录包含：problem or prompt, candidate rollout or reasoning state, feedback or verifier signal, sampling or search metadata, retention or selection decision, final answer or terminal outcome。论文报告的用途包括 sft, reward modeling, test time compute。

## 4. 证据：为什么应该相信它？

在数学和代码上提升，并显示利用负例训练的验证器改善best-of-N与后续自训练。论文在数学与代码推理上比较 reasoner 与 verifier 的迭代收益，并显示将错误自生成解转为偏好数据可以改善 best-of-N 选择和后续数据采集。

## 5. 新意：相比已有工作新在哪里？

相比单路径生成、best-of-N 和只保留最终成功答案的过滤方式，本文的变化是：同时复用正确与错误的自生成解答，共同演化 reasoner 与基于 DPO 的 verifier，并用于 best-of-N 选择。

可复用的新意在于把生成、选择或验证与保留下来的推理轨迹连成一条可审计链路；通用采样、搜索、SFT 或最终答案评测并不是本文独有的新组件。

## 6. 局限：弱点或隐藏假设是什么？

自动标签继承checker弱点；N会混淆验证收益；在线pair可能缩窄覆盖；无官方artifact。自动终答或单测标签继承 checker 的盲点，验证器收益还可能与更大的候选 N 混淆；在线策略产生的偏好对会随迭代漂移，且无官方可复用数据发布。

## 7. 用途：我可以如何使用这篇论文？

适合设计保留生成器版本、正确证据和完整候选池的成对验证器数据。适合构造正负成对的自训练记录：问题、策略版本、全部候选、正确证据、正负配对、DPO 验证分、排序与最终选择必须保持同一谱系。

## 8. 阅读笔记：应该记住什么？

与STaR不同，错误生成也是资产；必须与同一题和策略轮次绑定。与 STaR 只保留正确 rationale 不同，V-STaR 把错误生成也视为验证器资产；因此不能丢弃负例，也不能省略它们来自哪一轮 reasoner。

## 9. 引用

临时引用，人工 review 后替换为官方 BibTeX：

```bibtex
@misc{v_star_training_verifiers_for_self_taught_reasoners_2024,
  title = {V-STaR: Training Verifiers for Self-Taught Reasoners},
  author = {Arian Hosseini and Xingdi Yuan and Nikolay Malkin and Aaron Courville and Alessandro Sordoni and Rishabh Agarwal},
  year = {2024},
  howpublished = {COLM}
}
```
