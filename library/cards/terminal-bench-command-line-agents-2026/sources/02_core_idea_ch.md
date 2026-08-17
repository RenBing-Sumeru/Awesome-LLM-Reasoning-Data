一句话贡献：Terminal-Bench 提供了一个 benchmark 和 execution harness，用程序化测试衡量 autonomous agents 在困难、真实命令行任务中的表现。核心机制是把智能体放进终端沙盒，给出任务指令，让它通过 shell 命令行动，并用任务专属测试判断是否成功，而不是交给自然语言 judge 打分。

它的数据对象是环境 episode，不只是 prompt-answer pair。一个 episode 包含任务指令、初始文件系统和依赖状态、命令/动作轨迹、stdout/stderr 反馈、最终文件或状态、测试脚本，以及用于任务编写和校验的 oracle/reference solution。这使它适合研究命令轨迹、环境交互、工具使用和 execution-grounded failure modes。

反馈契约是 environmental + programmatic：命令会改变沙盒状态，harness 记录观察，测试决定任务是否成功。它因此区别于对话偏好数据集，也区别于只返回单个函数体的静态代码生成任务。

最接近的对比包括 OSWorld 的桌面智能体环境、SWE-bench 的仓库 issue 修复、InterCode 的交互式代码/游戏环境、AppWorld 的可执行 app/tool 任务，以及 WebArena/BrowserGym 的网页智能体环境。Terminal-Bench 是命令行接口上的对应物：模型必须在可复现 harness 下通过文本终端完成任务。
