输入是一张图像与一道多项选择题。InternVL2.5-78B 先给出初始答案和置信估计；报告中的 search gate 在置信度超过 0.9 时跳过 MCTS。否则，subquestion policy 与 isolated-answer policy 均以 temperature 0.6 运行。树的第一层最多扩展六个 subquestion，后续层最多三个。若模型无法产生答案，或输出退化为重复内容，节点终止。UCT 的 exploration constant 为 1.4。

每次 value estimation 会组合当前部分路径，附加八种 wrap-up phrase 之一，并获得八个答案 completion。方法把每个 completion 解析为规范选项并赋予归一化启发式权重；若达到最大长度仍无有效答案，则权重为零。加权答案一致性沿树回传。Direct-exit node 在 UCT 中省略 exploration term，以减轻特殊节点偏置。最终答案由搜索与内部一致性统计选择，而非 benchmark 标签直接选择。

实验使用冻结模型且只运行一次：MMMU-PRO 使用 40 次 MCTS iteration，MMStar 与 MathVista test-mini 的英文多选子集使用 20 次。论文还比较 Direct Answer、greedy CoT 和深度为 3 的多模态 Least-To-Most。流程不含模型训练。本次未确认官方发布完整 prompt 包、transition 列表、逐节点 seed、树日志、parser 实现或可执行代码。
