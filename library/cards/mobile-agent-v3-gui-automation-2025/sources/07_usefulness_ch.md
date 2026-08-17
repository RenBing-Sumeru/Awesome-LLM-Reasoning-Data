可以把这篇作为 GUI-agent feedback loop 的 schema 参考。应保留 task id、platform、environment image、initial state、截图或观察、action grammar、选择动作、若保存则包含模型理由、执行结果、verifier outcome 和 filtering decision。

它适合用来构建轨迹数据集、比较 GUI foundation model，并审计环境反馈是否足以支撑 post-training。

放进 atlas 时，benchmark evaluation、自进化数据生成和模型训练 claim 要分开。accepted 与 rejected trajectories 应保留同一套 provenance 字段。
