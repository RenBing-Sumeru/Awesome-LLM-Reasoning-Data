OpenAI 于 2025 年 12 月 18 日发布了这份 22 页的系统卡补充报告。报告围绕面向 agentic coding 优化的 GPT-5.2-Codex，披露了一项较窄的训练干预、产品防护措施以及能力与安全评测。Atlas 需要回答的不是模型分数是否突出，而是报告究竟公开了哪些后训练记录和反馈接口。

明确的训练对象是一个 RL 编码工作区 episode：独立的 user model 在 GPT-5.2-Codex 执行任务期间加入冲突编辑。唯一明确的训练反馈是，当模型不撤销用户修改时给予正向强化。任务 prompt、代码仓库、工作区 observation、工具动作、patch、成功与失败轨迹、保留标签、奖励数值和逐记录 lineage 均未发布。

本报告属于 Frontier Reports and Data Disclosure Ledger，因为它披露了一个会改变环境状态的智能体训练干预，同时保留了大部分配方未知项。它不能证明另一项 OpenAI PR 评测中的人工 prompts、tests、hints、PR 前仓库或 hidden unit tests 被用于训练。达到 L4 后，本 Card 可用于筛选和审计披露边界，但不能支持训练数据复用或独立复现。
