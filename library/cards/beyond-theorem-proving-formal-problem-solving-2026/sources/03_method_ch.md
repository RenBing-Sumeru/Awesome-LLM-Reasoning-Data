1. **形式化问题：** 将变量、假设、待求量和结论编码为含 existential/metavariable 的 Lean 命题。

2. **执行 FPS：** 模型逐步调用 tactic，Lean 检查每次状态转移；所有洞填满且目标证明完成才成功。

3. **执行 D-FPS：** 先前向构造答案，再在后向阶段证明 soundness，必要时同时验证 completeness。

4. **构建基准与评分：** 将 MATH500、MiniF2F、PutnamBench 重构为求解任务，使用 Lean 与 RPE 比较答案。复现需固定 Lean、Mathlib、proof search budget 和答案归一化。
