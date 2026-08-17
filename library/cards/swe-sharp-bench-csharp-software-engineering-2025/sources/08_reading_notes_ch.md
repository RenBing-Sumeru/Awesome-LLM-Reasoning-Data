1. **一句话定位：** SWE-Sharp-Bench 发布 150 个来自 17 个仓库的 C#/.NET 可执行修复任务和完整构建流程。

2. **方法抓手：** issue/PR 挖掘、NuGet 与 SDK 恢复、前后测试比较、人工对齐检查和容器固定决定可复现性。

3. **数据抓手：** CSV/HF 记录含 repository、commit、问题、patch、测试与环境；许可为 CDLA-Permissive-2.0。

4. **证据锚点：** 同 model–agent 在 Python Verified 约 70%，在 C# 仅约 40%，显示显著生态迁移差距。

5. **复用决定：** 适合 .NET agent 评测与工具适配；最大风险是任务不匹配和依赖漂移，必须按仓库报告并固定 SDK/镜像。
