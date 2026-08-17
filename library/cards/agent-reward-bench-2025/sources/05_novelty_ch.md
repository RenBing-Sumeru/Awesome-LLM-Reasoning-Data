在 AgentRewardBench 之前，网页智能体评测通常依赖 benchmark-specific functional rule，human review 是成本较高的后备方案，LLM judging 则是合理但审计不足的替代方向。该工作的具体变化是把 evaluator 本身变成 benchmark target：同一批 1,302 条完整 episode 同时配对专家参考、rule 输出与多种 LLM judge 输出，从而在共享记录集合上比较 precision、recall、disagreement 与 failure mode。

该 release 为这类 benchmark 增加了少见的审计深度。它公开 cleaned trajectory、与 step 关联的 screenshot file、原始专家 annotation row、task-level split、evaluator input/output、completion argument、provider response、parsed label、cost 与 source-trajectory metadata，并保留成功和失败的已完成 episode。因此自动 evaluator 层可以直接检查，而不只表现为 aggregate score。

该工作没有发明五个 source benchmark、AgentLab、BrowserGym、四种 source model family、human trajectory review、environment reward 或一般意义上的 LLM-as-a-judge；也没有产出训练后的 reward model、agent policy、确定性 replay package 或已完整授权的 training corpus。四级 optimality 字段出现在 prompt、release data 与 scoring code 中，但它与论文“3,906 个 binary annotation”的调和不足属于 release-version 问题，不能当成另一项已证明贡献。

对 `environment_agent_trajectory_data` 而言，方向信号是反馈 provenance 应随 episode 一起发布。缺少 predicate 的 terminal reward、缺少 representation 与 model configuration 的 judge label，或缺少 annotation protocol 的 human label，都不足以支持审计。AgentRewardBench 展示了有用的 multi-signal record，同时也说明 disagreement 与 provenance 缺失本身就是数据对象的一部分。

复用时应核验固定版本的 trajectory 与 annotation hash，显式连接 task split，保留重复 annotation row 与 `Unsure`，区分专家判断和 LLM 生成 reasoning，固定全部 evaluator configuration，并同时保留 success 与 failure。在任何面向训练的转换前，还必须解决许可证、上游权利、环境版本、replay fixture、去污染、隐私与标注调和问题。规模和 benchmark score 不能替代这些检查。
