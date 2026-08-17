收录证据来自官方 arXiv 论文、项目页和 GitHub 仓库：它不是只给排行榜，而是把 benchmark 作为可运行软件发布。论文报告它包含 10 个开源应用上的 100 个任务，并评测了 AppAgent、MobileAgent 等已有移动 agent。官方 README 确认安装路径依赖 AndroidStudio/ADB/emulator，列出默认 benchmarking apps，并描述了用于测试任务完成检测是否工作的 dummy agent。

最强的 row-level 证据不是聚合分数，而是一次执行 episode 的 validator 结果。只有在同一任务 release 下能看到 emulator 状态、action log 和任务特定 success check，模型轨迹才具备可审计性。聚合 benchmark score 只能说明某个 harness 版本和 agent scaffold 下的表现，不能泛化为全部移动 agent 能力。

证据边界要写清：公开 artifact 证明代码和项目材料存在，但不能自动证明跨设备、OS 镜像、应用版本或账号状态稳定复现。任何对比都应说明仓库 revision、任务子集、emulator 设置、应用数据、prompt、action interface、timeout 或 step budget，以及用于打分的 validator code。
