报告从经过筛选并被自动形式化为 Lean4 的 NuminaMath 1.5 竞赛题，以及人工标注陈述出发。它描述了约 10 万条自动形式化陈述和 1 万条标注陈述，并重采样为 20 万条 prompt 池。Claude 3.7 Sonnet 创建约 2 万条非形式化/形式化冷启动轨迹，Kimi k1.5 提供非形式化思考，专家撰写或修订部分陈述和证明。来源记录和单条成员关系不可获得。

最终训练记录包含非形式化问题、Lean4 陈述、含非形式化推理和 Lean 片段的 think block，以及最终 Lean4 证明。论文称 RL 样本必须至少包含一个 tactic block，且 tactic block 应覆盖最终 Lean 代码的 60%。候选整证明 rollout 按 1,000 的 batch 抽取，但 rollout 数和解码设置为 unknown。最小 SFT 和非形式化数学混合先于基于 Kimi k1.5 管线、受 KL 约束的 RL。

RL 的终止条件是在 Numina/Kimina Lean Server 和 LeanREPL 中编译一份完成的证明。报告未发布训练 server 版本、mathlib snapshot、imports、执行镜像、核心 prompt、rollout、奖励日志，或完整的拒绝/保留记录。自动形式化筛选是另一层：它使用编译、QwQ-32B 一致性语义判断、Lean4 专家监督，以及矛盾、否定和琐碎性过滤。
