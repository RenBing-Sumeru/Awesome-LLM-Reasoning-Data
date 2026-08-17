每个 MCTS 节点表示部分推理状态，并保存 tool query、二元验证结果、value 与 visit。UCT 选择节点，expansion 采样 K=3 个候选 action，simulation 完成解答，Wolfram Alpha 检查中间变换，最终答案比较提供二元 outcome，再把组合 reward 回传。

训练记录不只含标量 value。GroundedPRM 使用生成式目标：原问题和完整 trace 条件化生成二元判断，以及从工具反馈得到的自然语言解释。学得的 Qwen2.5-7B-Instruct PRM 随后可在 reward-guided greedy decoding 中给 N=8 个下一步候选评分。构造 verifier、hybrid label、学得 PRM 与推理时 selector 是四个不同对象。

