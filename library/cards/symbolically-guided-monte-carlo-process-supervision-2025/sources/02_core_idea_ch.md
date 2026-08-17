本文贡献是一条三层离线转换链：**答案核验的 Monte Carlo 续写 → 步骤级伪标签与 PRM → 筛选后的 SFT 轨迹和按分数排序的 DPO 对**。one-shot Symbolic ReAct prompt 要求模型形式化事实和规则，并显式写出 Thought、Action、Observation 操作。对每个前缀，使用 Llama3.3-70B-Instruct 或 Qwen2.5-72B-Instruct 采样 10 个续写；只要至少一个续写到达 ground truth 就标为正，零个成功则标为负，随后把 Qwen2.5-7B-Instruct 训练成二分类 PRM。

反馈契约是 mixed。终点比较在答案标签层面是 programmatic，但生成的符号操作没有交给形式 verifier 执行。PRM 观察文本前缀和学到的伪标签，不能直接观察证明有效性。第二阶段中，只有当 PRM 对所有步骤都预测为正且最终答案正确时，轨迹才进入 SFT。对 DPO，逐步正类概率的乘积作为轨迹分数，两个候选的分差超过 0.25 才组成一对。因此，发布数据中的“negative”表示 PRM 分数较低，而不是已证明逻辑无效。

与面向自然语言轨迹的既有离线 Monte Carlo 过程监督相比，本文真正改变的是 Symbolic ReAct 表示以及对这种对象进行标注和筛选。与 TreeRL 等相邻 rollout/search 工作相比，它使用离线前缀续写，而不是从 on-policy 搜索树导出 RL advantage；与 A*-Thought 相比，verifier 筛选的是新生成的符号轨迹，而不是压缩后的路径。Monte Carlo 估计、PRM、SFT 和 DPO 都是已有组件；区别性对象是它们连接而成的符号数据流水线及其发布的 SFT/DPO 衍生数据。
