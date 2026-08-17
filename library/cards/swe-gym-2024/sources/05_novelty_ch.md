此前很多 SWE-agent 工作把 SWE-bench 当作评测目标，但带严格仓库级执行反馈的训练环境相对缺乏。SWE-Gym 的变化是把对象从静态 benchmark 推向可复用环境，用于产生监督和 verifier 数据。

具体变化在于把可执行任务、采样轨迹、fine-tuning 与 verifier-based inference-time scaling 连起来。论文结果显示，性能可以同时来自训练时 trajectory data 和推理时 verifier selection。

质量信号是 SWE-Gym 在外部 SWE-bench Verified 与 Lite split 上报告增益，而不只是在自己的环境上打分。发布还包含公开数据/模型和 scaffold-specific reproduction instructions，比只有分数的报告更可审计。

不新的部分：终端正确性 predicate 仍依赖仓库测试，下游评测仍继承 SWE-bench 的公开任务污染和环境漂移风险。复用检查应区分 environment construction、agent training、verifier training 与 evaluation split。
