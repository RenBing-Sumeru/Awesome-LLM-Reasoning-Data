release scale 的证据在唯一 trajectory 层面一致。论文报告 1,302 条轨迹，覆盖五个 benchmark 和四种 source LLM。固定 Hugging Face revision 的 inventory 包含 132 个 AssistantBench、300 个 VisualWebArena、398 个 WebArena 和 472 个合并计算的 WorkArena/WorkArena++ cleaned JSON，总计 1,302 个；另有 1,302 个 screenshot directory，以及每条 trajectory 15 个 judgment file。这些数量证明发布形态，不证明正确性或训练数据质量。

以专家 success 为参考，主表整体比较中没有任何 LLM judge 的 precision 超过 70%；报告的最佳整体结果是 GPT-4o(A) 的 69.8%。这对 trajectory filtering 很重要，因为较高 false-positive rate 可能纳入失败 episode。functional rule evaluator 的 precision 为 83.8%，recall 却只有 55.9%，支持作者关于特定任务 rule 会低报语义成功轨迹的结论。高 precision 并不意味着 rule contract 完整。

输入表示会改变简化 judge。Table 2 中，GPT-4o-mini 的 success precision 分别为：仅 screenshot 64.5%、仅 accessibility tree 61.5%、两者同时使用 62.1%、两者都不用 60.7%。这种非单调结果说明 judge 对 representation 敏感；它不能证明 screenshot 普遍更优，也不能证明某种表示已足够。

论文报告 GPT-4o WebArena trajectory 第二次标注的 annotator 间 success agreement 为 89.3%。对固定 CSV 直接计算 exact match 时，结果会随 subset 和 `Unsure` 处理而变化，虽接近但不完全相同；release 也没有冻结的 script invocation 或 agreement output 可精确复现 89.3%。论文没有报告四级 optimality 的 exact agreement。共识讨论可能提高一致性，但 release 没有保留完整的独立分歧与 adjudication history。

定性错误分析指出，grounding mismatch、误导性的 agent reasoning、遗漏 instruction detail 与误解 action intent 都会导致 false-success judgment。side-effect positive 很少，使该字段的 precision 很低、结论不稳定。这些是反馈信号的直接局限，不能被压缩为单一 leaderboard 数字。

最强的证据边界是：AgentRewardBench 允许逐记录比较专家标签、environment rule 与 LLM judgment，并保留成功和失败的已完成 episode。论文证明的是 evaluator evaluation；它没有证明这些轨迹能改进 reward model 或 policy，没有证明专家标签无误，也没有证明 environment 可确定性重放，更不能用 benchmark 表现认证数据质量。
