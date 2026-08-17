1. **选择 C# 仓库：** 筛选活跃、可公开使用、具有 issue/PR 和自动化测试的 .NET 项目，获取修复前 commit、合并 patch 与问题描述。

2. **构建 .NET 环境：** 恢复 NuGet 依赖，识别 `.sln`/`.csproj`、SDK 与测试框架，在固定容器中确认 base 和 gold 版本可编译。

3. **提取验证测试：** 比较修复前后测试结果，保留能由 gold patch 修复的失败测试，并记录必须持续通过的回归测试；剔除 flaky、依赖外部服务或无法稳定构建的候选。

4. **人工复核与发布：** 检查 issue–patch 对齐、任务可解性和环境说明，最终保留 150 题并公开 curation/evaluation pipeline。复现需固定 .NET SDK、NuGet cache、操作系统、commit 和测试过滤规则。
