读 MobileAgentBench 时先把它当 harness 论文，再看分数表。关键对象是可执行 episode：instruction、reset state、observation channel、action trace 和 validator result。

不要把“易用”理解成“天然可比”。安装运行更容易会提高采用率，但分数可比性仍取决于 emulator、应用、任务数据、action interface、prompt 和 validator revision。validator success、模型最终回答和人类感知的任务满足度应保持为三种不同 claim。

下游使用时宁可记录 unknown，也不要补全事实：license 细节、hidden/private split、live-service 依赖和精确 app-state 假设，都可能决定它适合再分发、训练，还是只适合本地评测。
