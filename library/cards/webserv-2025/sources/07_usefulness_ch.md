当前发布可直接用于 schema 研究、受控 SFT 实验、evaluator 审查和环境工程参考。726 条记录保留 assistant reasoning、浏览器 action 与 DOM observation；在先拼接两个 data part 的前提下，可分析 action 分布、context length、semantic-ID grounding 和成功 teacher 的行为模式。

用于 SFT 时必须保留原始边界：这些是 Claude 4.5 Sonnet demonstration，经 success、正分和 reasoning presence 筛选，不能称为失败行为的代表，也不能视为 WebArena 行为的无偏样本。训练前最好补充 task ID、outcome label、显式 terminal marker、provenance、split assignment 与 license 文档。

用于 RL 复现时，仓库是较强的起点 scaffold，但不是开箱即用的 replication package。忠实复现应固定 Incus base image 与 browser stack，保留每步 200 rollout、每 prompt 12 sample、dynamic filtering 与 GRPO 超参数，保存所有 reward 和 failure state，并公开精确 SFT/RL/evaluation task manifest。论文的 64 张 H200 是规模参考，不是经论文证明的最低硬件要求。

用于 verifier 研究时，WebServ 提供了具体的 mixed contract：可执行页面状态，加上 string/URL/HTML check 与可选 LLM judgment。审计者可按 evaluator 类型测量 false positive/negative，测试 format error 对 reward 的敏感性，并比较 terminate 与非 terminate 结尾。

建议复用等级：**适合作为阅读和工程参考；带明确限制地用于 SFT；在 immutable environment、split、outcome、失败轨迹与模型 artifact 补齐前，不应声称完整 RL/replay 复现**。

