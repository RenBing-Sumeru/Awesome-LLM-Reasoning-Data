输入包括任务定义、沙盒设置、可选 Docker/runtime 依赖、agent adapter、模型，以及 dataset name、dataset version、并发数、运行预算等 harness 参数。仓库文档说明可通过 `terminal-bench` package 安装，并用 `tb` CLI 执行；README 示例使用 `terminal-bench-core` 和 dataset version `0.1.1` 进行评测。

流程是：加载任务，准备终端环境，把智能体连接到沙盒，允许多轮命令执行，收集 observation 和日志，运行任务测试，并汇总得分。每个任务包含英文指令、测试脚本和参考解法。论文把 Terminal-Bench 2.0 描述为由真实工作流启发的困难终端任务集合，并为任务提供综合测试用于验证。

输出包括单任务 success/failure、命令轨迹、执行日志、测试结果，以及 leaderboard 风格的 benchmark record。verifier 是任务测试套件和智能体行动后的终端状态。环境本身是 measurement object 的一部分，因为依赖、文件系统布局、runtime 隔离、timeout 策略和 harness 版本都会影响结果。

训练用途需要谨慎处理。它的主要用途是 evaluation 和 audit；若将轨迹转为 agent-training data，则必须先处理 license、split leakage 和 task contamination。复用前需要核验 arXiv 论文、OpenReview forum、项目网站、GitHub 仓库、package version、dataset registry entry、任务 license 和 leaderboard submission rules。
