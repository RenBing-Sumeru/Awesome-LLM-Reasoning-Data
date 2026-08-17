输入与构造。TensorBench 以 5 个固定 commit 的 Scorch 为目标。一个未披露的 LLM 智能体按照附录 A 的 authoring prompt 探索本地 checkout；后续 session 会获得既有任务列表以减少重复。该流程生成全部 194 个功能描述和 4 个重构描述，作者另手写 1 个重构任务。作者检查了全部 199 个描述，但没有提供 reference implementation 或维护者编写的 hidden tests。功能描述要求被测智能体实现行为并编写测试；重构描述要求保持行为。

评测流水线。对每个任务与每个 scaffold/模型组合，harness 构建或选择任务镜像，启动冻结的工作副本，把存储的 description 作为单条用户消息发送，并施加 2 小时 wall-clock 上限。7 个系统包括两种 Claude Code 配置、3 种使用 xhigh effort 的 Codex CLI 配置、Gemini CLI，以及搭配 Qwen3-Coder 的 OpenHands。每个组合运行 1 次，因此共有 7 × 199 = 1,393 个 episode。harness 提取工作树 diff，并在 scaffold 支持时保存结构化 CLI session log。

验证与输出。评分不信任智能体自己的 live checkout，而是在固定 base commit 的 fresh Docker 容器中应用 unified diff，重新构建 Scorch C++ runtime，再执行完整 pytest。仅当 after.failed == 0 时成功。公开任务记录包含 instance_id、repo/base commit、language、setup/test command 与 timeout、description、相关文件、task type 和 categories。论文还声称 release 包含 diff、agent output、trajectory、补丁前后 pytest 日志、report.json、扁平结果矩阵、镜像 digest 和审计代码。

复现边界。Hugging Face v1.0 artifact 可核验 199 条任务记录以及 Dockerfile、run_tests.sh 和元数据；项目链接的 benchmark GitHub 在本次整理时返回 404，因此 harness 源码、predictions、trajectories、evaluation outputs、Docker digest 及其许可与 checksum 尚未核验。authoring generator 的精确设置、实证去污染、hidden validation 和带日期的 provider model snapshot 也未披露。

