输入是 SWE-rebench 仓库修复任务，上游共有 21,336 条记录。论文删除元数据提示无效引用或 import failure 的样本，只保留最多修改 7 个文件且修改行数少于 500 的任务，排除 LLM 质量分数为 3.0 的问题，并通过 50 次重复执行剔除测试结果不一致的任务。最终 7,249 个任务的 manifest 未发布。SWE-rebench 的 May/June 月度 split 被排除在训练外；随机抽取的 Verified-50 用于中间 checkpoint 评估。

在 rejection fine-tuning 阶段，Qwen2.5-72B-Instruct 对所选任务各运行 10 次。仅收集 base-checkpoint 尝试时，prompt 会附加一条成功的 one-shot trajectory；其来源未知，后续 RFT 与 RL agent 均不再使用。pipeline 保留 6,548 条完整且通过测试的 episode，对引发环境格式错误的 assistant turn 做 mask，然后进行 1 个 epoch 的 SFT。公开的 RFT 设置为 65k context、AdamW 5e-6、weight decay 0.1、batch size 64、10 个 warmup step、cosine decay 到 0，共 50 次 update。

RL 采用同步 on-policy 流程。每次 iteration 中，当前 policy 对每个问题以 temperature 1.0 采样 10 条完整 trajectory；`top_p`、`top_k`、`min_p`、repetition penalty 和其他 decoding filter 均关闭。环境执行命令并测试提交 patch。最终 reward 是二元测试成功值加轮数长度惩罚；reward 在 10 条 trajectory 的组内归一化，再广播到 token，并用 DAPO 的 clipped token-level objective 优化。全部参数以 AdamW 1e-6、每 iteration 1 个 epoch、gradient clipping 1.0 更新。

Stage 1 每 iteration 使用 300 个问题，batch size 128，context 65k，最多 40 轮。Stage 2 每 iteration 使用 100 个问题，batch size 256，通过 YaRN factor 4.0 将 context 扩展到 131k，最多 80 轮。Stage 2 保留 2,028 个问题，论文称移除了训练成功率为 2/3 的任务和从未解决的任务；精确不等式、统计窗口和 manifest 未披露。在线 rollout 总数、随机种子以及同步使用后的保存策略均未知。

训练使用 16 个 H200 节点，每节点 8 张 GPU，并使用 context parallelism、agent Kubernetes pod、Tracto AI evaluation、内部 JAX trainer 和 vLLM 0.7.4 inference。复现需要精确的 7,249/2,028 manifest、container digest 与任务映射、仓库/测试快照、依赖、scaffold revision、prompt、decoding 配置、seed、reset/timeout/network 语义、rollout 记录、checkpoint 和内部 trainer。目前公开的只有上游任务行、runner fork、container registry、论文 prompt/tool 附录与报告的设置。
