OpenAI 于 2025 年 9 月 15 日发布七页 *Addendum to GPT-5 system card: GPT-5-Codex*。报告将 GPT-5-Codex 描述为针对 agentic coding 优化的 GPT-5 版本，并明确说明它在多种环境的真实编码任务上接受 reinforcement learning（PDF 第 1 页）。配套发布页进一步列出任务 taxonomy：从零构建项目、添加功能与测试、调试、大规模重构和代码审查。

Atlas 的具体问题不是 GPT-5-Codex 能否编辑代码，而是什么后训练记录与反馈产生了这些行为。在披露边界内，一条 episode 可包含软件工程 prompt、代码仓库或项目上下文、环境 state、命令或 tool action、文件编辑与 diff、测试执行，以及终态 artifact 或 review comment。OpenAI 点名的目标包括类人代码与 pull-request preference、精确遵循指令、code review 和迭代运行测试直到通过，但没有披露它们属于 scalar reward、preference pair、executable predicate、judge output 还是混合 objective。

安全训练还加入两类数据。报告继承 codex-1 的恶意软件 policy 与合成流水线，后者生成 prompt、代码片段和环境配置；随后又说明为编码环境 prompt injection 创建了新的 Instruction Hierarchy 数据（PDF §§2.1.2–2.2.2，第 3–4 页）。两类数据都没有连同 item schema、数量、标签、generator、split 或 license 发布。

本报告属于 `frontier_reports_data_disclosure_ledger`，因为它披露了任务族与行为级增量，同时保持 record ledger 关闭。它没有发布 SWE 数据集、agent trajectory、reward 代码、模型权重或可 replay 环境。当前 Deployment Safety Hub 将该模型标记为不再生产使用；这一生命周期状态不改变 2025 年来源身份，但意味着产品陈述不能视为当前模型保证。
