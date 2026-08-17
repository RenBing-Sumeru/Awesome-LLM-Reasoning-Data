论文对 27B 配方报告了 1,256K 条 Rejective Fine-Tuning 数据，其中 1,070K 为内部 general-instruction 数据，186K 为拒绝采样的 reward-model 数据；另有 237K 条 rule-based RL 数据。Reward-model 数据混合内部来源与 MATH、UltraFeedback、OffsetBias、Skywork-Reward-Preference-80K-v0.2、HelpSteer2-Preference。部分 UltraFeedback preference 被重新标注；MATH 轨迹按 ground-truth matching 过滤；单 response 的可验证条目使用二值正确性奖励。完整来源 manifest、条目 provenance 与许可证未披露。

Cold start 阶段由 DeepSeek-v2.5-0905 为每个 reward-model 条目采样三次原则和 critique。错误轨迹以及所有采样都已正确的过易条目会被拒绝；hinted sampling 为困难样本提供已标注的最佳 response，non-hinted sampling 则保留无提示轨迹。SPCT 随后使用 GRPO：若提取的 pointwise score 符合单 response 标签，或能正确排序唯一最佳 response，则给予 +1，否则为 −1。27B 模型使用为稳定性选择的 KL 系数、group size 4，RFT 与 RL 各训练 900 step；论文报告使用 128 张 A100。

测试时，模型以 temperature 0.5 采样奖励轨迹，打乱候选顺序，并通过分数求和聚合最多 32 个样本。基于 Gemma-2-27B 的 Meta RM 使用 binary cross-entropy，在 cold-start 与 on-policy 产生的正确/错误原则—critique 轨迹上训练，再用于引导 voting；默认 Meta RM 样本预算为奖励样本数的一半。官方 model collection 提供 checkpoint，但未确认代码、原始 RFT/RL 记录、生成 critique 日志或精确推理 harness。
