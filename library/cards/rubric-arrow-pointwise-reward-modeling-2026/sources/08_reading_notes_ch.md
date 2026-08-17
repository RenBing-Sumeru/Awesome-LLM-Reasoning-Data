1. **一句话定位：** RUBRIC-ARROW 从 pairwise preference 交替训练 rubric generator 与 pointwise Judge，为非可验证任务提供概率 reward。


2. **方法抓手：** Judge SFT 初始化、概率满足度、分阶段 reward 和交替 GRPO 是核心。


3. **数据抓手：** RubricARROW-Judge-SFT 含约 119,120 条指令—rubric—候选—评分记录。


4. **证据锚点：** 方法在 RM 准确率和下游 policy 后训练上持续改善，概率聚合显著减少平局。


5. **复用决定：** 适合开放式任务 RM；使用前需审计 rubric 覆盖、偏好偏差和交替训练稳定性。
