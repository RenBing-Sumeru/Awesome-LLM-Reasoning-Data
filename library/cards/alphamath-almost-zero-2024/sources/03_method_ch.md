主构造流程从 DeepSeekMath-Base-7B 开始，在共享语言模型主体上增加随机初始化、带 tanh 的价值头，与 token 预测头共同训练。它在同一组 14,973 个问答对上运行三轮：

1. 第一轮向策略提供从 20 个示例中随机选出的两个 ReAct demonstration，模型按 Thought/Action/Action Input/Observation 形式生成步骤；从第二轮起改用论文定义的零样本 XML 步骤格式。
2. 每一轮都为每道题构建十棵 MCTS 树。报告配置为 `cpuct=1.25`、每个节点最多扩展五个子节点、每棵树最多 40 次 simulation、最大深度 8，生成 temperature 位于 0.6 至 1.2；各次构造运行具体使用哪个 temperature 并未披露（附录 C.3、Table 6）。
3. Selection 使用 PUCT 变体，把当前 Q 估计与按长度归一化的语言模型先验结合；expansion 采样多样的下一步。终局节点按最终答案正确性评估，非终局叶节点由价值头评估，再通过 backup 把结果平均到边的 Q 值。
4. 生成解答先去重；如果每一步代码都报错，即使最终答案偶然匹配也会被删除。错误路径其余部分尽量保留以增加多样性。正确路径按三层优先级筛选：代码输出与预测答案一致、所有步骤代码正确、其余答案正确的解答（附录 Algorithm 3）。
5. 每题每轮最多抽取四条正确路径和四条错误路径，形成约 1:1 的混合。论文称每轮正例为 57,000–59,000 条。正确路径承担语言模型损失，全部抽样路径在步骤结束 token 上承担价值回归损失。训练使用 AdamW、十个 epoch、batch size 1,024、learning rate 4e-5、cosine scheduler、3% warmup 和零 weight decay；正文与 Table 6 对默认价值损失权重分别给出 0.01 与 0.1，存在不一致，复现前需澄清。

训练完成后，新 checkpoint 再生成下一轮搜索树。官方发布特指由第二轮 checkpoint 生成并经筛选的第三轮训练集。本 Card 核验的 Hugging Face revision 只有一个 115,551 行的 split；它不是全部原始树、全部被拒路径或三轮完整数据的发布。

推理阶段，价值模型既可引导完整 MCTS，也可用于 step-level beam search。后者从每个保留状态采样 `B2` 个子节点，直接用价值预测给新状态排序，不做 MCTS backup。这个推理用途位于构造配方之后，不能视为额外的标签验证。
