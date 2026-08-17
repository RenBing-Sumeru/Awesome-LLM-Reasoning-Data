- 保持发布层次的区分：BF16 checkpoint、数据集合、recipe 仓库和项目页是官方 artifact，而私有/供应商输入仍存在于已披露账本中。
- 保留两种已报告的数据规模数字而不强行调和：模型卡为 226 个数据集和 14.8T token，报告为 20T 预训练 token。
- 将统一 RLVR 记录为异步 GRPO：batch 8,192、每样本 16 次 rollout、最大生成长度从 48K 到 64K；不要把这些设置泛化为所有阶段或部署。
- 单独记录 MOPD：两轮、专门教师稠密信号、每 batch 1,024 个 prompt、每个 prompt 一次 rollout、最大生成长度 192K。
- 将 SWE 隐藏测试 reward 警告、来源权利缺口、不完整环境 pin 和缺失的家族级重叠审计视为实质限制。

