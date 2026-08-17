- 先读 Method Overview 与 model card。分别记录 ER 1.5 和 VLA 的输入输出，再把 ALOHA、Franka、Apollo、互联网模态、原始 caption、Gemini/FlexCap caption 列成不同 source object。

- 把 Motion Transfer ablation 与跨具身附录一起读。区分 same-checkpoint 的 230-task 通用 VLA 评测，以及 checkpoint 状态不同的长时程 ALOHA/Franka agent 评测。

- 对 embodied thinking，只引用可见行为与正式发表的 scaling 陈述。不要使用只存在于注释 TeX 中的精确 thinking-token 数值，也不要从 inference trace 推断训练 label author。

- 每个物理 agent 数字都要绑定 rubric、平台、延迟、simulator/real 条件、orchestrator 与 judge。Progress、success、planning failure、success-detection failure 和 action failure 应保持为独立字段。

- 最后读 model card 与安全章节。把论文许可和机器人数据权利分开；把 auto-red-team 记为已披露的安全数据配方，但不要暗示生成语料或 reward system 已开放。
