权威记录是 2026 年 3 月发表于 Findings of EACL 的正式论文，ACL Anthology ID 为 `2026.findings-eacl.3`；Card ID 中的 2025 来自更早的 arXiv 投稿年份，不代表正式出版年份。论文处理的是一个具体训练难题：SFT 网页智能体可能记住示范路径，而企业网页会在每次动作后改变，并产生很长的 HTML 或 accessibility tree 观测；若直接进行端到端多步 RL，又需要反复执行昂贵的远程环境。因此，作者希望用更便宜的信号训练带显式推理的下一步动作选择。

构造过程从 WorkArena 的 33 类 ServiceNow 任务开始。每类保留 10 个训练配置，因此论文报告的是 **330 个训练配置**。BrowserGym 的 `cheat()` 函数执行 Playwright 脚本，生成 oracle-like 动作—观测序列；随后删除含无效动作或最终失败的轨迹，再把每条保留轨迹拆成独立决策记录。单条记录包含自然语言目标、当前 HTML/AXTree、历史动作、可用操作和 oracle 下一动作；SFT 还可附带 teacher 生成的 reasoning，GRPO 则附加模型采样的 `&lt;think&gt;...&lt;/think&gt;&lt;action&gt;...&lt;/action&gt;` 输出与规则奖励。

它属于 `environment_agent_trajectory_data`，因为核心对象源自环境交互轨迹，监督信号绑定到状态与动作；但 RL verifier 是离线 oracle-action matcher，不是实时 terminal feedback。它也不是已公开的轨迹数据集、通用网页 benchmark 或端到端规划证明：官方仓库只提供带外部数据/模型占位符的配方代码，没有公开已接收轨迹、被拒失败样本、checkpoint 或 replay manifest。

因此，本 Card 的价值是提供可审计的构造与反馈配方。L3 边界是有意保留的：论文和代码可以检查，但数据复用、精确复现、失败分布分析和模型复用仍受缺失 artifact 阻断。（论文 §§4.1–4.3；官方仓库固定于 `1ee2619b…`。）
