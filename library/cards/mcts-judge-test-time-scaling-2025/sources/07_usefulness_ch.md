对 rollout/search/test-time trace Track，可复用的 MCTS-Judge 记录应保存：题目与候选代码、benchmark item 与 reference 可用性、模型/version 和完整 prompt、action inventory、父子边、节点分析与二元子判定、visit count/Q/UCT/局部自评/选择概率、生成测试及全部验证尝试、被抽 case、每次模拟的变量轨迹与预测输出、单 case 投票、h(x)、trajectory aggregate、terminal reward、backpropagation 和最终轨迹选择。

该 schema 可用于审计 reward leakage、自我确认、action coverage，以及增加测试时算力究竟来自更广分析还是重复相关判断。它也可支持 judge/verifier 研究，但必须把真实执行结果与模拟输出分开，并确保隐藏 benchmark label 不进入搜索。由于官方树与测试 case 尚未发布，目前论文提供的是 recipe 与风险模型，而不是可复用反馈数据集。
