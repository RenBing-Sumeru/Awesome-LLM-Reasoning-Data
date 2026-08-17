论文报告了三个概念验证式应用。在 CooperBench 上，监督智能体将并行编码智能体的 pair-coding 通过率从 28.8% 提高到 54.7%。Counterfactual Replay Optimization 编辑工作流并只回放受影响的后缀；摘要报告其在 Terminal-Bench 2.0 上比 MetaHarness 高 12.8%，同时 wall-clock 降低 58%。这些结果证明运行时干预与前缀复用可行，但不能证明存在可复用的轨迹发布。

训练实验的 Table 5 在 89 个 held-out Terminal-Bench 2.0 任务上以 5 个 seeds 评测。Qwen3.5-35B-A3B 的 Base、Flat GRPO 和 Tree-GRPO 分数分别为 26.1%±4.21、34.2%±4.05 和 39.4%±3.87；Nemotron-3-Super-120B-A12B 分别为 30.3%±3.62、33.8%±3.41 和 37.2%±3.19。因此，在论文配置下，Tree-GRPO 相对 Flat GRPO 对 Qwen3.5 提高 5.2 个百分点，对 Nemotron-3 提高 3.4 个百分点。

底座实验只支持更窄的 reset 结论。fork 和 revert 作用于捕获的 copy-on-write 状态；不同 mutation size 的 sweep 报告 12/12 次检查中，revert 后工作目录与 fork 前状态一致。主基准的 fork 延迟约 134–143 ms，Mac/Docker Desktop sweep 约 340 ms。这些测量支持捕获的文件系统/沙箱回滚，不支持任意外部服务或不可逆调用都可撤销。
