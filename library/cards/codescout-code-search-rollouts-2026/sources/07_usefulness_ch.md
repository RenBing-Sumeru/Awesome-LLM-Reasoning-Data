对于 **Rollout, Search, and Test-Time Trace Data**，CodeScout 是一个典型发布：分析单位不只是 prompt–answer pair，而是 task-step 组中的一次 attempt。`instance_id`、`step` 和 `rollout_number` 使研究者能够重建大多数四路或八路分组，并研究同一任务与策略更新上下文中的 terminal-search 行为差异。mixed group 与全零组尤其重要，因为它们公开了 best-only 整理通常会丢弃的信息。

具体研究用途包括：

- 比较正分与零奖励同组轨迹中的命令、observation、finish schema 和定位分量；
- 使用三个分解的 F1 字段，而不是一个不透明总分，研究文件级成功是否先于或替代 module/entity 定位；
- 测量分组结果构成如何随训练 `step` 变化，同时明确 checkpoint identity 与精确 on-policy age 不可用；
- 在完整 attempt group 上测试不同选择策略，包括删除零奖励行所带来的偏差；
- 在补齐停止/错误标签后，为无效 finish、预算耗尽、错误定位和环境故障建立失败分类；
- 审计精确轮数 bonus 是否在搜索正确性之外独立改变交互长度；
- 把论文—发布计数差异、不完整 4B 分组和脚本漂移作为 rollout manifest 的复现案例。

对于 agent training，只有在审查数据权利和泄漏风险后，该发布才可用于离线检查、轨迹 featurization 或 SFT/RLVR 研究原型。轨迹的零分或正分只证明其与 patch location 的重叠程度，并不是通用 preference label。直接把所有正分行都转为 preferred answer，会忽略部分分数、任务难度、策略版本、分组上下文，以及 verifier 不验证修复这一事实。

对于 verifier 研究，分解 schema 支持文件、module、entity target 之间的受控比较。后续发布如果把每行连接到 gold set 和精确仓库状态，就能重算奖励、测试层级感知替代指标，并审计 patch 衍生 target 的遗漏。在此之前，当前 artifact 支持分析已记录分数，却不能独立验证每个分数。

对于评估，论文中的 SWE-Bench 定位表面可用于测试搜索策略，但训练与 evaluation 发布必须保持分离，并维持仓库级无重叠。报告性能时还应同时给出成功/零分比例、完整分组数量、命令与轮数预算、唯一任务数，以及无效 finish/错误类别。benchmark 提升本身不能证明 rollout 发布完整、无污染、有许可或可重放。

适当的复用等级是：**强审计与配方参考；有条件的研究分析；训练数据再分发在许可证与谱系审查完成前受阻**。更广泛复用前，应要求解释 54,845 对 51,200 的精确 run manifest、逐组完整性记录、匹配论文的启动配置、记录级环境/checkpoint 谱系、明确数据许可证，以及被排除 1.7B artifact 的映射。
