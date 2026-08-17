对每个 MATH 问题，policy 把推理步骤表示为扩展当前部分状态的自然语言 action。UCT 平衡节点 value 与 exploration bonus；每次 expansion 采样 K=3 个 action。随后按从左到右 simulation 到最终答案，同时把每个中间陈述转换为结构化数学 query 并提交给 Wolfram Alpha。解析后的成功或失败记为 v∈{-1,1}，最终答案与 ground truth 比较得到 F∈{-1,1}。

对某个前缀，hybrid rollout reward 对未来步骤验证信号做折扣平均，再加上 beta 倍的终局正确性。Backpropagation 使用 gamma 深度折扣，state-action value 还结合局部步骤信号。多轮搜索探索最优与次优路径；不完整、不一致或工具无法验证的 trace 被删除。工具 rationale 经过与二元标签的一致性过滤后，最终记录保存问题、完整 trace、带符号正确标签与解释。

论文报告约 40K 条记录。GroundedPRM 从 Qwen2.5-7B-Instruct 通过 LoRA 微调，使用 LLaMA-Factory 和四张 A100 80GB。测试时，Qwen2.5-7B-Instruct 每步以温度 1 采样八个候选 action，再由 PRM 选择最高 reward。构造 R、c、beta、gamma、policy checkpoint、解码参数、seed 与 Wolfram Alpha/API parser revision 均为 unknown。

