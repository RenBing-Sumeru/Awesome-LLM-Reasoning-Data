流水线从 1,186 条 WebArena-Lite 样本开始，每条包含指令、oracle 轨迹和 reward function。SFT 用于初始化 actor；critic 复制该模型并增加随机初始化的 value head。每个浏览器回合中，策略输入由指令、动作历史以及带元素 ID 的简化当前 HTML 组成，文本输出则是 Click、Type、Search、Scroll、标签页控制、页面导航或 Exit 等单个浏览器操作。

课程构造运行 8 个阶段，每阶段保留 500 条新指令。此前交互中的失败指令作为 GPT-4o-2024-05-13 的种子；已发布生成器对每个站点最多抽取 10 条种子，运行 2 轮，随机种子为 42，temperature 为 1，top_p 为 1。生成指令还必须通过分数区间 0.05 到 0.75 的 critic 筛选和 GPT-4o 可行性检查。这些代码设置已经核验，但端到端实验种子、重试行为、总生成量和每条指令的 rollout 数量没有披露。

反馈方面，原始任务使用 WebArena-Lite reward function；这些函数给增强后的 baseline 与 WebRL rollout 打标签，从而构造含 12,200 条样本的 ORM 训练数据。对于生成任务，ORM 根据指令、动作历史和最终 HTML 比较 YES 与 NO 概率，并赋予二元 1/0 奖励。处理代码把每步序列化为 observation、next_observation、task、reward、done、action 和 trajectory_reward，后续还可加入 mc_return 与 rank_score。当前阶段训练同时使用成功和失败的已标注 rollout。

历史回放的范围更窄：只有成功轨迹进入 buffer。当前 actor 计算动作置信度，概率高于 0.5 且不超过 0.95 的记录才可进入回放，回放量最多为当前交互数据的 2 倍。随后 actor 与 critic 接受带前一阶段策略 KL 约束的 off-policy 更新，discount factor 为 0.9，GAE lambda 为 0.5。失败轨迹不回放，但其指令会继续作为课程种子。

论文报告的 WebRL 设置中，actor 与 critic 的学习率均为 1e-6，batch size 为 128，二者各训练 1 个 epoch；ORM 训练学习率为 5e-6，训练 4 个 epoch，cutoff length 为 16,384。复现还必须固定外部 VAB-WebArena-Lite、浏览器与站点状态、任务配置、reset 行为、模型 revision 和处理脚本。论文没有披露 episode 最大 horizon 或总环境计算量，仓库也没有提供可直接重放历史实验的完整 run manifest。
