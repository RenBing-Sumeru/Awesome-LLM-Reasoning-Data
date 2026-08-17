对于 **Data Construction and Open Release Recipes** track，START 目前最适合作为构造 pattern 与审计参考。由于数据、模型和环境均未公开，它**不具备直接复用条件**。

- **构建纠错轨迹 acquisition 原型。** 重实现前后干预设计，并保留原始 attempt、准确 hint、插入点、Python action、observation、修订、最终答案和两次正确性判定。数据对象应是成对轨迹，而不是只有接收答案。
- **比较 selection policy。** 固定 prompt、rollout count、解码预算、base checkpoint 和 SFT compute，对比 wrong-to-correct selection、随机接收轨迹、correctness-only selection、diversity selection 与保留失败。使用独立 audit set 测量 checker false accept 和 false reject。
- **研究 intervention cost。** 为表 5 的四个转移单元报告 denominator 与 confidence interval。优化净纠错，而不是只优化 wrong-to-correct 数量；一个修复部分失败却把正确答案转错的方法仍可能降低总体效用。
- **区分 unique prompt 与 trajectory。** 分别发布来源 prompt、去重后 unique prompt、采样 candidate、已执行 candidate、接收轨迹、拒绝轨迹和最终 SFT record 的数量。在这种区分出现前，START 的 10K 与 40K 应只视为作者报告的 sample count。
- **建立可重放 Python contract。** 固定 container digest、interpreter 与 package version、tool schema、timeout、resource limit、filesystem 与 network policy、state reset、exception schema 和确定性 seed。为每个 candidate 保存 stdout、stderr、exit status 与 test。
- **让 verifier 可检查。** 发布答案抽取与等价规则、代码 test、重复 detector、execution-error handling、threshold、checker version、逐条 output 与拒绝原因。Terminal predicate 应能独立于训练代码复现。
- **把 hint 设计作为受控变量。** 在固定 generation compute 下比较六种功能、语言 variant、插入位置和重复 hint 预算。保留 hint ID 与 paraphrase provenance，避免把收益归因于未记录的 prompt mixture。
- **把作者报告的失败作为 baseline。** 10.4% correct-to-wrong、67.0% wrong-to-wrong、hard-code 只提高 2.0 分，以及重复 hint 的非单调行为，都是新工具数据 recipe 应达到的最低审计目标。
- **训练复用前要求 release ledger。** 对齐 49,969 与 46,969、40K 与 36,895；附加上游 ID、split membership、去污染结果、来源 license、generator revision、seed、filter decision、hash，以及接收/拒绝 manifest。

该论文也可用于研究 inference-time tool activation，但不能把 Hint-infer 当作模型已学会稳健 agent 行为的证明：强制触发 Python 比“交互正确、必要、安全且可复现”弱得多。未发布的 START 对象不适合 PRM、preference learning 或 RLVR replay，因为它没有公开 step label、preference pair、scalar reward 或 verifier 实现。它也不应被复用为 evaluation set，因为这些 prompt 被描述为训练来源，而且缺少准确 overlap metadata。
