1. **一句话定位：** Critic-V 将 Reasoner 与 Critic 解耦。

2. **方法抓手：** 为同一推理生成多条 critique。用规则奖励比较 critique 是否识别错误、是否促进修正。

3. **数据抓手：** 官方仓库发布 Critic-V 的训练与评测资产。

4. **证据锚点：** Critic-V 在 8 个多模态 benchmark 中有 5 个超过 GPT-4V。

5. **复用决定：** 训练多模态 critic 输出可操作自然语言反馈。最大风险是规则奖励决定 critique 排序。
