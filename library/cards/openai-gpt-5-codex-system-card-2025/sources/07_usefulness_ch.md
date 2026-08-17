安全复用等级是 **reading and audit reference only**。本 Card 可用于建立 Codex 报告的版本化披露矩阵：base checkpoint、SWE task family、repository/environment manifest、episode field、review 或 preference label、reward 与 terminal predicate、test integration、失败 trajectory、安全数据、split、license 和 checkpoint lineage。

对于 agent-data 设计，报告提示的目标记录应包含 task intent、固定 repository state、环境与工具版本、observation、command、file edit、test 与 result、final diff 或 artifact、review comment、人类 correctness/importance judgment、reward component、terminal status 和 provenance。成功与失败 episode 都应保留，并标明行为来自 training、evaluation、product telemetry 还是 deployment。

对于 code-review 研究，只应使用有许可且 revision 固定的 commit 重建评测，同时发布 rubric、多个独立 reviewer、agreement 与 adjudication 规则，以及明确的假阳性和假阴性分析。Executable test 应与人类 importance judgment 保持为独立证据通道。不能用后续内部 OpenAI PR hidden-test 设置替代本报告中的近期 open-source-commit 评测。

对于 reward 研究，可分别测试隐藏 contract 的不同解释：人类 PR-style preference、instruction-following judge、executable-test outcome、review-quality label 和 mixed objective。预算匹配的 ablation 应隔离收益来自 task data、reward choice、long-horizon scaffold 还是 inference time。当前报告没有提供任一 baseline 的实现。

对于部署审计，应将 sandbox、network default、approval、citation、log、screenshot 和 test report 作为控制与可观察性表面，而不是模型正确性证明。由于 Safety Hub 目前将 GPT-5-Codex 标记为不再生产使用，任何 operational reuse 都必须另行识别当前模型与当前产品 policy。
