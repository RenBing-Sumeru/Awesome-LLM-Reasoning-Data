官方发布页报告了 7.5T 预训练 token、其中 70% 为 code、Qwen2.5-Coder 清理与改写、execution-driven coding RL，以及面向长程 Agent RL 的 20,000 个并行云环境。官方 QwenLM 仓库和 Hugging Face 模型页可用。这些来源验证了模型发布和高层披露，而不是可复用的后训练数据集或环境包。

所称反馈表面为：Code RL 从自动扩展测试用例获得执行结果，Agent RL 从多轮环境获得反馈。这支持将报告分类为混合执行与环境反馈。发布没有公开测试用例、reward 实现、通过标准、超时策略、verifier 错误分析或环境日志，因此无法独立确定反馈的强度和校准。

未找到任务、测试、镜像、轨迹、来源 manifest、切分或审计记录的官方发布。因此，证据支持部分数据披露状态。它不支持把 arXiv:2505.09388 连接为 Coder 专属论文：该 Qwen3 Technical Report 是单独条目。
