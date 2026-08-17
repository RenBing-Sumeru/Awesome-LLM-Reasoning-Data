既有基线是只报告最终成功率或任务级分数的 agent benchmark；这些 benchmark 往往有各自的 harness，使 progress 和 repetition 很难跨环境比较。

AgentQuest 的变化在框架层：它把 agent/environment interaction 转成带通用 driver 抽象和额外 progress-style metrics 的模块化记录。方向信号是 agent evaluation 应保留足够 trajectory 结构来诊断失败，而不是把每次运行压成一个 terminal bit。

不新的部分是 agent 任务、tool-use benchmark 和环境成功谓词本身。复用前要检查启用了哪些 benchmark module、许可证是否允许再分发、progress 和 repetition 如何定义、state transition 是否忠于原环境，以及公开任务是否已进入模型训练数据。
