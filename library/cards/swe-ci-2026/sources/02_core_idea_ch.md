SWE-CI 把未来测试转化为闭环 CI 反馈契约。Architect 将 target-test 失败与当前仓库进行比较，再写出最多 5 条紧急、高层需求。Programmer 接收该文档，规划实现、修改当前代码，并交回 pytest 评测。被接受的仓库状态和测试证据进入下一轮，使早期设计决策的后果能够在最多 20 轮演化中被观察。

原生 verifier 是可执行测试，而不是主观裁判。通过测试的数量相对于 base 与 target 状态进行归一化；当前汇总把序列按 gamma 1 平均成 EvoScore，并分别报告 Resolved、Zero_regression 与 ZRR。这是针对状态转移的标量 reward，不是在线发给模型的学习型奖励。Runner 完成也不等于语义成功：一个未解决 episode 到达轮数上限后，可以在没有编排异常的情况下结束，却始终没有通过全部 target tests。
