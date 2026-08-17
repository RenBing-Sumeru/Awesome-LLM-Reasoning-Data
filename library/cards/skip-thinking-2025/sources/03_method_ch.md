流程从含问题与答案的任务样本开始。按照论文所沿用的 Ho et al. 设置，text-davinci-002 使用调换了 rationale 与 answer 位置的 few-shot exemplar 生成 rationale，最大序列长度为 128，temperature 为 0.7。实验覆盖算术、符号、常识和物体置换推理等七个 benchmark，学生模型为不同规模的 GPT-2 与 T5。论文沿用前作的训练/测试划分；本次未核实到条目级 manifest 或去污染记录。

CWT 先把每条 rationale 划成固定数量的 chunk。Average Chunking 是对照起点；SBC 会合并相邻内容、枚举可能切点，并在学生模型 loss 的改善超过阈值时接受边界调整。生成的训练样本带有阶段标记和前缀，使每个 chunk 以及最后的答案阶段分别成为训练目标。边界搜索会随学生模型训练更新，并非一次性的语义标注。

在 STT 中，skip data generator 移除候选 chunk，把此前上下文和阶段标记交给完成 CWT 的学生模型，再检查预测答案。答案错误表示该 chunk 必须显式保留；答案正确则使其具备 internalization 资格。模型随后使用这些 skip 样本训练，并在推理时通过论文定义的特殊 skip 控制只输出保留的推理 chunk 后再作答。这里的 verifier 是 benchmark 答案判定，而非 step verifier。经确认的 artifact 未提供代码、处理后 chunk 数据、逐次删除日志、seed 或完整复现环境。
