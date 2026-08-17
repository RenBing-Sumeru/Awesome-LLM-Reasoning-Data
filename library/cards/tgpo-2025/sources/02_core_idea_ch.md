本文的贡献是把同一任务的多条线性 web-agent episode 转换为 trajectory merge tree，在 action branch 上附加混合 process feedback，并优化 node-local action preference，而不是把一个 terminal label 复制到每个 step。

TGPO 把同一任务的多条轨迹聚合为树：node 是唯一 web state，edge 是 action。当两个 state 的标准化 URL 相同（保留 essential parameter），且 URL 变化后的 effective action sequence 相同或 image hash 完全一致时，系统将其合并。这个派生对象能表示成功与失败执行之间的共享前缀、分歧决策、纠正路径和循环。

每条 branch 接收四项 process signal。subgoal 项为 `R_subgoal = L_min / (d(s0,st) + min_q d(st,q_goal))`；检测到 state cycle 时 redundancy 项为 `-1`，否则为 `0`；当一个未披露的 VLM 判断 action 造成了预期界面变化时，action accuracy 为 `+1`，否则为 `0`；action 语法有效时 format validity 为 `+1`，否则为 `0`。总奖励为 `R = R_acc + R_format + R_red + alpha * R_subgoal`，论文只披露 alpha 的经验范围为 2–5。

在一个 tree node 上，系统按 cumulative reward 排序分歧 branch，构造 node-level `(chosen action, rejected action)` pair。TGPO 使用 DPO 风格的 policy/reference log-ratio margin，并用 `|r_w-r_l| / sigma(R_s)` 加权 pair，使竞争 action 累积结果差异较大的 node 获得更高权重。tie handling、zero-variance safeguard、reward-gap threshold、pair balancing 与记录数量均为 unknown。

反馈契约是混合型的。environment transition 与 terminal success/failure 提供 episode 证据；URL/action/hash 逻辑、shortest-path progress、cycle detection 和 action parser 提供 tree-derived 或 programmatic signal；VLM 提供需要判断的 action-effectiveness label。这些信号能观察已采集 transition、语法有效性、近似进展和预测 UI 变化，但不能在每一步确认语义任务正确性，不能恢复未访问 branch，也不能保证 merged state 在行为上等价。

相较 trajectory-level outcome labeling 和对完整输出构造普通 DPO pair，TGPO 把 preference object 移到共享 state 上的分歧 action，并从跨轨迹结构中得到排序。论文的 KTO-Tree 对比说明 tree-derived label 与 TGPO weighting 可能有可分离贡献，但不能证明这些未发布标签已经校准或可迁移。
