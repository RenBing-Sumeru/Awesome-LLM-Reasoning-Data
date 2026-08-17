最接近的基线是由稀疏environment success驱动的长时程工具使用RL，包括tau-bench式terminal verification。已有process reward工作能够定位错误，但本文把定位用于模拟用户/工具对话，并让judge以隐藏用户指令和ground-truth call trajectory为锚点（论文§2、§3.2）。

具体变化是一个双通道反馈接口：可执行的数据库状态变化提供规则终局结果，GPT-4.1提供`{-1,0,1}`逐轮判断；固定的10×/5×/`1/T`聚合再把两者变成online agent RL实际使用的reward。论文还通过SeedTTS与30步GRPO curriculum warm-up，把该接口从Qwen3-8B文本训练扩展到Qwen2.5-Omni-7B语音-文本交互（论文§3.2、§4.3）。

该工作的方向意义不只是“process supervision”，而是区分反馈在哪里生成、优化器又在哪里消费它。逐轮label确实存在，但稳定训练配方使用其episode-level总和。这使reward granularity成为trajectory data研究中明确的ablation维度，也展示了简单token-local reward分配的失败案例（论文§5.1）。

上游组件并非本文新贡献：tau-bench seed data、SQLite、REST、MCP、GPT user simulation、SeedTTS、Qwen模型、`verl`、`RL-Factory`、GRPO/PPO/RLOO、APIGen-MT和DeepScaleR都是复用或集成。规模与benchmark增益本身不能建立可复用发布。复用前仍需核验论文承诺的专属sandbox、精确任务、任务split、rollout日志、checkpoint、环境snapshot与license。
