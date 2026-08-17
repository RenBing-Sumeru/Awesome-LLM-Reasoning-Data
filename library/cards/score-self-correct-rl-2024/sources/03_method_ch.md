数学训练使用 MATH train，并加入原 MATH test set 中的 4,500 道题；剩余 500 道构成 MATH500 评估。代码训练使用 MBPP，评估使用 HumanEval；MBPP-R 还用于离线修复评估。MATH 微调 Gemini 1.5 Flash，代码微调 Gemini 1.0 Pro。第二轮 prompt 固定，而且不会透露第一次回答是否正确。

每个在线 episode 先从当前策略采样第一次作答，再拼接自我纠错指令，并基于完整历史采样第二次作答。Verifier 计算 `r1` 和 `r2`：MATH 使用 ground-truth answer 二元匹配，代码使用是否通过全部测试。Stage I 优化第二轮奖励，同时惩罚第一轮策略相对基座模型的 KL divergence。Stage II 对两轮联合进行 REINFORCE 风格更新，保留 KL regularization，并在第二轮塑形奖励中加入 `alpha * (r2 - r1)`。论文还说明，部分实验会把反复采样得到的基座模型第一轮解答作为离线 prompt 加入，以扩大状态覆盖。

论文报告的 MATH 超参数为 Adam、学习率 5e-6、3,000 步、batch size 512、采样温度 1.0、alpha 10、beta1 0.01、beta2 0.1。MBPP 使用学习率 1e-5、1,500 步、batch size 128、温度 1.0、alpha 10、beta1 0.01、beta2 0.25。除测试时计算扩展使用温度 0.7 外，评估采用 greedy decoding。RL checkpoint 按最高训练奖励选择。每题 rollout 数、随机种子、精确 split manifest、答案抽取实现和测试 harness 没有通过已发布的可执行 artifact 完整披露。
