**阶段 I — CoT 输入。** URSA-Alignment-860K 从 MultiMath、MAVIS 和 Geo170K 过滤得到。MMathCoT 从 MathV360K、MultiMath、MAVIS、Geo170K 和 VarsityTutors 的 143 万样本开始。Gemini-1.5-Flash-002 扩展仅答案样本、改写分析式解答或统一已有 CoT；若输出改变、质疑原答案，或增加新假设来强行得到答案，则被剔除。已核验发布有 1,019,059 个 train 行，字段为 `image_url`、`instruction` 和 `output`。

**阶段 II — 标签。** URSA-8B 生成约 55.3 万条错误解答。BEL 将前缀的 Monte Carlo 价值定义为正确续写数除以总续写数；另加入约 18 万条所有步骤均为正例的正确解答，得到 77.3 万条逻辑记录。MIE 生成约 30.2 万条视觉误解记录，并把错误注入点之后的每一步标为负例。二者合计约 110 万；已核验 DualMath train split 有 1,100,779 行，标签编码在 `output` 中，而不是单独已核验的路线或标签列。

**阶段 III — RL。** URSA 使用 SAM-B 加 SigLIP-L 视觉编码器、Qwen2.5-Math-Instruct 和两层 MLP。URSA-8B-RM 从 URSA-8B 训练而来。PS-GRPO 使用 1.5 万个 MMathCoT 提示、每提示 8 个 rollout、2 个 epoch、学习率 2e-6、温度 1.0、提示/输出最大长度 6048/3072、batch 512、KL 0.003。仓库提供推理和 PRM 打分，但未核验到构造/训练脚本、随机种子、终点检查或不可变的论文运行配置。
