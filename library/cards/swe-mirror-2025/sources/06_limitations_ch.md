程序化有效性窄于语义正确性。三状态测试契约能够拒绝不可应用 patch、缺少 fail-to-pass 行为、回归以及部分 flaky outcome，但薄弱的生成测试仍可能放过定义不足或过于简单的任务。人工审计清楚暴露了这条边界：177 个取得多数标签的任务中有 21 个与源 issue 不一致，另有 7 个没有多数分类。由于 `fix.patch` 是 `mirror.patch` 的反向补丁，参考解可能只编码生成器选定的修改，而不是完整的有效修复空间。

筛选流程同时可能产生 false positive 与 false negative。84.3% precision 和 86.0% recall 来自人工平衡的 100 个 issue 样本，而不是自然候选分布。Rust 镜像成功率降至 28.0%，Go 为 36.0%，且 compile/syntax failure 明显多于 Python。这些差异可能使最终语言混合偏向更容易被 agent 与 harness 操作的问题和仓库。

轨迹报告只保留成功样本。6,431 条 SWE-Mirror episode 与 6,025 条 SWE-rebench episode 都经过终局成功筛选；整体失败、超时、flaky 或基础设施错误 rollout 的数量与 artifact 未披露。Error Masking 只在最终成功 episode 内保留错误 turn 的上下文，并屏蔽该 response 的 loss。不能把它描述为失败数据训练，也不能据此声称未成功 episode 得到保留。

当前没有已核实的任务/轨迹 split、不可变 instance manifest 或 overlap audit。论文在 SWE-bench Verified 与 Multi-SWE-Bench-Flash 上评测，却没有记录任务级别的 benchmark、源仓库与 issue、参考 patch 或 teacher pretraining 对照检查。这带来污染和评测数据进入训练的风险，也无法检查同一源 issue 模式是否在多个目标仓库重复出现。

精确重放仍被阻断。论文没有提供已核实公开 artifact 来固定目标仓库 commit、容器镜像 digest、依赖锁、测试 parser 与 harness 修订、逐实例日志、prompt、seed、teacher endpoint 版本或任务到轨迹映射。arXiv 论文采用 CC BY 4.0，但该许可不能证明源仓库代码、issue/PR 文本、patch、测试、依赖、生成任务或闭源 teacher 轨迹的再分发权利。curator inference：方法并不以个人用户数据为核心，但 GitHub issue/PR 文本可能包含姓名、邮箱、secret 或安全敏感细节，因此发布前仍需隐私与 secret scan。
