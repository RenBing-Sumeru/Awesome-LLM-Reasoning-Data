主要贡献是一套耦合的系统/数据配方。Forge 将任意 black-box 或 white-box agent 与 LLM、环境、奖励、rollout、训练服务器解耦；异步调度和树结构样本合并扩展轨迹收集。CISPO 再把性能与速度反馈转为长度归一化 trajectory advantage，同时 Forge 保存 outcome 和 process reward。

它在早期 MiniMax-M2 agentic-workspace 方向上增加了具体 M2.5 发布、229B FP8 checkpoint、更广工作环境和速度感知 RL。反馈系统可以观察测试、任务完成、过程质量、时间与交付物判断，但不能由此证明来源权利、超出 verifier 的语义正确性或基准洁净性。
