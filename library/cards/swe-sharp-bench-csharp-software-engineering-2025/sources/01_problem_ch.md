主流 repository-level agent benchmark 主要覆盖 Python，部分多语言工作加入 Java、JavaScript、C/C++，但企业常用的 C#/.NET 仍缺少可重复评测。NuGet 依赖、MSBuild、solution/project 结构和 xUnit/NUnit 测试与 Python 环境差异很大，因此在 SWE-bench Verified 的高分不能说明 agent 能处理 .NET 项目。

SWE-Sharp-Bench 从真实 C# 开源仓库构建 150 个 issue-resolution 实例，覆盖 17 个项目。每题提供 base commit、问题描述、gold patch、测试信息和可复现 .NET 环境；agent patch 由原仓库测试执行判定。作者同时公开数据与完整 curation pipeline，并在相同 agent/model 配置下与 Python benchmark 对照。
