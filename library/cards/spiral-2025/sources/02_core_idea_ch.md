SPIRAL 的贡献是一个在线数据—优化闭环：同一个 full-parameter LLM 在回合制零和语言游戏中扮演双方，因此每次 policy update 都同时改变后续的数据生成器与对手。角色专属顶层指令区分两名玩家；TextArena 将每个完整的 multi-token response 解析成可执行动作并推进状态。（论文 §3、Figure 3、Algorithm 1。）

Role-conditioned Advantage Estimation（RAE）为每个游戏 `G` 与角色 `p` 单独维护 EMA 回报 baseline `b[G,p]`，再用 `A[G,p] = R[p] - b[G,p]` 训练该角色的完整 response。这会消除先手优势、信息不对称等结构差异带来的偏移。RAE 并不会给单句 reasoning 打分。该 feedback contract 能观察动作是否合法、状态转移、终止与角色结果，却不能观察显式 chain-of-thought 是否真实、是否必要，或是否在因果上产生了该动作。（论文 Eq. 2–3。）

它代表的方向是由 environment 生成、课程与 policy 共同演化的在线 reasoning data。论文将 SPIRAL 与 SPAG 的离线单游戏更新、固定对手训练、RAGEN 等 single-agent multi-turn 系统，以及 Absolute Zero 等 single-turn 自生成任务进行对比。真正变化的是 shared-policy 双角色自博弈、完全在线更新、多种多轮游戏与跨游戏迁移证据的组合；self-play、REINFORCE、语言游戏和基于规则的终局 reward 本身并非本文首创。（论文 §2。）
