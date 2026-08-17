DeepSeek-V3 先以自然语言分析形式化定理，将其分解为证明步骤，并把步骤形式化为 Lean 陈述。7B prover 将每个提取出的子目标转化为局部可解的 lemma，并可把先前子目标作为前提携带。两种子目标定理变体进入 curriculum，成功的一组子目标证明被组合为完整证明。

冷启动示例仅保留这样的难题：7B prover 不能端到端解决，但可以解决其全部分解子目标。完整 Lean 证明与 DeepSeek-V3 CoT 配对。在非 CoT expert iteration 中，当前最佳策略尝试此前未解的难题；经 Lean 验证的成功样本被加入 SFT。论文还称，自动形式化问题和未指明的开源问题会拓宽训练分布，miniF2F-valid 会用分解子目标问题进行扩增。

对 671B 模型，DeepSeek-V3-Base-671B 上的 SFT 使用 16,384 token 上下文和恒定的 5e-6 学习率。随后 GRPO 每轮采样 256 个定理 prompt、每个定理 32 个候选证明、最大 32,768 token；其奖励是 Lean 二值正确性加早期分解一致性信号。7B 模型将 DeepSeek-Prover-V1.5-Base 扩展到 32K，以 671B RL rollout 和非 CoT 证明数据蒸馏，并接受另一阶段 RL。prompt 文本、来源清单、rollout 记录、温度、完整 optimizer/KL 设置和产出率均不可获得。
