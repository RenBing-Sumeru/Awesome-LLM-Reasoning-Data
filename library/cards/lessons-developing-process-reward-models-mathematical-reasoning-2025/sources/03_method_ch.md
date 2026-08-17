初始 MC 设置报告了约 500K 个带 golden answers 的 queries。每个 query 由混合的 Qwen2-Math-Instruct 和 Qwen2.5-Math-Instruct 7B/72B 模型生成 6--8 条 responses，并按双换行切分。每个步骤起点处，对应的 Qwen2.5-Math-Instruct 模型生成 8 次独立 continuations，到达 golden final answer 的比例提供 MC signal。只要任一 continuation 到达该答案，hard label 即为正；初始流水线会移除第一个零标签错误之后的步骤。

对于 consensus filtering，Qwen2.5-72B-Instruct 作为 critic 审查每一步。论文只保留 critic 和 MC method 对 error-step location 一致的记录。它报告一个 860K comparison pool 约保留 40%，以及一个 3M MC pool 得到 1.5M survivors，但没有发布记录、来源组成、最终 accepted-set manifest 或 rejected outputs。

报告中的 7B 和 72B PRMs 从 Qwen2.5-Math-Instruct checkpoints 初始化，并在步骤末 tokens 上以 cross-entropy 训练 hard-label binary classifier。发布接口先分隔步骤，再从专用 separator position 的 positive-class probability 得到 reward。论文没有披露最终 optimizer、schedule、batch size、epochs、seeds、response temperatures 或精确 checkpoint revisions。
