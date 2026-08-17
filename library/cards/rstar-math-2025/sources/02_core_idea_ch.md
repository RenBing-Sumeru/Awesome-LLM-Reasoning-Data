rStar-Math 的核心贡献是一个四轮数据循环：code-augmented MCTS 同时产生供 policy SFT 使用的正确轨迹和由搜索派生的步骤比较，用于训练 process preference model；随后，新 policy 与 PPM 再生成下一轮数据。

| 契约要素 | 内部构造对象与信号 |
|---|---|
| Prompt 与参考答案 | 来自论文所述 747K 题目池的带答案数学题 |
| 行为 | policy 在每个 MCTS 节点提出一个自然语言/Python 推理步骤 |
| 运行时反馈 | 候选的累积 Python 程序必须无错误执行，才可继续留在搜索中 |
| Terminal feedback | 提取答案与参考答案等价则 terminal reward 为 +1，错误则为 -1 |
| 搜索 value | terminal outcome 反向传播为 Q-value；从第 3 轮起，上一轮 PPM 为步骤提供初始 value |
| SFT 对象 | 每题最多两个正确的根到叶轨迹，按平均/最小 Q 排序，并移除含 `error` 的 response |
| PPM 对象 | 在共享前缀下，偏好高 Q 且通向正确结果的步骤，反对低 Q 且通向错误结果的步骤；仓库导出还要求 Q-margin 至少为 0.5、编辑距离至少为 20 |

该 verifier contract 是 mixed，但边界清楚。Python 执行只能观察语法和运行时可行性，不能判断注释是否正确形式化了题目，也不能判断计算是否与数学求解相关。答案检查器只观察提取后的 terminal answer 是否等价，因此正确结果可能与有缺陷的中间推理并存。Q-value 和 PPM 分数概括特定 policy、已探索搜索树、答案检查器与有限预算下的成功情况，是依赖轨迹的估计，而不是局部步骤正确性的证明。

该研究方向是推理数据生成器与过程 selector 的联合演化。rStar 系列搜索工作、REST-MCTS 与 DART-Math 是有用的对照；本文特有的变化是把 code-augmented 搜索树生成、由 terminal outcome 反向传播得到的步骤偏好，以及四轮 policy/PPM 刷新连接起来。作者没有用更强模型书写论文所述 solution trajectories，但必须保留两个 bootstrap 边界：GPT-4 生成了部分题目池，DeepSeek-Coder-V2-Instruct (236B) 生成了第 1 轮 MCTS 轨迹。
