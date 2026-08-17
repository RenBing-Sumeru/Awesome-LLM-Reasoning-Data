WebSailor 解决一个具体的 post-training 问题：开放 web agent 可以执行较短或路径预先明确的搜索链，但面对初始不确定性高、没有固定求解路径的问题时，通常学不会长程探索。稳定的论文记录是 2025 年 7 月 3 日提交的 arXiv:2507.02592v1；未确认正式会议 venue，因此仍标为“arXiv preprint”。本 Card 已检查论文、appendix、官方仓库、公开 QA 示例和模型页面。

论文构造了两个相互衔接的数据对象。SailorFog-QA 是由网页事实图和信息模糊化生成的 question–answer task。冷启动阶段先让 expert LRM 求解这些任务，只保留成功的 action–observation trace，再用简洁的重构 thought 替换 expert 原始冗长思维，形成带标签的 ReAct episode；DUPO 随后在网页环境中生成新的多轮 rollout，并按照格式与最终答案正确性给出 scalar reward（论文 §3–4；Appendix A）。

该工作属于 `environment_agent_trajectory_data`，因为一条训练记录不只是 prompt 和 answer，还包含网页 environment、search/visit action、observation、重构 thought、terminal answer 和 trajectory-level reward。相邻问题是仅用于评测的网页搜索 benchmark；WebSailor 明确报告了 SFT/RFT 与 RL 用途，但没有提供可历史 replay 的网页快照或完整公开 rollout corpus。

最重要的边界是发布规模。论文称 RFT 冷启动使用了 2,000 余条高质量样本，但官方仓库只发布 20 行仅含 `question` 与 `answer` 的 JSONL，README 仍写着 sampled trajectory data 将在未来发布。因此 Card 可以在 L4 深度解释方法，但 accepted metadata 仍保持 `L3_summary_ready` 和 `partial`：完整成功 RFT 集与失败/被拒绝 DUPO rollout 均未确认公开。
