在 BFCL-v3 上，表 3 报告 Tool-Zero-7B 的 overall score 为 `65.22`，Tool-Zero-32B 为 `67.12`；对照 ToolRL-7B 为 `58.38`，ToolACE-8B 为 `58.42`。表 4 报告 7B 与 32B 模型在 API-Bank、Nexus Raven、Tool-Alpaca 和 Seal-Tools 上的跨 benchmark 平均分分别为 `77.65` 与 `79.32`。BFCL 使用 AST 与 executable-function evaluation，其他评测面使用函数/参数匹配 F1。这些是作者报告的表格数值，尚未独立复现。（论文 §5.1–5.2、表 3–4、Appendix B）

论文 ablation 报告 GG-GRPO 在 BFCL 上比 vanilla GRPO 高 `5.26` point，比 SFT 高 `6.8` point；midpoint `25` 在测试的切换点中最好。xLAM 泛化实验的表 5 报告，采用 augmentation 时 multi-turn 得分为 `32.38`，不采用时为 `16.18`。这支持在作者设置下研究奖励调度与合成多轮构造，但论文没有提供 seed、run variance 或独立重跑。（论文 §5.3、图 4–5、表 5）

官方论文内部存在多处数字冲突。表 5 邻近正文写的是 `32.28`，而非表中 `32.38`。表 9 相比表 4 改变了 Tool-Alpaca/average 数值：7B 从 `65.71/77.65` 变为 `63.71/77.32`，32B 从 `67.38/79.32` 变为 `64.38/78.99`。Introduction 所称 `7.14%/7.18%` 增益也与表 3 的绝对差 `6.80/6.84` 不一致。本 Card 保留这些分歧，不自行归一化。

ToolACE 公开工件目前只展示 11,300 行，并称其为 subset；表 2 则报告保留了 99,266 条 ToolACE 记录。该差异证明存在发布缺口，不能据此断言公开 subset 质量低，也不能把更大语料写成已发布。同样，benchmark 分数不能认证逐记录 lineage、奖励正确性、contamination control 或训练数据质量；它们只展示所研究端到端配置在报告评测上的行为。
