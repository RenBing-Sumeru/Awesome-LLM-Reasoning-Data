正确性只相对于已声明契约成立：WebWorld-Bench 使用 LLM-judged Factuality Score 和 Web Turing Score；下游任务成功作为合成轨迹的外部验证。模拟器可能幻觉状态、省略站点规则、隐藏安全约束或过拟合采集交互。目前没有核验到官方 code/data/project URL，因此 artifact 复用仍受限。

不要把论文解读成无限制真实世界可靠性证明。公开 artifact 会进入后续训练语料，服务支撑环境会漂移，judge/评测器实现也可能随发布版本变化。
