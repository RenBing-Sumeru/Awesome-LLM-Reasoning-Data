
内生分数不是 correctness verifier，论文已展示高置信错误步骤。GRPO 奖励依赖最终答案 ground truth，可能只在 LIMO 与所测模型族上校准；去污染和独立校准切分均未披露。按 token 计数的 novelty 可能奖励表面变化而非语义进展，λ_N、beam width、步骤分隔符、停止规则和强制结束提示都会改变轨迹。预算也不完全一致：主树搜索为 16k token，而 CoT 对照为 32k；PRM 对照另用约 4k token、50 步。AIME 每年仅 30 题且方差较高。仓库仅有八次 commit 且没有正式 release；原始 rollout、score manifest、固定环境、repository license、model license 均未核验，benchmark 与效率提升不能填补这些审计缺口。
