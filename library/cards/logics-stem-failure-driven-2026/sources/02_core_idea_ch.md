Logics-STEM 结合两个数据决策：先构建覆盖广、去污染的长 CoT 基础分布，再让二阶段 prompt 分布偏向当前模型答错的问题。检索文档为失败邻域的新问题提供知识，经过验证的最终答案则支持继续 SFT 或 RLVR。可复用贡献是明确的数据整理与反馈契约，而不只是发布模型的分数。

Google Scholar 引用数：0（查询于 2026-07-27；https://scholar.google.com/scholar_lookup?title=Logics-STEM%3A+Empowering+LLM+Reasoning+via+Failure-Driven+Post-Training+and+Document+Knowledge+Enhancement&author=Mingyu+Xu&hl=en）

开源数据：有。名称：Logics-STEM-SFT-Dataset-Open-5.3M 及其下采样 1.6M 版本。官方地址：https://huggingface.co/datasets/Logics-MLLM/Logics-STEM-SFT-Dataset-Open-5.3M 和 https://huggingface.co/Logics-MLLM。规模：分层采样前有 7.2M 条整理记录，论文训练使用 2.2M 条；公开 5.3M 和 1.6M 版本排除了私有数据。记录形式：来源问题与溯源、领域和难度标注、长 CoT 回答、最终或可验证答案及采样元数据；具体存储字段应以数据集卡为准。构造使用 Qwen3-235B 标注与蒸馏、去重、13-gram 去污染和按长度分层采样。许可：CC BY-NC 4.0。预期用途：STEM 长 CoT SFT 与 failure-driven 后训练。
