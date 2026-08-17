生成时，marker-based DEER 监视动作转折 token。Entropy-based DEER 则把空行分隔的推理步骤作为单元，测量下一步骤首 token 的熵，并把超过论文所报 0.672 阈值的位置作为候选点。每到一个候选点，系统分叉当前前缀：诱导分支加入最终答案提示并提取 boxed 答案；原分支继续保留，以便试答置信度不足时恢复解码。论文默认置信阈值为 0.95，并研究 0.9-0.97 区间；同时也指出，对持续低置信的特定模型需要降低阈值。

论文在 GSM8K、MATH-500、AMC 2023、AIME 2024、AIME 2025、OlympiadBench、GPQA Diamond、HumanEval、BigCodeBench 和 LiveCodeBench 上评估 11 个推理模型。主要正确性实验采用 zero-shot CoT、greedy decoding、单样本、规则答案检查或 Pass@1，以及 16,384 token 上限。由于样本较少，AMC/AIME 结果使用重复轮次。补充 Qwen3 实验还测试 32,768 token、top-p 0.95、temperature 0.6 的推荐配置。这些是评估设置，不是已发布轨迹 schema。

官方 MIT 仓库提供数学推理的 Hugging Face Transformers 与 vLLM 实现，以及七个 benchmark 的规则评估。其 Qwen3 路径改变置信度聚合，并额外要求试答分支生成 think 结束标签后才能退出。仓库明确说明代码生成支持与 Branch-Parallel Decoding Acceleration 仍为 coming soon，也没有 tagged release；当前未发布包含 CoT、候选转折、试答分支、置信序列和退出决策的版本化语料。
