构造规模证据固定到论文 Table 1、Appendix A 与 `v0.1.0` JSON release。telecom generator 从 15 个 atomic subtask group 生成 2,285 个完整组合；发布的 full-task 文件包含 2,285 行，抽样 evaluation 文件包含 114 行。Appendix A 将这 114 个任务分为 29 个 service、36 个 mobile-data 与 49 个 MMS，覆盖 2–9 个 subtask。论文报告的 domain 评测数量为 airline 50、retail 115、telecom 114，但固定版本 release 的行数是 50、114、114。这个相差 1 条的 retail 冲突尚未解决，因此不能在不标版本的情况下报告单一 benchmark 总数。

评测对每个 task 进行四次 trial，temperature 为 0。论文在 telecom pass^1 上报告 GPT-4.1 为 34%、o4-mini 约为 42%、Claude 3.7 Sonnet 为 49%。从 No-User 条件切换到 Default 后，GPT-4.1 的 pass^1 下降 18 个百分点，o4-mini 下降 25 个百分点。这些作者报告的结果支持一个有限结论：在指定模型、simulator 与 budget 条件下，双控制会暴露协作难度。它们不能证明发布轨迹是高质量训练样本，不能证明 evaluator 无偏，也不能证明排序可泛化到其他 API 与任务。

user-simulator audit 提供了直接负面信号。两名 annotator 按四项标准检查每条抽样 trace。Table 2 报告 telecom 有 3/50 个 critical error、5/50 个 benign error、合计 8/50；airline 与 retail 的错误率更高。论文其他位置有一句话声称没有 critical error，这与表格及邻近正文冲突。本卡片采用表格数值并标出不一致，同时把该审计解释为 simulator failure 可能造成 agent false failure 的证据，而不是模拟可靠性的证明。

发布证据达到记录级。`v0.1.0` 在不同 model、domain 与 ablation 组合下包含 26 个 final result JSON。已检查的 GPT-4.1 telecom-default 文件有 456 个 task-trial episode：156 个 reward 1、300 个 reward 0。每条 run 都包含 message、tool call、component outcome、termination metadata、trial 与 seed。这能确认该文件保留成功和失败样本，不能证明所有可能 run 都完整，也不能证明存在统一的数据选择政策。

仓库支持可执行检查，但闭源模型的准确复现仍有条件。code 与 mock data 可以固定版本，外部 model availability、provider behavior、credential 与 serving revision 仍可能漂移。已接受证据中没有独立复现、对抗性 verifier 校准、污染审计或训练消融。因此 benchmark performance 只能说明固定配置下测得的 agent 行为，不能作为数据质量证据。
