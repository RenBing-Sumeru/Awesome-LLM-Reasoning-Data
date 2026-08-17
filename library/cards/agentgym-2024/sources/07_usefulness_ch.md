AgentGym 适合作为环境反馈 agent 数据的 schema。高质量派生记录应保留 environment id、scenario、task id、instruction、observation、valid actions、thought、action、environment feedback、reward/success、round index、terminal reason、trajectory source、filtering reason、split、maximum rounds、model/checkpoint 和 artifact snapshot。

对 atlas 维护来说，它是区分 evaluation object 和 training object 的强样例。AgentEval 记录支撑 benchmark comparison；AgentTraj/AgentTraj-L 记录支撑监督轨迹复用；AgentEvol-style run 支撑反馈驱动改进 claim。下游卡片中这些标签应保持分开。
