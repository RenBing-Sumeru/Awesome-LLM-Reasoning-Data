本卡以 ICML 2025 正式论文为权威来源；该文收录于 PMLR 第 267 卷，页码 61240–61265，只有在说明版本差异时才使用 arXiv v1。论文要回答的问题是：当每个 GitHub issue 都必须在历史依赖与测试环境中重放时，如何突破少量人工配置仓库的限制，自动构造仓库级代码基准。SWE-bench 的手工环境配置成本以及仅集中于 12 个热门仓库的范围构成直接动机（论文 §1，pp. 1–2；PMLR 条目）。

这里的工程缺口不只是生成任务。一个可用实例还需要可执行的修复前代码版本、正确的历史依赖、能运行目标测试的命令、人工参考代码补丁和测试补丁，以及把异构日志转换为测试结果的 parser。SetUpAgent 自动化了这一环境层，作者随后构造了面向 Python 应用的 SWA-Bench，以及覆盖更广 PyPI 仓库池的 SWEE-Bench（论文 §§3–4，pp. 3–6）。

本卡归入 `environment_agent_trajectory_data`，因为评测对象把仓库状态、可执行 Docker 环境和终态成功谓词绑定在一起。它不是 agent trajectory 语料发布：公开记录包含任务、补丁、环境命令、测试分区和环境引用，但不包含 action/observation 流、工具调用历史、推理轨迹或逐步 reward。

一个基准实例包含 `repo`、`base_commit`、issue 文本与 hints、人工参考 `patch` 与 `test_patch`、时间戳、PASS_TO_PASS/PASS_TO_FAIL/FAIL_TO_PASS/FAIL_TO_FAIL 列表、安装与测试命令、parser/framework 元数据和 Docker image root。其 Atlas 价值是把任务 provenance、环境重建、可执行反馈和发布审计明确连接起来。现有证据足以形成双语 Card，但 SetUpAgent 源码、不可变环境 manifest、数据集 license 和发布行数对账仍为 unknown。
