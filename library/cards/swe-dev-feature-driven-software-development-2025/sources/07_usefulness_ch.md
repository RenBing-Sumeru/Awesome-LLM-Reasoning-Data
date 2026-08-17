1. **功能开发 SFT：** 用 PRD、不完整仓库和 gold implementation 训练 agent 定位、编辑与实现功能；按仓库划分，并用开发者测试和全量回归测试计算 Pass@1。

2. **测试奖励 RL：** 在容器中把相关单测通过率作为 reward，保存命令、日志和失败类型；对编译失败、超时和断言失败分别标注，防止 agent 学习环境漏洞。

3. **评测新功能 agent：** 采用 500 题 easy/hard split 比较单 agent、reasoning model 和 MAS。若研究对象是需求澄清、架构设计或非 Python 系统，SWE-Dev 只覆盖实现阶段，需要额外的人类或规格评测。
