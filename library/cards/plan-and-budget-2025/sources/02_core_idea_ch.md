其贡献是一个免训练、模型无关的测试时 scaffold：Plan 把查询变成带 hints 的有序子问题，Budget 则根据推断的难度/credits 与调度规则，提示目标模型在各部分投入多少推理。理论上的 Budget Allocation Model（论文部分位置称 BBAM）主张在不确定性较高处投入更多计算；具体实现是提示式分配策略，而不是学习得到的 verifier 或 reward model。

反馈契约是混合的、任务级的。MATH-500 以解析答案后的 `math_verify` 检查；NaturalInstructions 使用 ROUGE-L；TravelPlanner 先由第二个 LLM 将文本转为 JSON，再交给 TravelPlanner scorer。E3 = A^2 / T 把任务分数 A 与平均计费 completion tokens T 汇总。这些信号都不能说明某一中间子问题是否正确；credits 用于引导分配，但不是经过验证的过程标签。

最接近的比较对象是固定 global budget 和仅规划的 baseline。Plan-and-Budget 的差别在于其分配依赖子问题 credits 和可选的 decay schedule。它属于 rollout/search/test-time trace data，因为分配元数据介于输入与被评分的 completion 之间，尽管作者运行的原始轨迹未发布。
