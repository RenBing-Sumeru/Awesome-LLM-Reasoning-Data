流程把每道题表示为 MDP。状态是累积推理上下文，动作是一条预定义 instruction，转移让 LLM 根据当前状态和动作生成下一状态，reward 来自 PRM 或纯规则配置。UCT 选择节点；expansion 评估候选动作；simulation 持续扩展直到 summary 或最大深度；back-propagation 更新访问次数和累计 reward。完成 k 次搜索 iteration 后，对最终答案投票；若频次并列，则以 terminal reward 决胜。

主要实验使用 Qwen2.5 instruction-tuned 7B 作为生成器，Qwen2.5-Math-PRM 作为学习型过程反馈，并与 Qwen2.5 72B CoT 和 RAP/Native-MCTS 变体比较。论文在 zero-shot 设置下报告五个数学测试集：MATH-500、AquA、GaoKao-Math-QA、CN-Middle-School 和 Gaokao-2023。后续比较还在 Llama-3-8B-Instruct 上复现 CMCTS。仅凭已接受元数据无法完整恢复准确 temperature、搜索宽度、iteration 数 k、深度上限、seed 和完整模型标识。

论文明确指向 https://github.com/pass-lin/CMCTS。核验的仓库包含 data、examples、reasoners、prompts 和搜索配置，并报告在一张 A800 上使用 vLLM 0.7.0，但没有 tagged release，也未明确确认许可证。审计应保留仓库 commit、提示与动作版本、每个状态和边、UCT 输入、PRM logits、Q/V 值、规则 mask、代码执行输出、访问次数、回传值、投票总数、parser 结果和 benchmark 标签。
