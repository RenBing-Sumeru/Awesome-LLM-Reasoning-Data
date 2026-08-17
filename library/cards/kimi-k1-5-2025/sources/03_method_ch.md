对于 RL prompt 整理，SFT 模型以相对高温度对每个 prompt 采样十次，并用 pass rate 作为难度代理。自动过滤器选择需要丰富推理且便于评估的问题。选择题、判断题和证明题会被移除；无 CoT 答案猜测器还能删除在 N=8 次尝试内可以解决的通用问答 prompt。

Long-CoT warmup 用 prompt engineering 为文本和图像输入生成经准确验证的路径。Vanilla SFT 从人工标注种子开始，训练 seed model，生成多个响应，再由标注者排序并润色最佳响应；数学与代码任务还使用 rejection sampling。报告称约有一百万条文本 SFT 例子和一百万条文本-视觉例子，但未发布它们。

对于代码 RL，基础 Kimi k1.5 使用 CYaRon 为每个问题生成 50 个测试用例，并用十个标准提交测试它们；至少七个提交结果一致的测试用例被保留，至少九个提交通过所选测试集的问题被保留。对于数学，报告描述了一个 800k-example 经典奖励模型和规模相同的 CoT 奖励模型数据；后者生成逐步推理和 JSON 正确性判断。

RL scaffold 是由 rollout worker、replay buffer、reward model、trainer worker、partial rollout、Megatron、vLLM、checkpoint-engine 与 Kubernetes sandbox 组成的同步 rollout/train 循环。partial rollout 片段从 buffer 中复用；long2short 分支使用 n=8 最短拒绝采样、DPO 对或带更短最大 rollout 长度的独立 RL 阶段。
