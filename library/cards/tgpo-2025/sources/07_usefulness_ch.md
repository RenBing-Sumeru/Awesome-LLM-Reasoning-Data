在 `environment_agent_trajectory_data` 轨道中，TGPO 可作为把重复 episode 转换为 decision-level supervision 的设计模式。可比实现应保留 task identity、state/action serialization、transition、terminal label、merge evidence、四项 reward component、cumulative branch reward、chosen/rejected action、dynamic weight 和逐记录 lineage，使从 episode outcome 到 preference record 的隐藏转换可被审计。

论文实际展示的用途仅限 SFT initialization、离线 preference learning、web-agent training 和 evaluation。SFT checkpoint 是起始 policy，tree-derived node pair 进入 preference objective，所得 agent 在 Online-Mind2Web 与 C-WebShop 上评测。论文没有建立更广泛的训练用途，而且缺失的 SFT recipe 阻止重建 initialization。

对 construction research，可以将 merge-tree recipe 与 exact environment-state ID、DOM-diff matching、learned state equivalence 或 no merging 对比。每项研究都应保留 false merge 与 missed merge，并测量其对 cycle、subgoal distance、reward component、pair ranking 和下游结果的影响；四项 reward term 也应在固定任务与计算预算下做 ablation。

对 verifier 与 selection research，可以用版本化 evaluator 替代未披露 VLM judge，并公开 prompt、expected-change schema、calibration set 和 adjudication policy。pair construction 应记录 tie、zero-variance node、reward gap、duplicate 与 dropped branch，使 false-positive/false-negative analysis 成为可能，并检查高 dynamic weight 是否放大 judge 或 merge error。

对 evaluation，作者报告的 success、average-step、redundant-step 与 conflict-rate 只能在 task 和 environment version 固定后作为比较目标。可靠后续研究必须隔离 training、model selection 与 evaluation task，replay terminal predicate，报告多个 seed，并使用已披露的 2-epoch、8-H20、`1e-5` 预算，或清楚记录替代配置。

当前复用等级为 **blocked pending verification**。本卡可用于阅读、实现规划与 audit design，但不能安全复用任何训练或评测资产，因为代码、数据、模型、environment snapshot、task/split manifest、license 和 replay metadata 全部缺失。
