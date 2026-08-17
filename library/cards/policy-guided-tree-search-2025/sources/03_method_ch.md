PGTS 在 GSM8K、MATH/MATH500、AQUA、StrategyQA、PrOntoQA、GPQA 和 Blocksworld 上训练与评估，覆盖数学、常识推理、逻辑演绎和规划。策略训练至多使用某个 benchmark 训练分区中的 1,000 个样本。GSM8K 与 AQUA 使用原始切分；MATH 训练数据用于策略训练，MATH500 用于评估；StrategyQA 随机保留 1,000 个样本作为测试，其余用于训练；PrOntoQA 遵循 RAP 切分；Blocksworld 使用 split-v1 训练、split-v2 测试。精确采样 ID、StrategyQA 随机种子、统一切分清单和 GPQA 的详细策略训练切分均未发布。

LLaMA 3.1 8B 与 70B 是目标生成器。主生成设置为 temperature 0.6、top-p 0.9。大多数任务把一句话视为一个推理步骤；MATH 允许一句或一行，Blocksworld 则使用一个动作句。当叶节点被扩展时，审计到的实现最多请求 `max_breadth` 个候选动作，按 action log-probability 排序，执行这些动作，并挂接全部返回子节点。因此，学习式策略控制树导航，但候选生成与同级节点内部顺序仍依赖目标模型 likelihood。

策略状态编码的是已揭示树，而不只是当前活动链。公开代码中的节点包含任务状态、标量奖励、辅助 `info`、父节点、全部子节点、访问次数、深度、节点 ID、trace、节点特征与图边索引。策略学习记录被选动作、被选动作的 log-probability、value prediction、reward、next state 和约束；它不保留所有合法与非法导航动作的完整概率分布。因此，公开运行时支持 on-policy PPO 更新，却无法单独回答“每个未选动作当时获得多少概率”这类反事实问题。

搜索预算按任务设置。GSM8K、AQUA、StrategyQA 和 PrOntoQA 使用宽度 4、深度 16、最多 64 个搜索/推理步骤；MATH500 使用宽度 4、深度 64、最多 256 步；4-step 与 8-step Blocksworld 使用相应深度，最多 32 步。GPQA 的深度与最大步数上限没有明确披露。评估还包含对四条或八条独立生成完整链进行 reward-weighted self-consistency；这些聚合运行不能与单次 PGTS 树内部的分支混为一谈。

控制器是一个两层 GPS 图 policy/value network，通过 PPO 训练。论文披露 clip 0.2、discount 0.99、GAE lambda 0.95、四类动作成本，以及从随机初始化训练；但没有披露 learning rate、batch size、PPO update 数、每次 update 的 rollout 数、随机种子、重试策略或完整逐数据集配置文件。训练后的策略 checkpoint 也未发布。

运行时 root tree 可以表示比最终答案更多的信息。扩展会挂接所有生成的同级节点，其中一些子节点可能始终保持 `visits == 0`；branch 或 backtrack 后被放弃的已访问路径也会继续链接在树中。`visualize(prune=True)` 可以只在渲染时隐藏零访问节点，但实现没有为它们赋予 accepted、rejected 或 pruned 等语义标签。评估可写出 `outputs.pth`、`auxiliary.pth` 和 `metrics.pth`，可视化程序会加载序列化的 auxiliary 对象。这证明代码能够表示完整及已放弃分支；它不证明论文实验树或分支决定已经公开发布。
