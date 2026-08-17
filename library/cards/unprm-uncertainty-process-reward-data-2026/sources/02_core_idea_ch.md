UnPRM 将不确定性同时用于过程数据生成、步骤标注和候选答案聚合。官方 `un_prm_data_40k.json` 约含 4 万条数学记录，每条保存 `prompt`、标准 `answer`、分步 `completions` 与布尔 `label`；该数据可直接训练 PRM，配套代码还实现 Hybrid Majority Reward Vote 与 Weighted Reward Frequency Vote。

该文件还可复现不确定性筛选位置和候选聚合实验，使训练标签与推理阶段的投票规则保持一致。
