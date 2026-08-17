已披露的构造与使用流程如下：

1. **来源与 cold start。** 未发布的内部合成 SFT 数据在 Seed-Prover 1.0 基础上教授工具语法与交互。RL 混合 Big-Math、NuminaMath、CriticLean、Kimina-Prover Preview、Lean Workbook 及包含 Graduate Texts in Mathematics 的内部教材形式化。
2. **课程过滤。** 用 SFT 策略执行 Pass@4×8；删除成功超过三次的题目和所有提示都无法解决的题目。若失败轨迹摘要能解而直接提示不能解，则以直接提示保留。数量与父子映射未公开。
3. **Agent 经验。** 形式命题及可选自然语言证明/失败摘要进入多轮策略。模型生成推理并调用 Lean/LooKeng、Mathlib 语义搜索或 Python；工具响应更新上下文，已证 lemma 连同依赖被缓存。预算耗尽时生成摘要并可重启；最终 theorem 经 Lean 验证得 `+1`，否则 `-1`。
4. **环境与 RL。** 单条直接轨迹上限为 64K token、28 次工具调用。搜索固定到 Mathlib v4.22.0，评测使用 Lean v4.22.0。VAPO 结合 ReTool 式工具 PPO，仅使用终止结果奖励。SFT/RL 记录、工具环境、奖励代码、优化器细节和失败经验未发布。
5. **Sketch Rubric RL。** 基于 Doubao-Seed-1.6 的自然语言 prover 先写证明；sketch 模型将其转为至少三个以 `sorry` 占位的 Lean lemma 和透明主证明拼装。Lean 给出结构分 `S_FL`；未披露自然语言 verifier 排除错误原子 lemma；未披露 Long-CoT LLM rubric 评价策略对齐、分解、难度降低、lemma 价值/利用率和 junk value，形成 `S_NL`。仅当 lemma 数≥3、`S_FL≥0`、`S_NL≥0.7` 时奖励 `+1`，否则 `-1`。
6. **分层 TTS。** Lean agent 以 Pass@3×3 证明或反证每个叶子；失败叶子递归分解，反证叶子触发 sketch 修订。所有叶子验证后整棵树才成功。Putnam 从 depth 4 开始，可带缓存 lemma 重启到有效 depth 8。
7. **算力规模。** Agent-only light 使用 Pass@8×8。完整 Putnam/FATE/Combi 每题最多 10 H20-days；IMO 2025 约 20；Putnam 2025 每题最多 40 H20-days。总 token、调用、分支数、并行宽度和利用率未知。
