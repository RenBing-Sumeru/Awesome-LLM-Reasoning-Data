核心贡献是一项两阶段长度契约。数据构造时，QwQ-32B-Preview 为 Code Evol-Instruct 问题生成响应轨迹，形成论文所描述的训练混合：较低复杂度提示对应较短推理，较高复杂度提示对应较长推理。推理时，Shifted Thinking Window（STW）限制第一轮思考；若生成因长度上限停止，则追加 “I overthought it, the final answer should be:” 再继续生成答案。

可复用数据对象是带 Qwen token 计数的答案级提示—响应对。它不包含步骤标签、分支结构、reward、judge 判决、执行结果、正确性位或独立终点答案。因此，其构造反馈契约为 `unknown`：文档所述约 3% 的移除针对重复推理，而非答案正确性，也没有被说明为提示去重或语义去重检查。

最接近的比较是在固定 74M-token 训练预算下选择长轨迹或短轨迹，并以 R1-Distill-Qwen-7B 作为效率基线。Z1 的差异在于把异质长度的 teacher trace 与运行时续写 scaffold 结合起来。STW 是预算机制而非已学习 verifier，发布的 token 计数是长度元数据，也不是轨迹正确或有用的证据。
