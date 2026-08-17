既有 baseline 是完整轨迹采集或蒸馏：由人类或强闭源模型完成整项计算机使用任务，再用这些 episode 训练。论文自己的 direct-distillation 对照会让 Claude 为每项任务执行十条完整轨迹。另一个 baseline 只保留 312 条人工轨迹，并为其补充合成 thought。

PC Agent-E 改变了合成扩展的基本单位。Trajectory Boost 不让 Claude 选择 action 后继续在自身可能出错的状态上运行，而是在已执行人工主干的每个状态查询九个替代单步决策。因此，新的监督对象是围绕一个可信 screenshot 与历史展开的一组 thought-action target，而不是包含真实 observation transition 的搜索树。随后把人工节点和分支节点都展平为 action-level 多模态 SFT 行，这才是对训练用法最关键的改变。

若干部件属于整合而不是新的基本机制：人工 GUI 录制、ReAct-style thought/action 格式、Claude 生成、PyAutoGUI action、Qwen2.5-VL、LLaMA-Factory SFT、基于 VM 的 GUI benchmark 和任务特定 evaluator 都早于本文。由 312 条 episode 扩展到约 27K 行同样是重复分支与展平的结果，并不表示存在 27K 项独立任务或已执行 episode。

它对 reasoning data 研究的方向意义来自一项明确取舍：在同一人工状态附加多个标签可以低成本扩大合成覆盖，但这些分支没有 transition validity 与终止成功证明。这为 agent 数据提出一个清晰审计问题——固定状态上的多样性，能否替代经过 replay 验证的轨迹。复用前应测量分支可执行性、语义正确性、action 多样性、隐藏 teacher 风格、人工状态覆盖、丢弃失败导致的偏差，以及删除无效替代动作后下游结果的敏感性。
