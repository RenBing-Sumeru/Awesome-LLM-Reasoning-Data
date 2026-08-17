
WebAgent-R1 处理的是文本 Web 智能体在训练数据与优化上的缺口。行为克隆可以教授浏览器 action 格式，但固定 demonstration 集无法让当前策略面对自身错误，也难以探索不同的长程策略；较早的 Web 智能体 RL 系统通常依赖 off-policy replay、轨迹筛选或额外的 outcome reward model。论文转而研究在自托管 WebArena/WebArena-Lite 环境中的端到端 on-policy 学习，其中每条记录都是一个多轮 episode：包含用户意图、纯文本 HTML observation、累积 action history、每轮一个浏览器 action、环境转移以及终局二元结果。

固定的 warm-up 数据对象是公开的 WebArena-Lite 行为克隆集合：由 program-based solver 产生的 1,186 个有效训练样本，共含 9,460 条轨迹。在线 RL 数据对象与该发布物不同，不能混写：当前策略在 647 个训练任务上反复采样浏览器 episode，另有 165 个人工核验任务仅用于评估。这些 current-policy 轨迹由 WebArena 的 task-specific rule 打分，并按组进入 M-GRPO 更新。本 Card 归入“Rollout, Search, and Test-Time Trace Data”，因为成组的训练时尝试与交互次数 sweep 都实质影响论文系统。论文和代码公开了配方，但未核验到独立发布的在线 rollout 数据集或 checkpoint；因此 L4 审核必须保留这一发布边界，不能把 benchmark 成功率当成数据可复用性的证据。
