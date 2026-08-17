官方报告识别了 DeepSeek-V3-Base、R1-Zero GRPO、规则准确性/格式 reward、cold-start SFT、reasoning RL、rejection sampling、general SFT 和 all-scenarios RL。它报告约 60 万条 rejection-sampled reasoning、20 万条非推理条目和 80 万条蒸馏数据。这些数字描述训练阶段；记录和 manifest 并不是官方数据发布。

官方仓库、发布说明和 Hugging Face 模型页提供论文、代码、API/发布语境和模型权重。它们没有提供 cold-start prompt、SFT 行、RL prompt 分布、rollout 组、接受/拒绝输出、任务环境、extractor、测试 harness、V3 judgment、reward-model 权重或审计日志。

证据支持混合反馈契约：R1-Zero 使用规则正确性与格式，R1 使用 language-consistency reward，后续使用 V3 judgment，all-scenarios RL 使用规则加通用 reward-model 反馈。它不能证明公式、阈值、校准、假接受或可复现终止谓词。
