报告描述了四类推理 RL 数据：STEM、竞赛编程代码、逻辑谜题和不可验证的助手任务。它们配合异构反馈：对可验证任务使用答案或任务检查，对 long-CoT 推理使用 Seed-Verifier 与 Seed-Thinking-Verifier，对不可验证任务使用成对生成式 reward model。

从披露账本的角度，核心贡献是一份部分接口说明：论文给出了若干 prompt 来源、轨迹写作路径、verifier 或 reward 组件、过滤决策，以及 40 万样本 SFT 阶段。它并不是对底层数据、代码或完整 RL 配置的开放发布。
