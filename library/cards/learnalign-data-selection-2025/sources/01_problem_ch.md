LearnAlign 正式发表于 Findings of ACL 2026；arXiv:2506.11480 保留了 2025 年 6 月的首次提交历史，也解释了 entry ID 中的年份。论文处理 reinforcement learning with verifiable rewards 内部的数据构造问题：大型 prompt pool 中既有当前 policy 几乎总能答对的题，也有它几乎从不答对的题；uniform RLVR 会持续消耗生成与更新计算，却没有判断哪些 prompts 对这个精确 policy 有用。

选择对象不只是 question-answer pair。若要复现，应把上游 prompt ID 与 gold answer 绑定到 warmup 决策、policy checkpoint、8 条生成 rollouts、二元正确性判定、成功率 p、learnability p(1-p)、每题投影后的 GRPO gradient、两两 alignment scores、行平均分、排名和 top-N 决策。

这一对象依赖 policy。更换 checkpoint、warmup set、candidate pool、parser、projection 或 random seed 都可能改变排序。因此 LearnAlign 在 Data Construction and Open Release track 中应被视为选择 recipe 与审计案例，而不是与模型无关的质量标签或已发布的 reasoning corpus。
