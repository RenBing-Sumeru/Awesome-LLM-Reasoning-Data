构建流程从四个主要的自托管 WebArena 站点开始。每个站点分配 3 位作者标注者，其中 1 位覆盖全部四站，合计 10 位标注者。他们探索站点内容与功能，提出强调记忆的分析型事务，并为各变量创建模板及多个实例。早期原型由 Claude-based agent 执行，用于发现过于简单的设计和模型能力边界。标注者还被要求同时消除指令与评测标准的歧义，并在需要 exact matching 时统一输出措辞。

随后，作者以每站 3 位标注者交叉核验任务，并反复执行 inference、error analysis 和 revision。最终 117 个模板生成 532 个实例：Shopping 117 条、Shopping Admin 132 条、Reddit 91 条、GitLab 127 条、跨站任务 65 条。Map 任务因功能不足以及 WebArena 团队内部服务器在 2025 年 4 月后无法访问而被排除。论文提供了汇总构建数量，但未公开逐任务作者、原型历史、被拒方案、Claude 试跑输出或筛选阈值。

评测时，BrowserGym 或 AgentOccam 接收实例化意图和部分页面观察，在配置环境中执行动作，维护各自的历史或记忆，并以答案或 infeasibility 报告结束。BrowserGym 提供 15 类浏览器、标签页、导航、消息和不可行性动作，单步可以发出多个动作；AgentOccam 提供 8 类基础、导航、note/stop 与 branch/prune 动作，每步仅执行一个动作。两者均设 50 步上限。实验使用 GPT-4o-2024-05-13、claude-3-7-sonnet-20250219 和 gemini-2.5-pro-preview-03-25，Appendix C 给出了不同 scaffold 的温度和 token 上限。

最终答案、URL 和/或页面状态由 `string_match`、`url_match` 与 `program_html` 评分。仓库要求保持任务顺序，因为后续任务可能改变环境状态；每个站点评测后要重置，再执行跨站任务，失败任务重跑前也要重置。复现时应固定仓库 commit `542abc538fd9558362119714989166904d82f5f4`、532 条 JSON、上游 WebArena/BrowserGym/AgentOccam 版本、浏览器与数据库镜像、认证状态、API 模型快照、任务顺序和 reset 日程。本卡目前只固定了仓库 commit 与任务 JSON，其余运行时版本仍为 unknown。
