既有基线包括静态代码 benchmark、仓库级修复 benchmark、桌面智能体 benchmark，以及交互式代码环境。它们测试了同一能力栈中的若干部分，但没有把真实命令行操作作为核心接口，并配套任务级可执行测试。

新变化在 benchmark unit：一个真实感终端任务配有独立环境、参考解法和综合验证。智能体必须在执行反馈下做出一连串会改变状态的决策。这使命令行成为一等环境 substrate，而不是代码答案背后的隐藏实现细节。

它作为 2026 方向信号的原因是：agent evaluation 正在转向可复现工作环境，成功依赖工具使用、文件系统检查、依赖管理，以及从失败命令中恢复。Terminal-Bench 的价值在于用 harness 让这些行为可观察、可评分。

并不新的部分包括：用 unit tests 做 verifier、沙盒化代码执行、用 leaderboard 比较模型。新意在于把 terminal-centric tasks 以较高难度和 benchmark 规模包装出来。复用前需要检查 task provenance、license、public/private split、hidden-test policy、轨迹是否释放，以及公开任务是否已经进入训练语料。
