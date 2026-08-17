在 MDE 评测上，DockSmith 报告 F2P 为 39.72%、Commit Rate 为 58.28%；基础 Qwen3-Coder 分别为 19.46% 和 34.13%。F2P 是执行正确性结果，Commit Rate 只衡量是否倾向提交，不能当成正确率。附录中的 JEG2/highline 代表性案例里，baseline 到达 50 步，而 DockSmith 在 5 步终止；单个案例不能证明 50 步是通用生成上限。（Table 1；Appendix B.1 的 Table 9 与 Listings 1-2）

筛选与课程消融在固定预算下报告三次运行的平均 F2P：baseline 为 32.24，acceptance shaping 为 34.03，仅 curriculum 为 33.13，两者同时使用为 34.93。这支持论文条件下的联合整理配方，但不能证明每个被接受 fragment 都是高质量数据。（Table 4 与 §3.4）

迁移收益依赖混合比例。SWE-only 训练在 SWE.V、SWE.M、Terminal 上分别为 49.65、31.83、10.67；Docker:SWE 为 1:1 时，SWE.V/SWE.M 为 51.90/33.92；1:0.5 条件下 Terminal 达到 14.04。把 Docker 比例增到 1:2 后，三项降为 49.55/31.75/11.52。这说明特定比例的 Docker 交互数据可能帮助更广泛的软件 agent 任务，也同时说明增加 Docker 数据并非单调受益。（Appendix Table 8）

基于 GPT-5.1 的错误分析为 baseline 标注 3,757 个事件，为 DockSmith 标注 2,161 个；critical error 从 2,454 降至 1,468。Context Retrieval 错误却从 285 增到 316，上升 10.9%。恢复率分析同样有正有负：runtime 与 logic 恢复改善，shell 与 environment 恢复分别下降 2.4 和 4.6 个百分点，总体恢复率从 75.7% 变为 75.6%。案例分析还指出 Dockerfile rollback/state inconsistency、碎片化依赖诊断、诊断振荡以及 eval-protocol violation。（Tables 5-6、§3.5、Appendix B.1）

以上性能和错误计数均为作者报告，本 Card 未做独立复现。GPT-5.1 标签属于自动化 judgment，而不是程序化 ground truth，论文也没有报告人工一致性研究。基准提升只能说明所选训练流程具有下游效用，不能证明逐条数据质量、许可、安全性或确定性重放。
