主要创新在于对偏好数据结构进行实验控制,而不是提出新的偏好优化器。同一个合成约束环境提供分级 verifier,研究在比较时固定 training-pair 与 unique-prompt 数量,并分别改变共享前缀结构、chosen/rejected correctness、score margin、prompt difficulty 和 sampling scale,使数据构造本身成为实验对象。

RS 与 MCTS 充当两种对照式数据生成器。RS 采用高效的独立采样,往往能产生更多 high-contrast pairs;MCTS 花费更多计算,生成具有 common prefix 的 sibling pairs,产生更多 low-contrast pairs,并可利用树结构得到大量 pairs。因此,该研究把搜索拓扑连接到最终偏好数据的结构和产量,而不是只把 tree search 当成推理技术。

另一项重要设计是 reward separation:MCTS 可用 verifier/self-evaluation 混合信号决定搜索位置,但 pair acceptance 会用与 RS 相同的代码 verifier 重新检查。这种分离提高了比较公平性,却不能使 self-evaluation 自动获得校准,也不能让最终 verifier 变得全面。其贡献是受控配方与消融研究,不是开放数据发布或人类偏好的普遍理论。
