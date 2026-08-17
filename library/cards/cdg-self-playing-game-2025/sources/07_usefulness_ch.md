对“数据构建与开放发布配方”赛道而言，CDG 最有价值之处是展示如何从同一张 episode 图派生多种监督，而不是把它当作一个无差别数据集。一次回合可以生成 Prover SFT 对话、Helpful Critic 样本、Misleading Critic 样本、纠错偏好和抗误导偏好。

复用时应保留原题与标准答案、初始解和正确性、Critic 角色与完整 critique、全部四个 revision 及 verifier 结果、筛选阈值和结论、原始 prompt 模板、轮次、checkpoint、解码设置和最终训练序列化。入选与淘汰回合都需要保留，否则仅看入选数据无法审计阈值偏差和 Critic 失败模式。

这套构造还适合用来压力测试反馈鲁棒性：比较有效与无效 critique 的采纳率，测量角色措辞泄漏，以语义判定替换固定短语，并按 parser 置信度和题目来源分层分析。任何复用说明都应区分 19,473 条原始题目、Google Drive rollout、转换后的角色数据和 Hugging Face checkpoint；它们互有关联，但不是同一种数据对象。
