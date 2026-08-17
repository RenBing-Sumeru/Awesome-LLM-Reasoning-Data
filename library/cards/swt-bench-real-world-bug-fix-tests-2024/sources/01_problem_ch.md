SWT-Bench: Testing and Validating Real-World Bug-Fixes with Code Agents 回答的问题是：Bug-fix 基准通常评估补丁，但软件智能体也需要生成能复现并验证真实修复的测试。主来源是 https://arxiv.org/abs/2406.12952；公开状态为 NeurIPS 2024 / arXiv v3 / OpenReview（2024）。

决策边界：它应作为代码智能体的测试生成和验证基准收录，不是标准补丁生成基准。可复用对象是：一个任务包含真实 bug-fix issue、仓库状态、生成的 test patch 或 reproduction script、原始和修复后代码状态、fail/pass 转移标签，以及 coverage 或成功指标。它对 atlas 的价值在于对象和反馈契约可以一起审计。
