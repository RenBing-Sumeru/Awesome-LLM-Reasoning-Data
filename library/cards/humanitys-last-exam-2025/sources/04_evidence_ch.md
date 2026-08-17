Nature 记录 HLE 包含 2,500 道题、覆盖一百多个学科；约 24% 是选择题，其余为 exact-match，约 14% 是多模态题。论文报告 frontier LLM 在 HLE 上准确率低、校准差，多数模型 RMS calibration error 超过 70%。

逐样本证据是：在某个数据版本和 grader 下，模型答案是否被参考答案接受。证据边界很关键：分数会受 public/private split、grader 或 LLM judge 设置、短答归一化、prompting、工具访问和发布后修订影响。
