AgentPack 要回答的是：软件工程 agent 与人类共同完成、并出现在公开 GitHub 项目中的代码变更，是否能成为比旧有人类 commit 语料更好的代码编辑训练数据。一手来源是 arXiv:2509.21891v2（2026-03-27）和官方 Hugging Face 数据页。当前论文报告 2025 年 4 月到 10 月 7 日期间，Claude Code、OpenAI Codex、Cursor Agent 在公开 GitHub 项目中的 1.8M code edits；Hugging Face 卡片仍描述截至 2025 年 8 月中旬的较早 1.3M commits 快照。

这里的数据对象不是完整 agent 交互轨迹，而是挖掘出的代码变更记录：agent 归因元数据、仓库/commit 或 PR 标识、自然语言变更说明、git patch、受影响文件片段或 hunks，以及派生标签/统计。atlas 边界是软件工程 agent 数据和代码编辑监督，不是可执行环境 benchmark。反馈是隐式的：变更进入公开 GitHub 活动，并常常经过人类 maintainer 接受；训练价值则由后续代码编辑 benchmark 检验。
