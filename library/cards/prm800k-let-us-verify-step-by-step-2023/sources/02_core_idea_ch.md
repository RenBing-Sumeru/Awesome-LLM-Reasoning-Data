# 02 核心想法

一句话贡献：OpenAI 发布 PRM800K，并用它比较数学推理中的过程监督和结果监督。核心机制是用人类对单个解题步骤的标签训练 process reward model，再用这个 reward model 从多条候选解答中选择更可信的解。

评测面是一条生成的解题轨迹，而不是只有最终数值答案。反馈契约很明确：过程监督由人类标注每一步，结果监督由答案 grader 和最终正确性给信号。最近的对照包括 outcome reward model、多数投票、以及更早的 GSM8K 过程监督工作。方向标签是 reasoning 的 step-level verifier / reward supervision。
