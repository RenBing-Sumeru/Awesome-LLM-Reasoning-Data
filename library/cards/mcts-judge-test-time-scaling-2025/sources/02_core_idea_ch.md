根节点包含题目描述和候选代码。action 选择不重复的评估 subtask，另有一个 null action；执行 action 时，base LLM 生成特定视角的分析与二元决策。selection 把既有 rollout 的全局 UCT 与 LLM 对“候选 subtask 是否能改善当前历史覆盖度”的自评结合。expansion 随机采样未使用 action，simulation 继续选择非空 action 直至最大深度，最后把轨迹中的二元子判定与一次独立全局评价聚合为 trajectory prediction。

terminal signal 并不来自真实程序执行。搜索前，GPT-4o 根据题目生成 input-output test case，并重复验证每个 case。到达叶节点后，搜索 LLM 获得隐藏输出的测试输入，被要求逐行扮演解释器；多次模拟输出投票决定单个 case 是否通过，只有全部抽样 case 都通过时，模拟 verifier 才判程序正确。trajectory judgment 与该模拟结果一致时获得 reward。相较 vanilla judging、majority voting、Best-of-N 或纯 UCT，其贡献是把多视角 MCTS、基于历史的自评和经过交叉检查但仍需模型判断的伪执行 reward 组合起来。
