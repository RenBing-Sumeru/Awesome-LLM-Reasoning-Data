- 先读 [addendum PDF](https://cdn.openai.com/pdf/8df7697b-c1b2-4222-be00-1fd3298f351d/codex_system_card.pdf) 第 1 页：文档披露现实编码任务 RL，却没有给出任务表或主要奖励。
- 把第 2.1、2.3 和 2.4 节作为三类独立安全数据阅读：恶意软件场景、意外环境状态和 prompt injection。
- 在第 2.3 节保留奖励方向的精确边界——惩罚与动作不一致的结果，奖励承认资源缺失、限制和不确定性——不要把它扩展为完整编码 RL 奖励。
- 把恶意软件拒绝、意外状态前后对比、prompt-injection、标准拒绝和 Preparedness 数字都放在评测账本中；它们都不是训练数据质量指标。
- 描述环境前阅读 6 月 3 日更新：首发时任务执行阶段无网络，之后项目可通过 allowlist 或 denylist 启用网络。

