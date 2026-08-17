官方 arXiv v1 的 *DeepSeekMath-V2: Towards Self-Verifiable Mathematical Reasoning* 由九位 DeepSeek-AI 作者于 2025 年 11 月 27 日提交。它针对 theorem proving 中 final-answer reward 的失效：数值答案正确可能掩盖无效推理，许多证明任务也没有可由程序直接与答案键比较的短答案。因此，论文研究 LLM 能否学会识别自然语言证明中的问题，并为证明生成 RL 和测试时 refinement 提供反馈。

核心数据对象是带判断的自然语言记录，而不是形式证明对象。初始 verifier 数据 `D_v` 包含问题 `X`、生成证明 `Y` 和数学专家给出的 `{0, 0.5, 1}` 分数 `s`。Meta-verifier 数据 `D_mv` 进一步加入 verifier analysis `V` 和同样三级的专家质量分数 `ms`。Generator 记录还包含证明、自分析、自评分、外部 verifier 分数和 meta-verification 反馈。最后两轮训练中，新的 hard proof 不再由人工标注，而通过 verifier 与 meta-verifier 多次采样自动赋标签。

这一差异定义了本 Card 的边界。DeepSeekMath-V2 用学习得到的自然语言 judge 评估文本证明，不编译 Lean 或 Isabelle term，也不产生机器检查证书。“通过 64 次 verifier 检查”表示在同一学习 rubric 下，64 个采样的 LLM analysis 均未找到足以否定证明的问题；它是随后结合选定专家评估的高置信搜索条件，不是数学有效性的保证。

本论文属于 `frontier_reports_data_disclosure_ledger`，因为它披露了异常具体的 generator–verifier 数据飞轮、reward 公式、专家标签 schema 和测试时预算，同时未公开训练记录、自动标注参数、校准证据、污染审计和 record lineage。这里的 L4 表示全文、附录、官方仓库、已发布评测输入与输出和模型页足以支撑双语审计 Card，不表示训练数据集或流水线可复用。
