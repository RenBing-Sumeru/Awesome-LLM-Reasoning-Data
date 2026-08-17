可重建的流程如下：

1. **输入池。** 使用 MATH 训练集全部 7,500 道题及 Levels 1-5；论文称 Level 5 约占数据的 24%。
2. **多模式生成。** 让 Qwen2.5-32B-Instruct 以 Instruct 模式生成，让 DeepSeek-R1-Distill-Qwen-32B 以 Think、NoRethink 和 NoThink 模式生成。参数为 temperature 0.6、top-p 0.95、最大序列长度 16,384；每道题、每种条件最多尝试四次。另抽取 Think 回答的压缩最终解答，用于单阶段比较。
3. **验证与交集选择。** 使用 Math-Verify 检查最终答案。只有四种条件都至少有一个正确样本的题目才被保留，最终从 7,500 道题中留下 6,445 道；论文没有说明失败尝试或验证器输出是否被保存。
4. **阶段 1 组装与 SFT。** Levels 1-4 配 Instruct 输出，Level 5 配 NoThink 输出；微调 Qwen2.5-3B 或 Qwen2.5-3B-Instruct。
5. **阶段 2 组装与 SFT。** 从阶段 1 学生继续训练，Levels 1-4 配 NoThink 输出，Level 5 配 NoRethink 输出。该过程是离线监督微调，不包含在线奖励更新或交互环境。

论文报告使用 LlamaFactory、两轮训练、余弦学习率日程和最大学习率 `1e-5`；第 4.2 节称沿用单阶段协议，但没有单独列出各阶段步数。评估沿用相同的 temperature、top-p 与 16,384-token 上限；AIME/AMC 每题采样 32 次，MATH-500、Minerva 和 OlympiadBench 每题采样 8 次，以 Pass@1 报告结果。（论文第 4.1-4.2 节。）

忠实复现还必须固定教师与学生检查点版本、完整提示与答案抽取器、随机种子、保留的 MATH 索引、逐次尝试的验证记录、两个课程清单、硬件和各阶段优化步数；这些产物都未发布。官方 checklist 把计算预算与基础设施标为已报告，但会议正文没有给出硬件或 GPU 小时。
