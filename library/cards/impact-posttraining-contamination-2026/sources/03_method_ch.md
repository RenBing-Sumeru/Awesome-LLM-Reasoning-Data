1. 构造配对续训。以 Qwen2.5 0.5B/1.5B 和 Gemma3 1B/4B 基座检查点为输入，在由 FineWeb-Edu、CodeParrots、OpenMath-Instruct 组成的 25B token 语料上续训。

2. 注入处理因素。仅在污染组前 2B token 中放入五份带提示的 GSM8K、MBPP 测试题，之后继续用超过 23B token 的干净数据训练。

3. 独立后训练。分别用任务训练集进行 SFT，或以规则奖励运行 GRPO；两种配方的更新步数大致对齐。

4. 审计输出。比较配对模型在 GSM8K/MBPP 与 GSMPlus/HumanEval 上的表现。LM Evaluation Harness 和 math-verify 负责计分，核心信号是污染减干净的分差；训练随机种子和完整发布配置仍待核验。
