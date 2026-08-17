官方 arXiv 报告将作者列为 Xiaomi LLM-Core Team，提交日期为 2026-01-06。它描述了百万规模内部 SFT、专门教师、MOPD，以及真实或合成 agent 环境。官方项目仓库和 Hugging Face 模型页存在，但没有提供后训练数据发布、环境包或完整 reward 实现。

报告支持将教师 reverse-KL 与 ORM advantages、程序化检查、LLM judge、多模态网页验证和任务相关终止标准记录为混合反馈契约。它还描述了约 12 万个环境。无论该环境数还是报告中的 SFT 规模，都不能证明唯一任务数量、来源 lineage、训练/评估隔离或发布可用性。

报告通过说明未删除的真值 commit 与评估镜像更新导致的 SWE-Bench reward hacking，提供了一项具体审计信号。它没有提供更广泛的污染或重叠审计，因此证据支持“部分披露”状态，而不是可复现训练数据配方。
