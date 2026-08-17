本卡的主要来源是当前 arXiv v2 论文、OpenReview 接收稿和 ICLR 2026 官方 poster 条目；论文最初发表于 2025 年，并已正式作为 ICLR 2026 conference paper 发表。本卡还核查了作者维护的 PC-Agent-E 代码仓库、项目页、Hugging Face 数据集与模型，以及 WindowsAgentArena-V2 仓库。这些来源用于确认论文身份、发布边界、代码行为与评测面，而不是简单改写摘要。

论文解决的具体问题是：如何在不收集数千条完整人工示范的前提下获得有效的计算机使用监督。方法从 312 条保留下来的人工完整 Windows 任务轨迹出发，为每个人工动作补全一段 thought，并生成九个 Claude 3.7 Sonnet 候选 thought-action 决策，最后将增强后的 episode 展平为约 27K 条 action-level SFT 样本。一个发布 episode 由配套任务描述和逐步字段组成，包括 screenshot、规范化 action、可选 element 与 rectangle、marked screenshot、合成 thought，以及最多九个 boost response。发布包包含 312 个 JSONL episode、312 个任务 Markdown 文件和 4,503 张 PNG screenshot；不能把 4,503 张图像或 27K 条派生 SFT 行写成彼此独立的完整轨迹。

它属于 `environment_agent_trajectory_data`，因为论文公开了从已执行 GUI episode 到 state-action 监督的转换过程，WindowsAgentArena-V2 又提供了环境侧评测契约。边界同样关键：九个 Claude 替代动作不是已执行分支，没有动作后的 observation 或环境 reward，因此不能视为可 replay 的轨迹。论文也没有报告 RL、在线数据采集策略或训练时环境 verifier。

在内容层面，本卡已达到 L4-ready：已检查正式论文与会议信息、代码、数据、模型、构造脚本、训练配置、benchmark 仓库和许可证页面。但 L4 不表示数据可不受限制地用于训练；screenshot 隐私与权利、逐记录 lineage、基于 replay 的正确性、合成分支有效性和不可变版本仍未解决。
