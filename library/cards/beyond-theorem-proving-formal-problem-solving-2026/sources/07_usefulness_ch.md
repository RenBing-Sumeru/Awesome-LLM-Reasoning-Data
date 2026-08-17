1. **过程可验证数学评测：** 用 FormalMath500 等测试模型能否在 Lean 内找答案，而非只证明给定结论。

2. **RL 环境：** 将 Lean solution state 作为状态、tactic 作为动作、终局完成作为确定性 reward，训练 formal RL agent。

3. **答案验证：** 对集合、区间和函数答案使用 RPE 替代字符串匹配。对不可形式化或需要近似数值容差的任务，不宜直接采用 FPS，应保留领域专用 checker。
