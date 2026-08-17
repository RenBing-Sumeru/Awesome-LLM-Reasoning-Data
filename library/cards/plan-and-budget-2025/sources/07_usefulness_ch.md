**复用等级：评测/推理 recipe 与审计参考；未获准作训练数据复用。** 构建者可用该仓库在匹配的任务/模型条件下比较固定 global cap、仅规划 prompt、均匀分配和 credit-weighted schedule。应记录 planning tokens、目标模型 tokens、endpoint/model revision、schedule 和逐项分数，而不只记录 E3。

对分配的 rollout/search/test-time-trace 赛道而言，有用的单位是 episode schema：保留原始项标识与版本、分解 prompt/output、credits、level budget、实际 API usage、最终 prediction、evaluator version/output 以及 failures。这样能把分配主张变成可审计轨迹记录，也能分离 planner effect 和 budget effect。

对评测设计而言，MATH 的程序化答案检查比 TravelPlanner 的 LLM JSON 转换更可复现，但二者都不能在未测试 false positive/negative 的情况下证明适合奖励使用。生产使用若需要，应实施真正的 token-enforcement mechanism，测试 schedule sensitivity 和 credit calibration，并把 benchmark prompts 与之后的训练混合物分开。
