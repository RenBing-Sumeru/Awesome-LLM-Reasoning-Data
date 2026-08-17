作为 ICLR 2026 会议论文，Lookahead Tree-Based Rollouts（LATR）处理在线 Reinforcement Learning with Verifiable Rewards（RLVR）中的一个具体瓶颈：同一提示下采样的多个回答虽然在局部 token 上不同，却常收敛到几乎相同的推理轨迹。在 GRPO 或 DAPO 训练中，这类同质 rollout 组也容易得到同质的终点奖励；即使为每个提示分配八个完整回答的预算，组内相对学习信号仍可能很弱。

论文改变的是 rollout 构造方式，而不是提出新的优化器或奖励模型。对于每个 Countdown 或 DAPO-Math 提示，当前策略构造宽度受限的动态树：候选 token 产生分支，短程模拟用于判断子分支是否真正偏离父分支，相似度剪枝删除冗余分支及其后代，保留下来的路径再完成为一组完整回答。Countdown 表达式由程序化的格式与正确性规则评分；数学回答使用二值精确答案评分。流程中没有人工步骤标注、学习式 judge 或 process-reward 标签。

因此，在线数据对象是一个以提示为条件、最多包含八条当前策略轨迹的组/树，其中包括 token 概率、父分支与出生位置、前瞻片段、保留或剪枝决策、终点答案、标量奖励和组内相对优势。该对象属于 **Rollout, Search, and Test-Time Trace Data**，因为分支、选择、被拒绝路径和固定 rollout 预算共同决定训练信号。它不是测试时树搜索：论文用重复随机解码评估训练后的策略，LATR 则用于在线 RL 分组的生成阶段。

公开的 Hugging Face artifact 对象更窄。四个 Parquet 文件提供经过预处理的 Countdown 与数学 prompt/reward 记录，包含 `prompt`、`data_source`、`ability`、`reward_model.ground_truth` 和任务元数据等字段，但不包含生成结果、token 概率、树节点、分支谱系、前瞻窗口、剪枝决策、逐回答奖励、被拒绝路径或策略更新组成员关系。本 Card 达到 L4，是因为论文全文及附录、ICLR/OpenReview 官方记录、固定版本的实现和预处理数据发布足以支持细致的双语说明；L4 不认证尚未公开的原始树、精确发布清单、去污染、许可证，也不消除论文与公开数学脚本之间的配置差异。
