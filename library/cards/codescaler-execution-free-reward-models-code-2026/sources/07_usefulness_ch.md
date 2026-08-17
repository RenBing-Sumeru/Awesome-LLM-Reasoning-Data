1. **评测：** 直接用 question_content、code_pos、code_neg 和 Bradley–Terry loss 训练代码 ORM，并在独立执行集上校准。

2. **训练：** 在无测试的合成题上提供近似 RL 奖励，但定期抽样执行代码以估计 reward hacking。

3. **迁移或部署：** 用于低延迟 Best-of-N 代码选择；成功标准应同时报告选择准确率、真实测试 pass@1 与评分延迟。
