论文和官方仓库报告最终 3,709 道题，并公开数据 release 与 leaderboard。主表显示 GPT-4o-2024-05-13 在 MathBench-A 的平均 CE 为 70.9，在 MathBench-T 为 87.0；许多较小开源 chat model 和数学专用模型在更高阶段明显掉分。

样本级证据是标准答案与 CircularEval 判定，不是证明证书。论文还比较 CE 和普通 accuracy，说明 CE 会惩罚对选项顺序不稳定的回答。

证据边界是官方 release 与 OpenCompass 设置。分数会受数据版本、prompt、模型快照、选项打乱实现、CE 实现、语言子集，以及报告 MathBench-A、MathBench-T 还是合并均值影响。
