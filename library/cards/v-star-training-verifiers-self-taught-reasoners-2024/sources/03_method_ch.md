数学流水线使用 GSM8K 训练题和原始 rationale；代码流水线使用 MBPP 训练任务和 reference program。对于 GSM8K，第一个 generator 是在原始数据上 SFT 2 epochs 的 LLaMA2。对于 MBPP，第 1 轮使用 pretrained CodeLLaMA 的 3-shot prompt 采样，Appendix B 公开了该 prompt。实验通过 LoRA 适配 7B 和 13B 的 LLaMA2 或 CodeLLaMA。

主实验运行 3 轮。每一轮中，当前 generator 为每道训练题采样 16 个完整解。数学解的 extracted final answer 与 reference answer 相等时为 positive；代码解通过所有被调用测试时为 positive。positive 加入 `D_GEN`，positive 与 negative 都加入 `D_VER`。下一轮 generator 从 pretrained base model 出发，在扩大的 `D_GEN` 上训练，再为下一轮提供 16 个样本。因此每道题的名义自生成候选总数为 48。

对每道题，verifier dataset 取所有可用正确解与错误解的 Cartesian product。原始数据上训练的 SFT model 是 DPO reference；其原始训练在 GSM8K 上为 2 epochs，在 MBPP 上为 3 epochs。DPO 提高正确成员相对于错误成员的 verifier likelihood。论文没有披露 learning rate、batch、LoRA rank、选定的 DPO beta、sequence limit、hardware、generation temperature、seed、deduplication、pair balancing 或 pair subsampling。

推理时，generator 为每个 test problem 生成 128 个候选。论文按 verifier score 排序后，用组合公式从这个固定 pool 估计 Best-of-64；该公式假设不存在 score tie。另一个 GSM8K scaling 图从 1,000 次生成中做 subsampling。Best-of-1 忽略 verifier，等于 generator Pass@1；主实验的 7B 曲线在 k 至少为 16 时趋于饱和。

可选的 verifier-in-loop 研究与主配方不同：它采样 64 个 MBPP completions，按 verifier score 保留 top 8，并加入足够的错误样本，把每题保留集上限设为 16。作者没有观察到显著增益，因此论文仍推荐更简单的 programmatically labeled loop。
