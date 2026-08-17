输入是编程题 p 与候选代码 c；根据评测条件，也可能提供示例或 reference code。论文使用 HumanEval-X（五种语言共 164 题）、随机抽取的 100 道 APPS competition-level 题，以及 BigCodeBench（1,140 道 Python 题）；五个 base model 包括 Qwen2.5-Coder-14B、DeepSeek-Coder-V2-16B-Instruct、Codestral-22B、Llama-3.1-8B-Instruct 和 GPT-4o-mini。

主要配置为 tree depth 9、八次 MCTS rollout、UCT exploration constant 3、LLM/UCT selection weight 0.1/0.9、terminal reward 1.1、temperature 0.4、top-p 0.95、top-k 40 和最大输出 2,048 token。GPT-4o 生成测试，每个 case 重复验证五次；到叶节点后抽取三个已存测试，每个模拟执行七次。多数票决定单个输出，全部抽取 case 通过时 h(x) 才判为 correct；h(x) 与 trajectory judgment 一致即产生 terminal reward。累计 reward 用于加权选择最终轨迹。对缺少有意义 input-output pair 的 BigCodeBench 条目，方法改用 simulated discussion signal。

重放所需数据包括 prompt、action inventory、树结构、visit count、Q value、UCT 与自评权重、每个节点分析、测试生成/验证尝试、被抽 case、每个 case 的七次执行模拟、聚合决策、reward 回传和最终采样。当前未确认这些 run-level 记录或固定版本实现已发布；论文称所有实验在单张 80GB H100 上完成。
