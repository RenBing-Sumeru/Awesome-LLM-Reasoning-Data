构造流程从作者提出新任务或受热门仓库启发的任务开始。不能迫使智能体作出实质架构选择、或前沿智能体可单次完成的提案会被移除。作者随后编写检查点规范、示例、静态资产、参考实现与黑盒测试；验证智能体用于暴露歧义，并由至少一名非起草作者复核测试/规范一致性和原则上的可解性。最终发布保留 36 个问题、196 个检查点，每个问题含 3-8 个检查点。完整提案池、拒绝账本、试运行输出和裁决历史均未公开。

评测时，检查点 1 从空目录开始。原生 Claude Code、Codex CLI、Cursor CLI、Kimi CLI、OpenCode 或相关 harness 接收当前规范并修改工作区。每个检查点都在新的非 root Docker 容器中运行；只有工作目录持久化，已安装软件包、shell 历史、智能体 session 与对话状态都会重置。测试、参考实现、erosion、verbosity 和验证反馈留在评测侧。每个完整问题的墙钟上限为 2 小时，没有 turn 或金额成本上限。

每当生成一个工作区，隐藏 pytest 测试组便检查 core、functionality、error 与 regression 行为。strict 成功要求通过全部适用测试；isolated 去掉 regression；core 只使用核心用例。若智能体失败或崩溃，其余检查点的正确性全部记为 0。相反，erosion 与 verbosity 只在工作区存在时计算，缺失质量值会被排除而不是补 0。这一区别属于记录 schema 本身，也造成了幸存者边界。

静态分析利用可调用单元的圈复杂度与源码行数计算 erosion，把质量集中到圈复杂度大于 10 的函数；verbosity 则取 137 条人工整理的 AST-Grep 规则与克隆检测命中行的并集，再除以代码行数。当前 runner 还可序列化 user、agent、thinking 与 tool-use step，工作区快照，evaluation/quality JSON 或 JSONL，逐测试结果、基础设施状态、diff，以及 token、step、时间和成本字段。

官方任务侧发布 v1.0 规范、测试、参考实现、资产和 canary，许可证为 Apache-2.0；v0.3 runner、prompt、配置、lockfile、指标代码、Docker 流程及快照/评测机制采用 MIT。稳定锚点分别是问题 commit 4d38d300059667d57e43c31969bc455f5c338b52 与 runner release commit 25bd2b9a216df93e85bb46f741c0e2d1f422b111。项目没有发布把历史 run ID、工作区、轨迹、测试日志、质量记录、seed、provider 快照和 OCI digest 绑定到论文结果的不变清单。

该工作不包含训练优化器。主报告在全部 36 个问题上使用固定的 196 检查点正确性分母；主模型表为每个模型选择最佳 just-solve 运行，完整表则保留 prompt 与 harness 变体。temperature、seed、完整重复运行策略、重试/限流处理和完整采样账本均为 unknown。因此有证据支持的是 evaluation 与 audit，而不是 SFT、RL、reward-model training 或轨迹蒸馏。
