MobileRL 是一篇研究移动 GUI 智能体在线强化学习的 2025 年 arXiv preprint。本卡以 2025-09-10 提交、2025-10-24 修订的 arXiv:2509.18119v2 为论文基线，并核验官方 `THUDM/MobileRL` 仓库与 `xuyifan/MobileRL-9B` checkpoint。2026-07-20 检查的仓库 HEAD 为 `82f3b7e9028098f0683b97dbe228bad300a55fb1`；当前仓库提供 evaluation code，而非训练 pipeline 或 rollout 数据。

论文要解决的不只是预测下一次点击。移动端 online RL 需要从昂贵 Android emulator 中获得稀缺成功轨迹，应对 heavy-tailed task difficulty，并给只在任务结束时收到 reward 的多轮 trajectory 分配有效 credit。uniform on-policy sampling 会反复在不可解任务上消耗 compute，又会丢掉稀缺的困难成功样本；action-only imitation 也无法学习从策略自身错误中恢复。

MobileRL 把训练拆成三个相连的数据对象。Reasoning-free SFT 共 97.9k action step：AndroidControl-Low 21.3k、AndroidControl-High 14.3k、human annotation/self-exploration 62.2k。Reasoning SFT 从相同来源使用 23.6k step——7.2k、4.1k 与 12.2k——只有 action 与 expert target 匹配的模型 reasoning 才保留。online RL 随后在 2,000 个 AndroidWorld 与 1,103 个 AndroidLab training task 上采样 state-action trajectory。

一条 RL episode 把自然语言 instruction 与 Android initial state 连接到连续 screenshot/compressed-XML observation、可选 reasoning、结构化 GUI action、environment transition、Finish 或 50-turn cutoff，以及 binary outcome。AndroidWorld 提供 rule-based verifiable reward；AndroidLab 生成的训练任务没有 ground-truth test，因而由 learned VLM reward model 判断完整 screenshot/action trace。SPA length shaping、AdaPR replay selection、negative pruning 与 FCF task failure history 共同决定哪些 trajectory token 获得 policy gradient。

该对象属于 `environment_agent_trajectory_data`，因为 environment、rollout、terminal verifier、replay buffer 与被删除的 failure 共同定义 supervision。论文明确支持 SFT、在 AndroidWorld rule-verifiable task 上的 RLVR，以及 mobile agent training；但没有发布 SFT corpus、3,103 个 RL task、训练代码、AndroidLab reward-model data/checkpoint、replay state 或完整成功／失败 rollout。现有证据足以写成 L4 深度正文，但 workflow 仍保持 `L3_summary_ready` 与 `partial`。
