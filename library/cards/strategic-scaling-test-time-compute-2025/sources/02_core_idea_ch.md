论文的核心贡献是一个 pure-exploration 风格的 bandit 建模：每个问题是一只 arm，每次 pull 都为该问题再生成一个回答。基础 Elimination 算法维护活跃问题集合，并按轮次为每个活跃问题采样 K 个回答；它更新当前最高分回答，当 oracle 分数达到阈值 gamma 时淘汰该问题。由此，已被视为解决的问题不再消耗预算，剩余算力转移给仍不确定的问题。输出包括用于 coverage 评估的回答集合和用于 accuracy 评估的最高分回答。

反馈契约是混合且依任务而变的。论文在 Llama 系列的 MATH-500 实验中使用 Qwen2.5-Math-PRM-7B，在 Gemini-2.5-Flash-Lite 上使用 Gemini-3.0-Flash 作为 LLM judge，在 AIME25 上使用 self-consistency，在 LiveCodeBench 上使用可执行 ground truth；有条件时还报告 ground-truth oracle 分析。self-consistency 版本依据答案达到足够一致来淘汰问题，而不是依据学习到的分数。UCB、gap-based 和 entropy 探索变体改变未解决问题的采样优先级，每题上限则限制过度分配。

与统一 Best-of-N 和两阶段 explore-then-commit 分配相比，关键变化是在不训练辅助 allocator 的情况下跨问题全程自适应重分配。它属于 Rollout, Search, and Test-Time Trace Data，因为分配决策、oracle 输出、淘汰状态和预算都是一等记录；只有最终 benchmark 答案无法重建这些过程。
