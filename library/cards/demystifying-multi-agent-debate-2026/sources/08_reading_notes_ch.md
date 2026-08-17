- 论文协议：采样 10 个候选，贪心选 5 个不同答案，再让 5 个 agent 辩论 5 轮。
- 区分 5K self-consistency 标注 SFT、10K 困难 GRPO 样本与测试时对话。
- 第二阶段奖励尺度为 correctness 10、confidence 3、engagement 5、格式错误 -30。
- Engagement 启发式源于已观察的 reward hacking，本身也可能被利用。
- 代码和一个示例记录公开；完整候选池、轨迹、奖励与 adapter 仍不可得。

