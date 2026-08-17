T1 是收录于 PMLR 267 的 ICML 2025 论文，讨论如何获得并利用更长的数学推理行为；它并不把 benchmark 分数当作训练数据可靠性的证明。PMLR proceedings 是主要论文入口，OpenReview 将其记录为 ICML 2025 poster。它归入 `rollout_search_test_time_trace_data`，因为其核心训练/评估表面是：在答案级 verifier 下多次采样长文本推理轨迹，并分析更多推理 token 的作用；它不是一个带逐步标签的 process-reward 数据集。

构造从公开的 MATH-train 与 NuminaMath 题目开始。预期的一条 SFT 样本由题目、若干解题尝试、基于答案的反馈以及合并后的最终解答组成，且这些过程文本由 LLM 合成。一条 RL 样本则是经过筛选的数学 prompt，其 completion 接收最终答案正确性信号。因此，本卡可以明确其数据对象与反馈契约：公开题目、合成过程文本、结果核验。论文没有提供工具调用环境、人工标注协议或已发布的逐步正确性标签。

边界必须保留。此卡覆盖的是方法与公开 artifact，而不是宣称现有文件可以直接用于训练。论文称约有 12,000 个 SFT 题目和 30,000 个 RL 题目；当前数据仓库却只有两个 schema 不同的 JSONL 文件，未说明它们如何对应这些计数、具体行或实验。因此本卡是 `partial` 的 L4 阅读/审计资料，而非对该发布的背书。（论文 Appendix A；官方 Hugging Face 数据集，2026-07-23 检查。）
