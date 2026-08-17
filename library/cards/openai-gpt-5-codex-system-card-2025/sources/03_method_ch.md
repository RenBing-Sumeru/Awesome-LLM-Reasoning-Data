方法只能按分层披露重建：

1. **基座与任务来源。** 从一个未说明的 GPT-5 checkpoint 开始，面向 agentic coding 专门化。训练任务涵盖在多种真实环境中从零构建项目、添加功能与测试、调试、大型重构和代码审查。代码仓库 ID、revision、prompt 来源、任务数、权利、filter 和 mixture weight 均为 unknown。
2. **Agent 交互。** 模型浏览代码库、分析依赖、编辑文件、运行命令和测试，并可产生项目代码、diff、review comment、screenshot、citation、terminal log 和 test result。报告没有说明哪些字段保留在训练 trajectory 中、是否存储 non-user-visible reasoning，也没有说明如何选择成功与失败 episode。
3. **RL 反馈。** Reinforcement learning 被明确披露；目标结果是类人代码与 PR preference、精确遵循指令、code-review quality 和迭代测试通过。其表示可能是人类 preference、learned grader、executable test、policy label 或混合 reward，但报告没有确定具体形式，也没有给出权重、校准、reward scale、terminal predicate 或 RL 算法。
4. **安全数据。** 复用来自 OpenAI 托管聊天产品的既有安全数据和 codex-1 恶意软件流水线；后者生成 prompt、代码片段和环境配置，并包含边界与对抗样例，用于训练拒绝高风险请求，以及校准的防御性或双重用途帮助（PDF §2.1.2，第 3–4 页）。另行创建新的 Instruction Hierarchy 编码 prompt-injection 数据，并训练模型忽略攻击（§2.2.2，第 4 页）。数量、generator、标签、filter、重叠和阶段权重均未披露。
5. **评测。** Code-review evaluation 将热门开源仓库的近期 commit 与模型 comment 配对，由经验工程师判断正确性和重要性。SWE-bench Verified、refactor repository、mobile-web preference、malware golden-set case、prompt-injection attack、Production Benchmarks、StrongReject、CTF 和 Cyber Range 提供其他评测 predicate。除非官方来源明确连接，否则它们的测试与 judge 必须留在训练 reward 之外。
6. **部署。** Codex CLI、IDE、cloud 和 GitHub 提供 tool scaffold 与产品控制。云端使用默认禁网的隔离 container；本地 macOS 使用 Seatbelt，Linux 使用 seccomp 加 landlock；用户可批准更广权限并配置项目网络策略（PDF §4，第 6–7 页）。这些是部署设置，不是训练 substrate 证据。

通用 episode terminal predicate、rollout 数、temperature、horizon、retry、optimizer、objective mix、compute、checkpoint selection 和 stage allocation 均为 unknown。部分测试运行超过七小时属于评测或产品观察，不能解释为训练 horizon。CLI conversation compaction 同样是产品 scaffold，不能转化为 compaction training 证据。

复现需要任务与代码仓库 manifest、固定环境、action/observation schema、review 与 preference record、成功和失败 trajectory、test/grader 版本、reward aggregation、全局 split、decontamination、来源权利以及 item-to-checkpoint lineage。此类训练包未被发布。
