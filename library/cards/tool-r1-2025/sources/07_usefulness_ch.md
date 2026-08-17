对于 `environment_agent_trajectory_data`，Tool-R1 可作为单条 agent 训练记录的重建规范：应保留问题与参考答案、每个 Thought 和 Python Code action、每个工具 Observation、持久执行状态、`final_answer`、解析/执行计数、judge 标签、标量奖励、队列成员关系与年龄、behavior-policy 元数据，以及精确环境版本。即使没有发布逐记录语料，这也使论文与指定 track 直接相关。

研究者可以据此设计受控 agent RL ablation：比较 observation masking 与不 mask 的训练、新鲜 rollout 与 `G=16/g=8` 队列复用、中等难度筛选与未过滤任务池，以及仅回答奖励与加入 parse/execute 辅助奖励。Vanilla GRPO 的结果（`9.09`，低于 base 的 `10.30`）是有用的 negative control，但复现它需要缺失的实现与环境固定信息。

该奖励契约还可转化为审计清单：区分 learned answer judgment 与语法/runtime 信号；测试 judge 校准和风格敏感性；加入无关但可运行代码与不安全代码探针；规定零分母和 timeout 行为；保留失败、被淘汰和重新采样的 episode，而不只保留成功 transcript。

复用等级：**仅限阅读/审计参考与重建配方；训练复用在完成核验前被阻断**。官方仓库没有提供代码、数据、轨迹、checkpoint、license 或可回放环境。GAIA 在论文中是评测面，不是已发布的评测包；其精确版本及与训练数据的 contamination 关系均为 unknown。
