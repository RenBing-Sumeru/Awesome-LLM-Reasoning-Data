WebSailor-V2 针对深度信息检索 agent 训练中的两个相关瓶颈：一是任务生成器覆盖的不确定性类型过窄，二是真实网络 RL 的延迟、失败和输出漂移使大规模 rollout 收集不稳定。稳定的书目信息边界是 ICLR 2026 Poster；arXiv:2509.13305v1 于 2025 年 9 月 16 日提交，最终 OpenReview 版本增加了作者和数据统计小节。

论文使用三个相互关联的数据对象。SailorFog-QA-V2 从稠密的网络事实图中采样合成 question-answer instruction pair；未具名的高性能开源模型求解这些任务，并通过 rejection sampling 选出成功 ReAct episode 用于 SFT；当前策略随后在离线 Wikipedia 模拟器或受管真实网络环境中生成完整 ReAct rollout，每个 episode 获得一个 terminal scalar reward（论文 §§2–4；Appendix B）。

该工作属于 `environment_agent_trajectory_data`，因为训练对象包含 task、thought/action/observation 历史、工具介导的环境状态、terminal answer 和 trajectory-level reward。它并不是公开数据集或可 replay 环境：最终稿报告 SailorFog-QA-V2 有 3 万余条 instruction-tuning pair，但 V2 官方目录只有 README 和两张图片，没有 V2 记录、轨迹、训练代码、模拟器、reward 实现或模型链接。

因此，本 Card 将 WebSailor-V2 定位为构造与审计参考。论文对总体 pipeline 和工具的说明足以支持 L4 深度的 Card，但 canonical metadata 仍应保持 `partial` 和 `L3_summary_ready`：reward predicate、完整 corpus、成功与失败 rollout 总体、逐条 lineage 和 replay stack 均不可用。
