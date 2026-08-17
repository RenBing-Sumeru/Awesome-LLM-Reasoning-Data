Table 1 报告：在相同的两种 agent scaffold 下，WebArena 与 WebChoreArena 之间存在显著差距。使用 AgentOccam 时，GPT-4o 从 42.8% 降到 6.8%，Claude 3.7 Sonnet 从 52.0% 降到 23.5%，Gemini 2.5 Pro 从 54.8% 降到 37.8%。使用 BrowserGym 时，相应变化为 36.4% 到 2.6%、51.5% 到 23.1%，以及 59.2% 到 44.9%。这些是作者报告的 accuracy，并非独立复现；跨基准差值还同时包含任务、环境和 evaluator 可能发生的变化。

Table 2 从 102 个非跨站模板中各取一道任务进行分析。把截图加入 accessibility tree 后，GPT-4o 仍为 2.9%，Claude 从 24.5% 降至 11.8%，Gemini 从 46.1% 降至 39.2%。Table 3 又单独分析答案依赖截图中不可见文本的任务。证据支持“性能对观察模态敏感”，但不能推广为“图像总会损害网页智能体”。

Table 4 在 215 道 calculation-specific 任务上测试 calculator。GPT-4o 的 accuracy 从 3.7% 变为 2.8%，Claude 从 19.5% 变为 18.6%，Gemini 从 40.0% 变为 42.8%；三者分别在 35、59 和 41 道任务中调用工具，均低于该子集的 28%。论文据此认为，仅提供 calculator 并不足够，因为智能体经常不会主动调用它。

Section 6 与 Appendix B 记录了跨页计数错误、对超过 15 个数做运算时出错、遗忘约束或输出格式、丢失页面状态、虚构不存在的商品、过早结束以及放弃复杂搜索等现象。这些失败支撑了基准的目标难度，但不能证明每条任务都没有标注错误、fuzzy judge 已充分校准，或未发布的实验运行可以被精确重放。
