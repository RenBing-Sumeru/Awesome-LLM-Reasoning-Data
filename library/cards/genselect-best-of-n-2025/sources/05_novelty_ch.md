逐点 outcome reward model 与 GenRM 会为每个候选独立给出分数或正确性判断；两两比较方案能利用比较能力，但穷举排序需付出 \(O(N^2)\) 开销，二叉淘汰赛又具有较深的串行赛程。GenSelect 的具体改变在于 feedback interface：一个通过 prompt 调用的推理模型同时读取多个带索引的解答摘要，生成比较 rationale，并给出一个索引；N 叉赛制再把该接口扩展到 context 上限之外。因此，论文提供的方向信号是比较式 selector trace 与淘汰赛结构，而不是新 benchmark、新 generator、学习得到的 reward model 或 training algorithm。

多个组件来自既有工作。候选采样与 majority voting 是标准 test-time scaling 机制；N 叉淘汰设计沿用 PairJudge-RM；解答摘要是一种输入压缩选择；QwQ-32B 与 DeepSeek-R1-0528 没有接受 selector-specific fine-tuning。论文的 novelty 比“训练出更好的 verifier”更窄：它表明现有推理模型可以通过 prompt 执行 N 路选择，并在竞赛数学上研究分支数以及 generation 与 selection 的预算分配。

对 reasoning-data 研究而言，有用的变化是记录边界。一条 GenSelect trajectory 可以保留所有候选摘要、顺序与分组、生成式比较分析、解析出的 selected index、淘汰赛边、重复次数、排列、generation 与 selector 预算，以及单独计算的正确性。这种结构暴露了只保存 majority-vote 最终结果时会丢失的未选候选与选择决策。但复用前仍需核查：保存的是完整轨迹还是摘要、失败样本是否保留、索引如何解析，以及算力是按调用次数、token 还是 latency 归一化。

OpenMathReasoning 的 565,620 条 `genselect` split 是相关实现 lineage，不是论文发布其实验语料的证据。其打包字段允许检查候选组和 selector output，但公开 schema 没有独立的 chosen-index 或逐候选 correctness 列，而且按正确性过滤的构建过程删除了失败 selector。
