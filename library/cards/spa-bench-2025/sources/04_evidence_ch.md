最终论文评测 11 个集成 agent，其中 7 个是 GPT-4o-based workflow，4 个是 fine-tuned agent-as-model system。主表报告 M3A 表现最强，overall single-app success 为 0.544，cross-app success 为 0.150。这些是特定 device、app、account、model endpoint 与 rerun rule 下的作者结果，尚未独立复现。

verifier 与人类判断的 calibration 中，single-app 最佳 F1 为英文 0.926、中文 0.884；cross-app F1 分别为 0.833 与 0.857。cross-app calibration set 中 true negative 超过 90%，且没有发布逐条 human label 或 per-app confusion data。因此 aggregate F1 不能证明 rare positive、每种 language/app 或未来 UI version 上的可靠性。

证据不只覆盖二元 success。论文报告 successful-run step ratio、termination reason、premature/overdue completion、execution time 与 API cost，也分析 failure、parsing/input error、step-limit exhaustion、network/Android/CAPTCHA issue 以及 cross-app memory/context failure。这些支持 agent evaluation 与 diagnostic audit，而非 trajectory training 结论。

成败处理存在重要 release 边界。framework 在本地写入 screenshot、action/error log、finish/exit field 与 evaluator `S`/`F`/`E` detail，并可 resume incomplete session；意外基础设施错误会 rerun。但审计仓库没有 paper-run `results/`、screenshot trajectory corpus、evaluator-response archive、attempt ledger，也没有公开 retained、overwritten 或 deleted run 的映射。

仓库证据确认 commit `4c292b6df37907768618669d5bcafcbd8a23bc19` 发布了 340 个 task row、40 个 cross-app subtask JSON 与 evaluator/framework code。它没有确认发布人类 screenshot demonstration、论文实验 trajectory/result、AVD snapshot、app/account state 或完整可 replay 环境。benchmark score 不能替代这些缺失 artifact，也不能证明数据质量、权利清理或 side-effect 行为安全。
