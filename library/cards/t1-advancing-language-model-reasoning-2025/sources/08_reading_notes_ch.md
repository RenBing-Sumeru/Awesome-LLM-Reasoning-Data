- 应将 §3.1 与 Appendix A 一起读：关键数据变换是“attempts + 基于标签的 critique/verification → merged chain”，而不只是“synthetic CoT”。
- 应将 §3.2 与 Appendix B 一起读：K=64、RLOO、高温、entropy、normalized KL 和 -1 坏回复 penalty 共同定义了报告的 RL 行为。
- Table 2 防止把结论误读成“温度越高越好”；其证据只是一个报告设置内的有限扫描。
- Table 3 防止把长度控制当作表面处理：penalty 同时改变 overlong ratio 和报告 accuracy，但其 detector 无法从发布物审计。
- Figure 6 应与 RL 结果分开看。prefix truncation/summarization 是对已生成回复的分析，不证明数据集提供 search tree 或普适的 test-time 策略。

容易误读之处：公开的 `rl-data.jsonl` 文件名本身不能反驳或解决 README 中“coming soon”的表述；必须检查其 schema 和发布文档。同样，92.4 的 MATH500 结果不是 data license、provenance 或 contamination 的证书。若决策需要的是中间步骤正确性而不仅是答案正确性，应将本卡与 step-verifier/process-reward 卡片配套阅读。
