对 `frontier_reports_data_disclosure_ledger` 而言，Qwen3-VL 可作为区分 SFT record、Long-CoT trace、teacher response、on-policy sequence/logit、可验证 RL rollout、judge-scored output 与定向失败 prompt 的 schema，也可指导披露清单与使用独立许可数据的受控复现。

可复用发布应固定 source/revision/license、prompt、response mode、context length、teacher/policy checkpoint、全部 16 条 rollout、parser/verifier/judge 结果、pass-rate filter、reward vector/weight、拒绝原因、optimizer stage 与目标 checkpoint。在这些产物出现前，应把报告用于理解设计选择，而不是声称训练数据可获得；benchmark 结果只能作为模型评测。

