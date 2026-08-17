- 从官方 model card 开始，并明确工件类型：Seed-OSS 是模型发布，不是正式论文。阅读 benchmark claim 前，先记录三组 checkpoint 与 Apache-2.0 的适用范围。

- 用 12T 总量、三类来源、2024 年 7 月 cutoff 和命名 filtering stage 建立数据台账。Source name、类别比例、vendor identity、generated-data 细节与权利均标为 unknown。

- 把 Base 与 Base-woSyn 当作发布对照，而不是受控因果实验。检查 matched token、corpus、seed、compute、step 与 checkpoint selection；发布没有提供这些信息。

- 对 Instruct，分开 thinking-budget serialization 与训练证据。记录 0/unlimited/positive budget 语义和 reflection tag，同时把 budget mixture、loss、verifier 与 CoT faithfulness 保持 unknown。

- 区分 safety SFT/RLHF/PPO 与 agent benchmark。前者只是高层训练阶段披露；TAU-bench、OpenHands、AgentLess、Multi-SWE-bench、RULER 是评测 scaffold。
