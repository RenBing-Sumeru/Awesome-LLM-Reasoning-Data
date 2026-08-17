在论文报告的五个 base model 和三个 benchmark 上，MCTS-Judge 通常优于对应 vanilla 与 System-1 judge baseline。代表性 APPS 结果把 DeepSeek-Coder-V2-16B-Instruct 的判断准确率从 41.0% 提高到 80.0%；ablation 显示，用 simulated-execution reward 替换较弱的 MCTS reward 带来 13 个百分点，纯 UCT 再加入 LLM 自评带来 2 个百分点。缩放实验分别改变测试数量、模拟次数、深度与 rollout 数，增益会随模型和缩放轴变化。论文还评估了无 reference code 条件，并用 LLM panel 评价轨迹质量。

这些结果支持“所研究协议下，搜索与伪执行流程可提高代码判断准确率”的主张，但不能把生成测试或模拟执行视为 ground truth。预期输出由 GPT-4o 生成，另一个 LLM 再模仿执行，相关性错误可能奖励错误轨迹。准确率提升与 LLM 对推理质量的评分也不能证明未发布轨迹数据完整、无偏或适合训练。
