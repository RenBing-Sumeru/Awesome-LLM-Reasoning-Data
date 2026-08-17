SWE-Flow 发布 16,061 个训练实例和 2,020 个测试实例，并建立 SWE-Flow-Eval。每个实例来自真实 GitHub 项目，记录当前部分代码库、阶段性 unit tests、目标修改和可执行环境，形成多步 TDD 数据，而不是只给最终修复补丁。

核心构建对象是 Runtime Dependency Graph（RDG）：系统动态执行测试，观察函数调用关系，再据此安排开发 schedule。每一步都能由当阶段测试验证，最终资产包括数据、模型、Docker 镜像和生成代码，适用于 TDD agent 的 SFT、执行反馈训练与评测。
