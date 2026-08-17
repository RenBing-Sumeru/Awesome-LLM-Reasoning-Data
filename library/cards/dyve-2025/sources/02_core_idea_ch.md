Dyve 用两种可学习的输出模式表示过程验证。System 1 通常只为直接且正确的步骤输出一个加号 token；System 2 在 think-tag block 中给出详细分析，最后以加号或减号完成判决。需要特别注意，System 2 并不等同于“错误”：复杂但正确的步骤也可能得到以加号结尾的解释。模式选择来自混合 target 的学习，而不是一个已披露的人工难度阈值。

构造配方区分两类样本。完全正确的轨迹将每个推理步骤与其正向 verifier 响应交错排列；发生分歧的轨迹保留正确前缀和首个被标记的错误步骤，随后终止。DeepSeek-V3 先在 rollout 层面过滤带噪的 OmegaPRM 判断，DeepSeek-R1-Distill-Qwen-32B 再生成用于监督较小 verifier 的逐步快、慢 target。
