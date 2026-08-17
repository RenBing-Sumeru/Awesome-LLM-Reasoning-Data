最大的评测风险是无限次可见 test feedback。Appendix B 明确允许反复调用 `validate`，使 agent 能在 test set 上继续改进；Best Attempt 又选择最好的有效中间 score。这是针对评分面的在线优化，而不是一次性 held-out test。evaluator 文件虽然 read-only，但仍可阅读，agent 可以针对实现细节或 blind spot 定向优化。

feedback 语义很容易被误述。当前 `MLGymEnv.step` 在每个 transition 都返回 reward 0，任务 metric 则存入 `info.score`。若 RL 系统直接消费 native reward 而没有 adapter，就得不到任务信号。异构 metric 与 AUP 还依赖方向转换、infeasible-run 处理、任务混合和 best-of-4 选择。

validity 不等于质量。valid run 只要求至少产生 1 个 evaluator score，不必超过 baseline、具备泛化或发现科学新意。保留 failed 与 incomplete run 对审计有价值，但 post-paper 新增、修正、删除以及 error-to-file mapping 缺少稳定 release ledger。最终论文 624 条运行到当前 676 对文件的精确映射不可获得。

replay 仅部分成立。`run_replay.py` 可以重新发出记录的 assistant action，但当前文档使用 `aigym/mlgym-agent:latest`；仓库有 0 个 tag、0 个 GitHub release，changelog 只有标题。官方没有发布 paper-run OCI digest、完整 data/task/evaluator/dependency/GPU manifest、checksum 集或端到端确定性 replay 结果。即使 action 相同，可变上游 dataset 与 hardware 行为仍可能改变 score。

系统没有 benchmark-wide 干净 task split 或 decontamination audit。组成 dataset 使用各自的 task-specific split，但反复暴露 test score 破坏了干净 final holdout。公开 task、baseline、evaluator code 与 trajectory 也形成未来模型训练和 benchmark 泄漏面；pretraining exposure 与 instance-level overlap 未披露。

许可是混合的。README 将多数代码设为 CC BY-NC 4.0，SWE-Agent 与 Modded-NanoGPT 部分为 MIT，Gymnax/Gymnax-blines 部分为 Apache-2.0。这些声明没有为每个上游 dataset、生成 trajectory、submission、model output 或 dependency 提供统一许可；不支持无条件商业复用。论文未报告 benchmark-wide PII、consent、deletion 或 takedown 审计。

安全控制也不完整。agent 在非 root container 中执行广泛 shell 与训练命令，evaluator/data 通过常规 read-only 权限保护，但论文运行的 network access、package installation、secret、恶意上游 artifact、container capability 与 GPU isolation policy 未完整说明。
