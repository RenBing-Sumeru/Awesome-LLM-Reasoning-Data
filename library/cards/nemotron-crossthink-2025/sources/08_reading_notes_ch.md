- 区分论文训练混合（588,645 条提示）与公开合成 release（287,376 行：187,496 QA + 99,880 Math）。
- 发布行是提示和规则 ground truth；在线 policy 推理与 reward 轨迹缺失。
- GRPO 使用 8 个 rollout、temperature/top-p 1.0、context 5,000、learning rate 1e-6、KL 0.001 和固定 650 步。
- 正 reward 要求精确答案与规定格式同时通过；对开放题语义而言该规则较脆弱。
- 固定 HF revision a4ce9a3b9434c5f231e2cbe30696d9a721c11d69，并审计 blend ID、去污染、多数投票标签、上游权利和 Qwen license 条件。

