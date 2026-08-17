论文的合成数据表合计 33,011,757 条：数学 22,066,397、代码 10,108,883、科学 708,920、聊天 39,792、指令遵循 56,339、安全 31,426。数学包括 2,225,427 条 reasoning-on 和 19,840,970 条 reasoning-off；代码分别为 991,706 和 9,117,177；科学全部为 708,920 条 reasoning-on；聊天为 8,574 条 on 和 31,218 条 off。这些是论文级统计，不等同于当前已经统一核对的原始发布行清单。

数学流水线从 Art of Problem Solving 论坛抽取题目，并排除 Middle School Math。Qwen2.5-32B-Instruct 负责题目抽取与分类，证明题、选择题、二元题和无效题会被删除；随后抽取最终答案，并用 LLM 比较方法去除与基准相似的问题。每题由 DeepSeek-R1 生成 16 个推理解，由 Qwen2.5-Math-7B-Instruct 生成 64 个直接解。Qwen2.5-32B-Instruct 判断预测答案与期望答案是否等价；无法抽取最终答案时，以候选中最常见答案作为标准答案。

代码部分在精确去重后，从 TACO、APPS、CodeContests 和 CodeForces 汇集 28,904 个唯一问题。使用余弦相似度与 LLM 评审检查和指定代码基准的重叠，人工核验报告重叠低于 0.3%。DeepSeek-R1 生成参数为温度 0.6、top-p 0.95。后处理要求存在推理轨迹，抽取代码，删除推理标签内含代码的样本，并用 Tree Sitter 检查语法，最终得到约 488K 条 Python 样本。论文没有说明每条发布代码回答都通过测试用例执行验证。

科学部分使用 StackOverflow 问答与合成选择题。Nemotron-4-340B-Instruct 定义主题和子主题，Qwen2.5 在多个难度上生成并改写问题，完整问题集再对 GPQA、MMLU 和 MMLU-Pro 做检查。DeepSeek-R1 生成多个推理轨迹，无标准答案时采用多数投票。通用提示来自合成或许可证宽松的公开数据，由 DeepSeek-R1 生成多个回答，再用 Llama-3.1-Nemotron-70B-Reward 选择。reasoning-off 配对中，通用提示由 Llama-3.1-Nemotron-70B-Instruct 回答，其他领域由 Llama-3.3-70B-Instruct 回答，之后按标准答案或奖励模型筛选。

SFT 使用 Adam 和 token 级交叉熵，并为不同模型设置不同混合和调度。LN-Nano 分三阶段，先训练推理数据，最后聚焦聊天、指令遵循和工具调用。LN-Super 在完整 SFT 集上训练一个 epoch，学习率 5e-6、序列长度 16k、全局批量 256。LN-Ultra 使用打包的 24k 序列和批量 256，采用预热与余弦衰减，并在优化器不稳定后重新启动训练。

LN-Ultra 推理 RL 使用 GRPO：每次 rollout 72 个提示，每个提示采样 16 个回答，温度 1、top-p 1、全局批量 576，每轮 rollout 更新两次梯度。Llama-3.3-70B-Instruct 判断答案一致性，格式奖励检查成对的 think 标签应当存在或不存在。每个提示先由 LN-Super 独立生成 8 次估计通过率，通过率不低于 0.75 的提示被删除，再按通过率课程从较易批次逐步转向较难批次。论文报告约消耗 140k H100 小时。指令遵循使用 RLOO 和约束验证器训练少于 120 步；偏好对齐使用 HelpSteer2 提示与 Llama-3.1-Nemotron-70B-Reward，并按模型采用 RPO 或 GRPO。
