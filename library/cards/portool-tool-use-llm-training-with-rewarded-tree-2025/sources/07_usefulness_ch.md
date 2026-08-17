**有证据支持的训练用途**

- 监督微调是论文报告的 warm start，共 5 个 epoch，但 demonstration 与 teacher 未公开。
- Agent training 是主要用途：PORTool 在可执行 21 工具环境的 8 条共享前缀分支上进行 15 个 epoch 的在线 RL。
- 奖励树可支持终局到步骤信用、失败感知分支比较、工具效率，以及局部/全局 advantage 混合研究。

**当前发布不支持的用途**

- 重建 SFT、离线 RL 或模仿数据，需要许可明确的查询，以及包含工具输出、标签、奖励与来源的完整成功、失败和 unable-to-answer 轨迹。
- 回放结果需要后端、冻结的工具/数据版本、时间/地点环境、SFT checkpoint、种子、judge 配置与全部采样分支。
- 没有训练独立 reward model 的证据：GPT-4o 是固定终局 judge，PORTool 为策略优化计算奖励，并未发布或训练 reward-model checkpoint。

因此，`training_use` 保持为 SFT 与 agent training；它不意味着存在公开 SFT 语料、可复用离线树数据集或 reward-model 发布。
