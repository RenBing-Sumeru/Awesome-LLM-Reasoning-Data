权威发表版本是八位作者的 **NeurIPS 2025 Main Conference Track** 论文。SeRL 针对一个具体 post-training 瓶颈：专业领域的 reinforcement learning 通常同时需要大量 instructions 与 correctness signal，但专家编写的问题和 verifiable labels 可能很稀缺。论文研究当前 policy 能否从小型 seed set 扩展出新问题、用自身 samples 估计响应奖励，并在 generated questions 没有 ground-truth labels 的情况下迭代训练。

主要数学实验从 **500 条 MATH training questions** 开始，按 difficulty levels 均匀采样。每个 training step 中，当前 policy 从八示例 few-shot context 生成只含问题的 instructions，过滤 candidate questions，对每个保留问题采样 **16** 个包含 chain-of-thought 的 responses，用 Math-Verify equivalence 对 final answers 分组，再为每个 response 分配二元 majority-agreement reward。Medical extension 把数学 seed 换成随机选择的 500 条 MedQA training instructions，但没有发布 medical trajectory dataset。

一个完整 online training object 不只是 prompt：

| 组成 | 内部作用 |
|---|---|
| Generated question | 当前 policy 提出的 instruction |
| 16 responses | Chain-of-thought 与 final answers |
| Answer equivalence structure | Math-Verify 两两等价分组 |
| Majority selection | 被选中的 answer cluster |
| 16 scalar labels | 与 majority 等价则 reward 1，否则 0 |
| Mean reward | Difficulty statistic，仅保留 inclusive range `[0.2, 0.8]` |
| Iteration state | Policy checkpoint、step、accepted-question pool 与 filter context |

该反馈契约是 **programmatic agreement**，不是 programmatic correctness。Math-Verify 判断抽取出的数学答案是否等价；当前 policy 自身最常见的 equivalence group 定义 reward。如果多数 responses 共享同一个错误答案，它们仍可能全部获奖。论文直接记录了一种 collapse pattern：看似合理的推理反复以答案 0 结束，并获得 unanimous reward。Difficulty filter 会移除全一致与全不一致两个极端，却无法证明 moderate consensus 是正确的。

本 Card 归入 **Data Construction & Open Release Recipes**，因为 SeRL 的核心对象是持续演化的 online curriculum 与 reward-construction pipeline。仓库公开了实现和若干静态 question snapshots，而不是完整 paper-run data object。Responses、extracted answers、pairwise equivalence matrices、binary rewards、verifier failures、rejected generations、logs、checkpoints 与 run manifests 均未发布。
