官方 [arXiv 论文](https://arxiv.org/abs/2606.24597)及其 [HTML 版本](https://arxiv.org/html/2606.24597v1)确认了下一观测数据对象、七类环境、1,000 多万条轨迹总量、三条轨迹渠道、CPT/SFT/GSPO 顺序、过滤规则、SFT 拒绝采样和混合 RL 奖励。论文还报告：SFT 保留 7,094 条轨迹，RL 训练池含 92,308 条轨迹，rubric 与规则奖励按 9:1 混合；作者观察到“自我吹捧”式奖励黑客，并给出三项缓解措施。

官方 [Qwen-AgentWorld 仓库](https://github.com/QwenLM/Qwen-AgentWorld)把开放产物明确写为 35B 模型权重和 AgentWorldBench。官方 [35B 模型卡](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)确认基础模型为 Qwen3.5-35B-A3B-Base，并声明训练流水线未纳入外部 API 服务输出。官方 [AgentWorldBench 数据集](https://huggingface.co/datasets/Qwen/AgentWorldBench)公开一个约 2.17K 行的 test split，字段包括 task、id、prompt、response、current_prompt、system_str、turn_idx 和 total_turns。[Qwen 发布页](https://qwen.ai/blog?id=qwen-agentworld)同样把它定义为配有真实观测的评测基准。

这些官方产物没有发布 1,000 多万条训练轨迹、SFT 候选、RL 数据池、裁判身份或权重、完整的可执行验证器映射，也没有发布 397B 检查点。因此，基准分数只说明模型在所述协议下的行为，不能证明训练数据质量或训练流水线可复现。

