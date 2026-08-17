**方法与 verifier 限制。** Python 程序即使能够执行，也可能包含无关、循环或数学上无效的变换；对应的自然语言注释没有单独核验。terminal equivalence 可能在中间推理有缺陷时接受碰巧正确的最终答案，也可能因提取/等价判断脆弱而拒绝有效答案。Q-value 聚合的是某个 policy 与有限搜索树下已观察到的结果，因此可能把探索不足但可靠的步骤排在捷径之后。PPM 训练继承这些标签，反复刷新 policy/PPM 还可能放大早期检查器或搜索偏差。以上属于根据已披露契约做出的 curator inference；论文没有报告校准后的 false-positive/false-negative rate。

**数据与发布限制。** 两个公开数据集都是仅 train split 的扁平表。SFT 记录缺少来源 ID、轮次、seed、搜索预算、访问次数、Q-value、拒绝分支和 terminal-verdict 证据；PPM 记录还缺少 Q-margin 与树拓扑。未发现 747K 题目池、原始 MCTS 搜索树、训练后 policy/PPM checkpoints 或完整拒绝树。精确来源比例、变换、去重、split 构造和发布行映射均为 unknown。代码仓库和两个数据卡的顶层 MIT 标签不能自动解决 MetaMath、NuminaMath、MATH、AMC/AIME 或 GPT-4 合成衍生物的权利与署名衔接。

**实验与复现限制。** 未发现文档化的去污染或与 benchmark 语义重叠审计。论文的候选/rollout 默认设置与已检查配置中的 `12` 候选、`48` iterations 不同；论文的 PPM 一轮训练也与 README 的两轮示例不同。逐条预算、随机 seed、temperature、软件/container 版本和确切 checkpoints 均缺失。因此，目前无法把报告的 benchmark 与 scaling curve 绑定到一个不可变的公开运行。

**证据限制。** 19/20 标签错误来自一个小规模且未发布的人工审计。benchmark 提升只能作为作者集成系统表现的证据，不能证明每条发布记录都正确、无污染、许可适当，也不能证明其对不同模型与 objective 有益。
