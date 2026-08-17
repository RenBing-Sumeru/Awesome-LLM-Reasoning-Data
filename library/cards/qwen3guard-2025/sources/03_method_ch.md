对于 Gen，报告称超过 119 万条的混合数据由人工标注和合成的提示/回复样本组成。它使用 Self-Instruct：将安全策略拆分为细粒度 taxonomy，并用种子提示、类别特定关键词和成对的安全/不安全提示驱动合成。回复包括人工撰写和模型生成材料。报告将 Qwen2.5-72B-Base 列为生成不安全回复的示例生成器，并把 QwQ、Qwen3、DeepSeek-R1 和 DeepSeek 蒸馏模型列为带推理内容回复的来源。它用 Qwen-MT 将原始内容翻译为另外 15 种语言，并说明采用语言混杂检测、LLM 评审和随机人工抽查。源记录、种子集合、提示词、采样设置、记录级来源、权利和保留率均未发布。

对于自动标注，报告使用多个 Qwen 版本（包括 Qwen2.5-72B-Instruct 和 Qwen3-235B-A22B），并通过投票聚合初始标签。它把数据划分为互不相交的 A/B 两部分，用重加权的安全/不安全样本训练 strict/loose 模型，并将跨分区预测冲突项标为 controversial。随后又使用 Qwen3-32B 进行另一轮互不相交分区的标签蒸馏。Gen 在指令微调后的 Qwen3 上进行 vanilla SFT。其已发布输出接口包含风险/类别，并在回复分类时包含拒答；精确的训练记录 schema 和标注器提示词未知。

对于 Stream，报告为不安全或 controversial 回复派生边界 token。它为每个前缀从多样化模型集成中采样 rollout 延续，并用 Gen 对完整回复评分；LLM 评审器 Qwen3-235B-A22B 在不预测后续文本的条件下复核被标记前缀。只有两个信号都判定前缀不安全时才接受边界，此后边界及后续 token 保留样本级标签。Stream 用交叉熵联合训练 query 和 response 分类头：query 损失在 end-of-query token 计算，response 风险/类别损失逐 token 计算，类别损失只在不安全/controversial 真值上计算。rollout 组成/数量、阈值、评审提示词、校准、优化器细节和已发布的 token 标签数据未知。

报告还独立展示了将 Gen 作为 Qwen3-4B 的 GSPO 安全 RL 奖励信号：对每个 WildJailbreak 训练提示在 thinking 与 non-thinking 模式下生成 8 个答案，删除全部安全或全部不安全的组，并保留 13.7k/6.7k 样本。这是下游应用构造规则，不能倒推为护栏自身 119 万条语料或 SFT 合约的一部分。

