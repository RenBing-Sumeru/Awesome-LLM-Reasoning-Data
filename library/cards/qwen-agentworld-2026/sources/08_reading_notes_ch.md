- 先读[论文 HTML](https://arxiv.org/html/2606.24597v1) 的 2.2 与 2.3 节，确认五部分系统提示、动作—观测交替格式和下一观测目标。
- 把 3.1 至 3.4 节连起来读：来源采集与过滤发生在三个独立阶段池之前；SFT 从 10,250 个候选查询保留 7,094 条，RL 训练池含 92,308 条轨迹且每条只选一个目标 turn。
- 不要只看奖励公式，还要读训练稳定性讨论。论文报告了“自我吹捧”式奖励黑客，并以规则锚定、内容类型分类和标签提取作为缓解措施。
- 对照 1,000 多万条训练轨迹的声称与独立的 2,170 行 [AgentWorldBench 发布](https://huggingface.co/datasets/Qwen/AgentWorldBench)：前者是未发布训练数据，后者是含真实观测参考的已发布 test split。
- 把官方[仓库](https://github.com/QwenLM/Qwen-AgentWorld)和 [35B 模型卡](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)视为权重、提示和评测工具已发布的证据，不要把它们当作训练语料、RL 裁判、验证器覆盖表或 397B 检查点已发布的证据。

