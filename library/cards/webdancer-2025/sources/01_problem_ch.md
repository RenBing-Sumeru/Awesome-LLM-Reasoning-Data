本卡的一手来源是 NeurIPS 2025 正式 proceedings 条目及 29 页论文、arXiv:2505.22648，以及 Alibaba-NLP 的 DeepResearch/WebAgent 仓库。正式 proceedings 列出 14 位作者并使用“Robert Tang”；PDF 首页写作“Xiangru Tang”，arXiv 与仓库引用又采用更短的作者列表。本卡以正式 venue metadata 为准，并把这一差异保留为审计事项。

WebDancer 处理的是 deep information seeking 中的数据与训练缺口。许多既有 QA 任务只需两三次检索即可完成，而可用的自主搜索 agent 必须分解问题、交替进行推理和工具调用、吸收不断变化的网页 observation，并判断何时已有足够证据给出简短答案。因此，该工作把 web 环境和完整行为轨迹，而不只是最终答案，视为 post-training 输入。

构造从 60,000 条 CRAWLQA 与 40,000 条 E2HQA 问答开始。这些任务用于生成由 GPT-4o 或 QwQ-Plus 驱动的 ReAct 轨迹，轨迹包含 Thought、结构化 search/visit Action、Observation 与最终 Answer。筛选后的轨迹提供冷启动 SFT 监督；未进入 SFT 的 QA 可用于 on-policy DAPO episode，并接收终局格式奖励和答案奖励。因此，该论文直接属于 `environment_agent_trajectory_data`。

其范围比通用 browser agent 更窄：论文环境只提供 search 与 visit，主要实验聚焦短答案信息检索，live web 页面也没有冻结以供重放。仓库公开了 WebDancer-32B checkpoint、demo/inference 代码、200 条 QA 样例和 200 条冷启动轨迹样例，但没有公开完整 100,000 条 QA、论文报告的 14,228 条 SFT 轨迹或 RL rollout 日志。因此，本卡保持 L3 与 `card: null`，等待人工复核发布和 replay 边界。（论文 §§1–3、Appendix D；官方仓库 datasets 与 issue #35。）
