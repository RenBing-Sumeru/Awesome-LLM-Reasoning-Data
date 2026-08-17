核心贡献是一条 Gemini 衍生的 vision-language-action pipeline：记录接口由当前场景图像和自然语言指令构成，模型随后预测由机器人执行的 action chunks。Gemini Robotics-ER 基于 Gemini 2.0 构建，并被蒸馏到 cloud VLA backbone；机器人端的 local decoder 将其表示转换为连续低层控制。

Reasoning-enhanced specialization 改变了中间数据对象。一个重新标注的动作数据集监督模型预测未来约 1 秒内左右机械臂的轨迹，随后 decoder 再生成动作。这增加了可解释的 trajectory-understanding/generation 接口，但 relabeller、坐标 schema、覆盖率、验证流程，以及标签由人、模型还是几何程序产生，均为 unknown。

机器人评测观察 task-specific 的物理完成情况。完整成功是二元值，progress 是 0 到 1 的标量，表示已完成比例。ERQA 使用多项选择 answer key。这些都是评测契约：论文没有声称 success 或 progress 被用作 RL reward，也没有发布可执行 terminal checker 或 scorer audit。

与只输出语言答案的 vision-language model 相比，本报告把多模态推理连接到 state-action supervision 和真实机器人 episode。与 ERQA 这类已开放 answer-level benchmark 相比，专有动作语料包含跨时间的示范与控制标签。因此关键差别不只是模型能力，而是哪一层记录与反馈真正开放。
