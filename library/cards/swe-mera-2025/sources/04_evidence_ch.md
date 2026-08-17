论文在 2024 年 9 月至 2025 年 6 月收集的任务上评测多种代码模型。Aider 最多运行 6 次，因此 pass@1 与 pass@6 不同。在 2024 subset 上，DeepSeek-R1-0528 的 pass@1/pass@6 为 34.5%/50.0%，Devstral-Small-2505 为 17.5%/34.0%，DeepSeek-R1-Distill-Qwen-32B 为 18.0%/31.5%。这些是作者运行的模型比较，不能证明当前动态发布可复现相同数值。

构造证据主要来自执行与过滤，而非对每行人工认证。Qwen3-32B 会按正确性和测试质量移除后 25% 的任务，但论文没有报告完整 judge 校准或人工一致性。作者也明确警告，参考解和自动测试可能拒绝创造性替代方案或漏掉错误。

当前发布核验确认了 MIT 元数据、约 6.82k 行、4 个 split，以及 commit、patch、tests、commands、image name 和 timeout 字段。代码核验确认 base-commit 清理和 Docker/local 模式，也确认终止条件欠约束：PASS_TO_PASS 被强制，FAIL_TO_PASS 未被检查。

因此，该发布支持 schema 与 evaluator 审计，却不支持规范轨迹分析。leaderboard 提交没有统一捆绑完整的智能体观察、工具调用、reflection、中间补丁、测试日志、成功、失败和终止原因。
