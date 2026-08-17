WebRL 当前最适合作为构造与审计参考。研究者可以据此重建 1,186 条 SFT 种子、含 12,200 条样本的 ORM 数据、当前策略 rollout、失败条件生成、mixed 环境/ORM 反馈和仅成功轨迹 replay 之间的区分。论文披露的 8 阶段、每阶段 500 个任务课程，以及 0.05 到 0.75 的任务筛选区间，为检验自适应任务难度是否优于固定任务池提供了具体 baseline。

其 replay 设计也适合做受控实验：比较全部历史、仅成功历史和论文采用的 0.5 到 0.95 置信区间，同时保留 terminal label 与局部动作诊断。Verifier 研究可以复现 ORM 的输入限制，再增加隐藏状态检查、分站点校准、对抗性最终页面，以及与可执行 predicate 的分歧分析。评测复用应严格隔离包含 165 个任务的 holdout，并冻结完整浏览器、站点与 reset 栈。

训练数据复用目前处于 blocked pending verification。约 103 MB 的 `.pt` 工件没有独立许可，也不包含完整课程 lineage；由于使用 `torch.load`，加载前还需隔离检查。公开 checkpoint 在遵循上游条款的前提下可支持方法比较，但既不能授权，也不能重建缺失轨迹。在任务权利、完整成功/失败留存、ORM 标签、split overlap 和环境版本公开之前，安全复用等级应是 reading/audit reference 与 reproduction scaffold，而不是可直接投入 SFT 或在线 RL 的语料。
