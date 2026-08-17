Timely-Eval 包含三类任务。它封装 57 个 Jericho 文字游戏，提供动作、有效移动、分数和终止工具，并可控制延迟；它改造四个 MLEBench-Lite 机器学习任务，其中代码执行和模型训练成本高；它还在 AIME、MATH 和 GPQA Diamond 上提供模型必须查询的计时器工具。预算设为测得的每步延迟倍数，超过截止时间的回答会判错。

冷启动阶段，作者从 Qwen3-235B-2507-Instruct 蒸馏一百万条带时间的通用推理实例，并从 DeepSeek-V3.2 蒸馏游戏轨迹，且把游戏轨迹限制在五十步。这些数据与 DataScience-Instruct-500K 合并。随后 Timely-RL 使用 GRPO 式目标：超时获得零奖励，正确且按时完成则加入平滑的预算利用奖励。论文每个样本使用八次 rollout，并评测 0.6B 到 32B 的 Qwen3 模型及 TimelyLM-8B。
