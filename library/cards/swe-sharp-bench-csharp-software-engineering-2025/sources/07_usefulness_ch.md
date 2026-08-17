1. **C# coding agent 评测：** 在固定 .NET SDK/容器中运行 agent，报告 resolved rate、构建失败、测试失败和按仓库/项目结构分层结果，并与同 scaffold 的 Python 或 Java 对照。

2. **环境适配研究：** 分析 agent 在 `.sln`、`.csproj`、NuGet、MSBuild 和 xUnit/NUnit 上的工具错误，改进 repository map、命令建议和依赖恢复；最终仍以原生测试验收。

3. **训练数据扩展模板：** 复用公开 curation pipeline 挖掘更多 C# PR，但应把新任务与 150 题 benchmark 按 commit 去重。若研究需商业闭源 .NET 工作，开源数据只能作为基础，不能代表企业分布。
