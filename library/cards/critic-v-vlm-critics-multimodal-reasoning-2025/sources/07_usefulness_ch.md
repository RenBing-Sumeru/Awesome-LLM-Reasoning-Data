1. **评测：** 训练多模态 critic 输出可操作自然语言反馈，而非仅返回分数。

2. **训练：** 把 critique preference 数据用于 DPO，并在独立人工错误定位集上验证。

3. **迁移或部署：** 构建 Reasoner–Critic 迭代推理；若没有可靠规则或人工验证，不能把 critique 排名当作真实过程监督。
