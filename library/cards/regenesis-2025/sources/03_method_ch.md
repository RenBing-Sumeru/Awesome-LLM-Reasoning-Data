**输入。** 从模型 `M`、训练集中的指令—参考答案对 `(q_i, a_i)` 以及 Appendix A.4.1 列出的 25 条固定通用推理准则开始。主要模型为 Mistral-7B-Instruct-v0.3。五个数据集分别处理：数学使用 GSM8K 与 NumGLUE，逻辑使用 ReClor，常识使用 ARC-Challenge 与 StrategyQA。GSM8K 只提供数值答案，不使用人工 rationale。论文未披露精确数据版本与样本编号。（论文 §3、§4.1.1）

**生成。** 对每条指令与每条 seed guideline，同一模型先写出任务特定准则，再生成一个不应直接求解任务的详细推理结构，最后扩展为完整推理路径与预测答案。主流程以 temperature 0.85 为每条指令产生 25 个候选。这是固定宽度采样脚手架，不是树搜索。（论文 §3.1、§4.1.2）

**终局筛选。** 主实验抽取每个预测答案，并与参考答案做 exact match；不通过的路径被丢弃。若某条指令没有任何通过路径，则把参考答案只提供给 guideline adaptation 与 structure generation 后重试，最终路径生成 prompt 不含答案。相较 STaR，这减少了直接答案暴露，但中间对象仍可能携带答案特定信息。Table 1 显示，该重试将五个训练集的平均指令覆盖率从 96.2% 提高到 99.4%。随后从通过池中随机保留至多 `p=5` 条路径。（论文 §3.2、Table 1；Appendix A.1）

**备选筛选器。** 对没有参考答案的数据，论文研究 self-consistency：由采样答案投票，并选择支持多数答案的路径。该实验实际覆盖有参考答案的 GSM8K 与 StrategyQA，因此展示的是备选机制，而非真正无标签场景的验证。多数一致也不是独立正确性判断。（论文 §5.2、Table 5）

**输出与训练。** 已披露的 SFT tuple 为 `(q_i, r_path_i,j, a_i)`。Mistral 主实验使用学习率 `1e-6`、3 epochs、batch size 16、weight decay 0.1、cosine scheduler、warmup ratio 0.03，以及 8 张 40GB A100；Appendix A.5.4 给出相同优化设置。Llama 分析用 vLLM 构造数据，再以 LoRA SFT，设置为学习率 `1e-4`、3 epochs、batch size 8、weight decay 0.1、cosine scheduler 与 warmup ratio 0.1。（论文 §4.1.2；Appendix Tables 21–22）

**评测。** 微调模型在对应域内测试集与六个 OOD 数据集 ASDiv、SVAMP、AQuA、BBH、ANLI、OpenBookQA 上评估，全部使用 exact-match accuracy。推理时 CoT temperature 为 0.8；self-consistency 在 temperature 0.8 下采样 15 个回答并对最终答案投票。Appendix A.2 在总训练规模固定为 7,000 时混合两个、三个或四个训练集，每种组合使用三个随机种子。（论文 §4.1.4、§4.3；Appendix A.2、A.6.1）

**复现边界。** 忠实复现必须固定源数据版本与 split ID、25 条 prompt 及系统模板、答案抽取器、重试标记、生成随机种子、最大长度、随机保留种子、模型 revision 与 SFT 实现。论文公开了 prompt 文本与优化超参数，但没有不可变源快照、逐样本构造记录、总 token/算力预算、重试次数或发布脚本；目前也未核实官方实现或生成数据集。
