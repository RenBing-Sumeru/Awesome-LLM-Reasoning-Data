输入从 MAT-Agent 以及论文引用的 2WikiMultiHopQA、HotpotQA 中的问题和参考答案开始。一个身份未披露的初始策略为每道题采样 10 个回答，保留 pass rate 位于 `[0.2, 0.8]` 的问题，得到约 1,300 对问答。item ID、各来源数量、版本、混合权重、split 归属、去重方法和初始策略 checkpoint 均为 unknown。（论文 §3.2、§4.1）

训练时，Qwen2.5-7B-Instruct 或 Qwen2.5-14B-Instruct 生成最多 10 个交互步骤的 episode。每一步先输出自然语言 Thought 和可执行 Python Code；受控解释器按顺序执行代码、跨轮保留变量并返回 Observation。Appendix A 列出 `inspect_file_as_text`、`wikipedia_qa`、`web_qa`、`visit_qa`、`find_archived_url`、`local_visualizer` 和 `final_answer`，但其实现、服务版本、sandbox image、依赖版本、资源限制、网络规则、重试行为和异常处理均未发布。

每道题有一个 `G=16` 的 FIFO 轨迹队列。每个训练步骤生成 `g=8` 条新轨迹，入队并移除最旧的 8 条；方法还会对论文描述为落在 `0.2–0.8` pass-rate 区间之外的条目重新采样。论文没有消除该 pass rate 究竟属于问题、queue group 还是单条 sample 的歧义，也未披露队列年龄、behavior-policy probability、off-policy correction 或替换日志。（论文 §3.2；表 2）

Qwen2.5-3B-Instruct 生成回答标签，解析与 runtime success 则产生 `R_parse` 和 `R_exec`；三者合成单个轨迹奖励。Response-masked GRPO 只把该 episode-level 信号施加到策略生成的 Thought 和 Code token，Observation token 不进入 loss。已披露优化设置为 AdamW、学习率 `1e-6`、effective batch size 256、2 个 epoch、最大序列长度 2048、KL 系数 `0.001`，并使用 8 张 A100，其中训练与在线采样各 4 张。推理 temperature 为 `0.6`；训练 rollout 解码设置、seed、GRPO clipping、AdamW beta 和 checkpoint 频率均为 unknown。（论文 §3.1、§3.3、§4.1）

概念上的输出是训练后的 7B 或 14B agent policy，以及临时队列中的 episode 与奖励字段。官方仓库没有公开 Tool-R1 checkpoint、任务 manifest、序列化轨迹/队列 schema、原始 observation log、reward log、训练配置、评测 harness 或环境包；忠实重建需要自行实现并固定所有这些组件。
