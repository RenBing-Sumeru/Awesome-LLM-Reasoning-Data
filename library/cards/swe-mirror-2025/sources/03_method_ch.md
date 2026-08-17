流程分为三个阶段。任务收集阶段，Qwen3-32B 阅读每个目标仓库的 README 并生成五个搜索关键词；GitHub 搜索按 star 与 issue 数量取前 20 个仓库。候选 pull request 必须关联 issue、已合并且关闭，并修改代码。随后，LM prompt 筛选实质性的 bug fix 或 feature，要求它既高质量又能镜像到目标仓库。GPT-4o-2024-0513 再把仓库特定名称、路径和 trace 压缩为可迁移的抽象描述。

任务镜像阶段由 GPT-4.1 支撑 Agentless 风格的定位和 Search/Replace patch 生成。Test Agent 定位源码与测试文件并创建 `test.patch`，要求加入在目标仓库当前代码上能够通过的非平凡测试。Mirror Agent 接收抽象描述和由测试提供的结构线索，只修改非测试源码，生成会使测试失败的 `mirror.patch`。流程移除其中的注释，把它反转为 `fix.patch`，最后由 LM 使用原始 issue、`test.patch`、`fix.patch` 和 Gym 示例生成 `problem_statement`。

验证先检查 `mirror.patch` 能否应用到 `base_commit`，以及 `test.patch` 与 `fix.patch` 能否在其后应用。随后分别在仅应用 mirror patch、再加入测试、以及应用全部三个 patch 的状态下运行完整测试套件，形成 `Run.log`、`Test.log` 与 `Fix.log`。可接受的转换必须保持已有结果、至少包含一个 `ANY -> FAILED -> PASSED` 测试、禁止论文列出的“通过/跳过变失败”回归，并剔除 flaky 或异常情况。去重要求 fail-to-pass 测试和 `fix.patch` 内容均不同。种子 Gym 来自 SWE-Gym、SWE-rebench 与 Multi-SWE-RL；Gym 选择设置完整测试五分钟、内存 1 GB 的限制，并进行人工基础功能检查。

后训练数据方面，Claude 3.7 Sonnet 与 Claude 4 Sonnet 被用作 15,000 个任务子集上的专家生成器；每个任务进行三次采样，温度为 1.0，每次最多 100 轮。只有发出 `finish`，且最终 patch 通过的测试集合覆盖 `fix.patch` 所修复测试的轨迹才算成功。流程得到 6,431 条成功 SWE-Mirror episode，再与 6,025 条 SWE-rebench episode 合并。Qwen2.5-Coder-Instruct-7B 与 32B 最多微调三个 epoch，使用 AdamW、0.01 weight decay、0.1 warmup ratio、峰值学习率 5e-5 和 32,768 token 上下文。Error Masking 保留错误动作的上下文，但屏蔽对应 response loss；它并不把整体失败 episode 当作正向示范保留。

准确任务 split、15,000 个任务的成员列表、容器镜像、仓库 commit manifest、依赖锁、harness/parser 修订、prompt 代码、随机种子和模型 endpoint 版本，均无法从已核实公开 artifact 中取得。精确重建任务或重放轨迹前必须固定这些要素。
