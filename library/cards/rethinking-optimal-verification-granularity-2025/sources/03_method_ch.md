实验使用 MATH-500、2022–2024 年的 90 道 AIME 题，以及 MATH-250；后者是验证集，每个 MATH 难度等级抽取 50 题。Proposer 包括 Qwen2.5-Math-7B、Qwen2.5-Math-1.5B 和 Llama-3.2-3B-Instruct；Skywork-o1-Open-PRM-Qwen-2.5-1.5B 与 7B 作为判别式 verifier。连续两个换行定义最小推理步骤，选择时使用 PRM 的最终分数。

研究改变 g、生成数量 n、beam width、branch factor、模型配对、难度和预算。其分析成本模型把用于扩展与分支的 proposer 计算同候选评分的 verifier 计算分开。CM-g 与 AM-g 在验证数据上估计策略，然后为特定 model/task/budget 配置复用预先计算的 g；论文建议在核心组件变化时重新计算。

可复用记录应保留 prompt 与 benchmark 标识、proposer/verifier/提示模板及版本、步骤分隔符、g/B1/B2/n/预算、全部候选前缀与父节点、PRM 分数、被选与被拒分支、生成/验证 FLOPs 与延迟、验证集策略与难度桶、随机种子、最终答案和标准正确性。官方 VG-Search 仓库以 Apache-2.0 提供代码与 recipe，但已接受元数据未核实独立轨迹语料、精确运行清单，或所有模型与源 benchmark 的许可。
