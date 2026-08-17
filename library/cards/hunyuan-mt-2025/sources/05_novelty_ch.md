报告把 corpus-mixture search、judge-filtered supervision、translation RL 与 test-time fusion 连成一个模型生命周期。RegMix-style CPT 的构造价值在于用 small-model loss predictor 代替人工选择多语比例，同时用 original-data replay 显式缓解遗忘。

3M→268K 漏斗组合 automated QE、强 LLM judge、多轮 many-shot evaluation 与定向 human verification，比单阈值过滤更系统；但缺少按 source/language 的 retention yield，无法判断哪些社区和领域被不成比例地移除。

Translation GRPO 属于 soft-verification regime，而非 deterministic RLVR。Reward 组合 learned quality estimate、LLM judgment、terminology preservation 与 repetition control。Process-plus-final CoT 实验进一步提示 trace quality 需要直接监督，但定义未发布，只能视为研究线索而非可复现 recipe。

Chimera 通过向 fusion policy 提供 6 个 translation candidate，使 weak-to-strong aggregation 变得具体。它允许 inference 时比较 hypothesis，但每个答案至少需要 6 次 base generation 加 1 次 fusion；论文没有披露 candidate budget、sampling schedule 或 cost-quality curve。
