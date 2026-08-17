权威来源为 arXiv:2505.03469v2，发布于 2025 年 5 月 21 日。论文研究一个具体的蒸馏问题：用长 Chain-of-Thought（CoT）轨迹做 SFT 能迁移推理能力，却可能把冗长、重复的“过度思考”一并传给学生模型。它没有改变 reward 或测试时搜索策略，而是改变训练示范：先从已有长轨迹得到较短对应版本，再混合两种形式，并在推理时提示训练后的学生使用介于二者之间的“balanced”思考模式。（论文 §1-2；附录 A）

数据对象是一条从 instruction 到推理回答的记录。公开 `s1K-mix` viewer 展示 `system`、`instruction`、`input` 和 `output` 字符串；回答在答案前放置由 think 标记包围的推理轨迹。长、短示例分别使用 detailed-thinking 和 brief-thinking 指令。论文称上游 `s1K-1.1` 有 1,000 条由 DeepSeek-R1 蒸馏而来的详细轨迹及答案；16 个输入因超出上下文限制被排除，得到 984 条短轨迹。公开混合数据只有一个含 1,984 行的 train split。（论文 §3.1、附录 B；官方数据集 viewer）

本卡归入 `instruction_demonstration_rationale_data`：已发布的证据是监督式 rationale 示范，而非多 rollout 记录、搜索树、学习式 reward 或带过程标签的 verifier 数据集。它可用于审计轨迹长度如何进入后训练；但 L4 的内容完整性不能被误读为发布完整性：成对 ID、来源清单、改写日志、正确性检查和去污染信息仍不可得。
