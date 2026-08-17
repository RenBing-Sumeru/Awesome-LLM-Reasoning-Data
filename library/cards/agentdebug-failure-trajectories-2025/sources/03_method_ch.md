作者先分析 500 余条失败轨迹，再精选 200 个代表性 episode：ALFWorld 100、WebShop 50、GAIA 50。10 名具有 NLP 与 LLM-agent 经验的研究生审阅每个决策步；指南经三轮 pilot 调整，标注者先接受训练，共享子集独立双标，分歧再集体裁决。模块级 Cohen's kappa 为 0.55。

AgentDebug 有三个运行阶段：把每步 memory、reflection、planning、action 内容映射到 taxonomy；定位最早关键错误；生成反馈并从该点 re-rollout，若仍失败则细化反馈。论文在关键错误检测实验中使用 temperature 0 的 GPT-4.1。仓库提供 detector、provider wrapper、内置环境适配、rollout 收集和 step-to-episode 转换；确切 benchmark 版本、生成模型混合、筛选产率、reset 状态与逐 episode 尝试历史仍为 unknown。

