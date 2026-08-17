benchmark 证据绑定 version 1.0.0 与 175 个任务。正式论文附录报告 69 个软件工程、28 个项目管理、14 个数据科学、15 个行政、29 个人力资源、12 个金融和 8 个其他任务，合计 175 个。构造投入来自作者报告：20 名贡献者工作两个月，约 3,000 person-hours，部分任务超过十小时。作者还报告 evaluator 测试、截图证据、代码审查、人工 double-check 与独立 checkpoint 重要性评审。这些流程说明了构造投入，但未发布逐任务 review log，因此不能执行记录级质量审计。

在 evaluator 构成上，51 个任务（29%）涉及 LLM evaluation，其余主要使用确定性状态/轨迹检查。论文 baseline 采用 Claude-3-5-Sonnet-20241022 作为 LLM evaluator 与模拟同事模型。正式论文称 assessor 经 3–5 名贡献者及 CI 审查和测试。这能证明混合 verification contract 存在，但无法估计 judge 误差或跨 run 方差，因为没有发布独立 judge-calibration corpus。

关键性能数字必须按版本读取，不能解释成一条统一提升曲线。官方 2024-12-17 run 使用 OpenHands 0.14.2 与 Claude-3.5-Sonnet，报告 42/175 个 full success（24.0%）、34.4% partial score、平均 29.17 steps 和每任务 $6.34 成本。NeurIPS 正式论文中，Gemini 2.5 Pro 配合 OpenHands 0.28.1 达到 30.3% full success 与 39.3% partial score，平均 27.2 steps、每任务 $4.2。harness 版本、模型和论文版本都已变化，因此 24.0% 到 30.3% 是 baseline/version drift，不是受控消融，也不能证明数据集本身变好。

发布证据强于仅有论文的 benchmark：已检查的官方 baseline 目录同时包含成功、部分得分与零分任务的 result 和 trajectory，并带逐步截图；公开 submission contract 也要求相同 artifact 类别。这支持对已检查 run 开展失败分析，但不能证明所有历史第三方 run 都完整或采用一致许可证。

论文 error analysis 给出社交交互中过早结束、浏览/UI 失败，以及只满足 evaluator 可见状态而没有满足真实任务意图的 shortcut，例如重命名某个 user。这些是已观察 baseline 失败，也是环境/evaluator 脆弱性的具体警告，不是穷尽性失败率。作者进行过 human feasibility 与 evaluator 检查，但任务可能耗时约十分钟到数小时，因此没有收集人类性能 baseline。作者还强调任务集合不足以支撑广泛 job-automation 结论。上述 benchmark 结果都不能证明训练数据质量，也不能证明在发布日志上训练会带来收益。
