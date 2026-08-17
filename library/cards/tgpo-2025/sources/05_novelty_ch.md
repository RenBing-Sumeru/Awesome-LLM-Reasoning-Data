既有基线通常用整条 web-agent trajectory 的 success/failure 监督其中每个 action，或在完整输出层面形成 preference。这种处理会忽略：失败 episode 可能包含有用 action，而成功 episode 也可能包含冗余或错误的中间 action。

TGPO 先改变数据对象，再改变 optimizer。它把同一任务的重复运行合并为 state-transition tree，并在共享 decision node 上派生监督。preference learning 消费的记录不只是成功与失败 episode，而是 state、两个分歧 action、各自 cumulative branch reward、chosen/rejected 排序，以及 reward-gap/within-node-variance 权重。

反馈接口也比 terminal bit 更明确。四个 component 分别表示近似 subgoal progress、cycle redundancy、VLM 判断的 action effectiveness，以及 action-format validity。该分解使方法能够区分进展、语法、界面效果和重复状态行为，同时把 terminal episode outcome 保留为独立信号。

trajectory merge tree、shortest-path calculation、cycle detection、VLM judging、action parser、SFT initialization 和 DPO 风格 reference-policy objective 都不是各自独立的新组件。具体变化在于：利用它们从跨轨迹冲突构造 node-level preference record，并按 branch reward 的分离程度加权 decision point。因此，该工作是 construction-and-selection recipe，而不是开放 trajectory dataset 或新 environment。

label-conflict measurement 与 KTO-Tree ablation 是论文中相关的 quality signal，但二者都不能证明 state merge、VLM decision 或 preference pair 正确。作者报告的 benchmark gain 可能来自派生监督、weighting、实现细节或它们的交互；缺少数据与代码使进一步 attribution 不可行。

对 reasoning-data 研究而言，其方向信号是：构造 preference 前，可以围绕共享 state 重新组织重复 agent episode。复用前必须核验 merge function、terminal check、四项 reward component、pair-selection edge case、task split、失败轨迹保留和不可变 artifact。若这些检查未完成，只能把新意作为 recipe 研究，不能把它当作可复用发布。
