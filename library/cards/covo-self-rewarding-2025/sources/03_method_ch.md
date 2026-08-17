论文的流程可分为四层。

1. **提示来源。** 优化仅使用 Open-Reasoner-Zero 训练集中的指令,不使用其标签。论文称混合来源包括截至 2023 年的 AIME、MATH、NuminaMath、Tulu 3 MATH、OpenR1-Math-220k、其他开放数据集及程序合成任务;发布记录没有保留样本级来源标识。
2. **在线构造。** 当前策略对每个提示采样 16 条轨迹。论文设置温度 1.0、top-p 1.0、关闭 top-k,最大生成长度为 4096 token。之后切分状态、抽取答案、建立距离矩阵、计算一致性和波动性、按精确答案分组,并可选地加入好奇奖励。
3. **策略优化。** Reinforce++ 将标量奖励转换为归一化优势,再进行截断策略更新。论文报告学习率 5e-7、初始 KL 系数 1e-4、rollout batch 16、train batch 32、训练 1 个 epoch,并使用 8 张 A100-80GB GPU。
4. **效果评估。** 评估集包括 MATH-500、GSM8K、OlympiadBench、AMC 2023、MMLU-Pro、CommonsenseQA 和 GPQA。Math-Verify 在温度 0 的评估中检查答案,与训练奖励保持分离。

公开代码基于 OpenRLHF,提供了答案全一致过滤、内在奖励变体和好奇奖励开关。但 Qwen 示例脚本的最大生成长度为 2048 token,而且默认未开启好奇项;它因此是可运行变体,不是论文 4096-token 设置的完整运行清单。
