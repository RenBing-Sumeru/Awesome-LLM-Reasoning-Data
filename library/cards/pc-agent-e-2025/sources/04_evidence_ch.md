下表均为作者在特定设置下报告的结果，尚无独立复现。success rate 是 WindowsAgentArena-V2 环境 evaluator 给出的任务级成功率，不是训练样本被判定正确的比例。

| 对比 | 模型/数据条件 | Benchmark 与预算 | 报告结果 | 结果能够支持什么、不能支持什么 |
| --- | --- | --- | --- | --- |
| 基座 vs PC Agent-E | Qwen2.5-VL-72B-Instruct 基座，与同一基座在 312 条增强人工 episode 派生的约 27K 条 action-level 样本上做 full SFT | WindowsAgentArena-V2，11 个 Windows 应用、141 项可行任务，仅 screenshot 的 1280×720 scaffold，默认 30-step cap | success rate 14.9 → 36.0；`(36.0-14.9)/14.9 ≈ 141.6%` relative | “141%”只适用于相对该 Qwen 基座和这些条件。它不是相对 Claude 的 141% 提升，也不能逐条认证数据质量。 |
| 仅人工数据 vs Trajectory Boost | 做 thought completion 的人工轨迹，与每个人工步骤再加入九个未执行合成替代动作 | 相同训练与 WindowsAgentArena-V2 评测体系 | 17.2 vs 36.0 | 支持合成替代动作在所报告 pipeline 中带来增量价值，但不能证明每个替代动作可执行或正确。 |
| Direct distillation vs PC Agent-E | 每项任务十条已执行 Claude end-to-end 轨迹，共 3,120 条，使用同一训练流程；对比只在人工状态采样替代动作 | WindowsAgentArena-V2，Figure 7 的报告对比 | 26.2 vs 36.0 | 支持论文的数据构造对比；“避免累积错误造成差距”仍是作者解释。 |
| 闭源基线 | Claude 3.7 Sonnet without extended thinking；Claude 3.7 Sonnet with extended thinking | 同一 141-task benchmark 表与 agent 设置 | 32.6 和 35.4，PC Agent-E 为 36.0 | 相对 non-thinking Claude 的提升约为 10%；相对 extended-thinking Claude 仅高 0.6 个百分点。 |
| 更长 horizon | PC Agent-E 的最大 30 步与 50 步 | WindowsAgentArena-V2，Appendix E，Table 8 | 30 步为 36.0，50 步为 31.4 | 这是负面证据：更高交互预算反而降低性能，因为 agent 可能在完成后继续操作并破坏正确状态。 |
| 跨平台 transfer | Qwen 基座与 PC Agent-E，均为 30 步 | OSWorld，其中包含不可行任务 | 11.1 → 14.9，约 34% relative | 表明作者报告了 Windows 训练之外的 transfer；论文同时警告不可行任务可能奖励无差别 `fail` 行为。 |

论文还报告离线 Trajectory Boost 约需 3 小时，而等量 3,120 条 direct-distillation 轨迹的采集约需 900 小时，并称为 300×。由于硬件细节和计时方法未披露，这只是 synthesis-time claim，不是可迁移的成本估计。WindowsAgentArena-V2 修复了不可行任务、evaluator bug 和初始化行为；作者报告初始化失败率从 10–30% 降至 5% 以下。这些修复改善了评测面，但与发布 SFT target 的正确性验证仍是两件事。
