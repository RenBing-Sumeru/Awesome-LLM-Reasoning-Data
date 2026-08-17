ATLAS 从公开 RLVR 数据集及其文档所列前序来源开始。由于 schema 和附加指令不同，作者从每个数据集检查 30–50 条记录，人工定义最终问答对的提取方式。40 字符 SHA-1 提示键支持按时间精确匹配，谱系字典保存每次出现。未匹配提示由 Sentence-BERT 编码，按余弦相似度检索后逐例审查；若未匹配集合仍过大，就加入候选权威来源并重跑前序阶段。停止阈值为 1%，最终残余标为 unknown。论文报告 1,450,827 条记录、20 个原子来源标签和低于 1% 的 unknown。

泄漏审计将 RLVR 全集与 14 个数学评测基准比较。报告的 36,148 个高置信匹配主要强调不低于 0.90 的相似度，论文同时指出 0.80 附近仍有变换泄漏。DAPO++ 从 DAPO-Math-17k 删除检测到的泄漏，再从 Stack Exchange 原子来源随机抽取非 MCQ、SCA-01 型可学习记录作为替换。随机种子、候选池版本、确切删除与插入数量、被拒候选和替换映射均为 unknown。

在 SCA 中，Qwen3 base 模型与来源特定 GRPO checkpoint 构成反事实对。两个 checkpoint 上的正确性产生 00、01、10 或 11 标签。Q 将该可学习性特征与答案一致性、MCQ 比例、跨数据集复用、来源或领域多样性、已确认泄漏，以及 Math500 Mean@4 和 Pass@4 增益组合。由于 Math500 同时用于 checkpoint 选择，该分数与其验证面部分耦合。

RL 训练使用 Qwen3-1.7B-Base 和 Qwen3-8B-Base，在 VERL 上运行 GRPO；每条提示生成 8 个在线 rollout，温度为 1.0，并以 Math-Verify 产生标量奖励。论文报告学习率 1e-6、500 步、batch 128、mini-batch 64、KL 0.0、clip 0.2、提示上限 4,096 tokens、回答上限 16,384 tokens。公开脚本却使用 510 步、mini-batch 16 和 KL 0.001，8B 脚本使用 batch 32。与论文一致的评测使用温度 0.6、seed 0、top_p 0.95、top_k 20，而训练脚本验证使用 top_p 0.7 和 top_k 50。

公开 DAPO_Plus.parquet 含 17,000 条唯一训练记录，顶层只有 data_source、prompt、ability、reward_model 和 extra_info 五个字段。所有记录的 data_source 均为 DataLineage、ability 均为 math；每条包含一个 user-role 提示、rule 风格标准答案和一个带 dapo 前缀的唯一索引。它不保存在线 rollout、原子来源、前序记录、变换、SCA 标签、匹配分数、保留或替换状态、选择概率、来源 URL 或许可证。
