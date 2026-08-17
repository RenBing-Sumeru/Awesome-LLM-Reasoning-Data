安全复用等级是 **reading and audit reference only**。本 Card 可作为四层模板：training intervention、evaluation record 与 scorer、monitorability infrastructure 和 deployment safeguard。每项主张都应保留所属层、日期、model/monitor checkpoint、sampling frame、environment、budget 和 terminal predicate。

对于 long-rollout data design，应构建包含 task/workspace revision、actor/change ownership、初始与中间 state、command/tool call、agent-authored change、simulated-user work、revert operation、final artifact、preservation/task-correctness predicate、reward component 和 failure label 的记录。还应发布 semantic test，以及“保留 diff 但破坏意图”的对抗样例。

对于 dynamic safety evaluation，应保留完整 multi-turn trajectory、simulator model 与 prompt、adaptive attack policy、per-message label、worst-case aggregation 和失败样例。对于 production-like resampling，应固定 traffic window、deidentification procedure、保留 context、被替换 final turn、resampling model、automatic labeler，以及估计中未包含的 product safety stack。

对于 monitorability 研究，应把 CoT monitor 与 answer/task grader 分开。报告 CoT-only、action-only 和 combined observation、label mismatch、class prevalence、CoT-length stratum、monitor calibration、cross-fit split 和 environment-level 结果。重建 CoT-Control 时应显式发布合成 instruction template，且不能将低 control 解释为形式化 non-steerability 保证。

对于 agent 与 cyber evaluation，应把 hidden test、flag、pass@1、any-success、medal threshold、expert rubric 和 policy compliance 保持为不同 contract。公开替代物应固定环境和测试，发布失败 trace，并比较 learned grader、programmatic judgment 和 human judgment。

对于部署审计，应分别评估 topical classifier 与 safety-reasoner monitor，包括假阳性、假阴性、threshold drift、latency、appeal/manual-review path 和 actor-level enforcement。这些控制绝不能替代训练数据或 model-only safety 的证据。
