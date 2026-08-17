既有基线要么是在步骤标签对上训练的判别式PRM，要么是把决策语言化但未专门训练的LLM-as-a-Judge。前者输出标量但没有审计轨迹，并消耗大量标签；后者输出rationale，却可能无法可靠识别错误或给出可解析决策。

ThinkPRM的具体变化，是通过长、process-filtered合成rationale蒸馏验证器行为，而人工标签只用作拒绝条件。这把可复用对象从“前缀-标签对”变为“前缀-verification CoT-标签记录”，并允许验证器在输出供选择或搜索消费的标量分数之前使用可变生成计算。

它对rollout/search数据整理的方向信号，是验证器轨迹本身成为测试时数据流。独立验证器样本、sequential revision、分数聚合和beam决策都应与候选解答rollout一起记录。该工作还把process-label agreement与仅按outcome过滤区分开，并表明更大的outcome-filtered池不一定训练出更好的验证器。

必须明确哪些并非新贡献。论文没有提出PRM800K、MATH、SFT、LoRA、rejection sampling、generative reward modeling、Best-of-N、beam search或self-consistency；也没有证明生成批评是忠实解释、提供校准的通用reward，或说明更多验证token总会有帮助。复用时应比较匹配的判别式、未微调judge、短CoT、outcome-filtered、随机/多数投票和compute-matched对照。
