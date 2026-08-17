既有工作基线是反复采样高成本工具交互的在线 agent reinforcement learning，以及通过固定调用格式或 prompting scaffold 表达轨迹的工具 agent。Tool-R1 把可训练对象改成由可执行 Python 组合而成的 episode，并把采样改为逐题缓存近期 policy trajectory。

方法层面的具体变化是三个接口的组合：response masking 分离策略 token 与环境 observation；judge/parse/execute 混合奖励为完整 episode 打分；`G=16`、`g=8` 的动态队列复用 rollout，并围绕 `0.2–0.8` 难度区间进行 resampling。新意应归于这套组合及其报告的 ablation，而不是归于任一沿用组件。

GRPO、Qwen2.5、Python 执行、LLM-as-judge 打分、外部工具、GAIA 和难度过滤都不是本文提出的。论文也没有发布新 benchmark 或固定轨迹数据集。它对 reasoning-data 研究的价值，在于给出一个把 episode 字段、observation masking、复合奖励与在线轨迹复用连接起来的具体 agent 训练契约。

采用该配方前，构建者必须检查缺失的实现、队列语义、behavior-policy bookkeeping、judge prompt 与校准、sandbox 与工具版本、保留的失败记录、数据权利和 contamination control。缺少这些工件时，该贡献只能作为重建目标与审计参考，不能当作可复用训练发布。
