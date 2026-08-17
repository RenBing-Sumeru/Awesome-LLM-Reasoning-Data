任务规模必须按版本区分。论文 Tables 3–4 与 HF v2 都给出精确的 146,746 条 task：143,811 条 train、2,935 条 test，字段为 `domain` 与 `task`。当前 v3 有 146,441 条 row：143,508 条 train、2,933 条 test，字段为 `website`、`instruction`、`steps`、`criteria`。150K 是约数；v3 比 v2 少 305 条，但没有公开 row-level migration explanation。

safety 结果来自小型对照审计，而不是 corpus-wide validation。在 100 个经过整理且由 50 个 safe 与 50 个 unsafe domain 平衡组成的集合上，论文报告 Llama-3.1-70B 的 accuracy、precision、recall 为 85%、0.77、1.00；GPT-4o 为 95%、0.91、1.00；Gemini-1.5-Pro 为 97%、0.96、0.98。因此摘要中的 97% 是这个平衡集合上的最佳结果，不能证明公开 row 中有 97% 安全。

feasibility 由人工单独评估。工作人员对每个 proposer model 在 100 个 sampled safe websites 上尝试任务；报告的 completion/verifiability rate 分别是 Llama-3.1-70B 75%、GPT-4o 85%、Gemini-1.5-Pro 89%。这些是 sample-level proposer comparison，不是全部约 146K 条公开 row 的 feasibility label。根据 proposer 不同，审计任务中有 11–25% 无法由人工验证。

success judge 同样存在误差。在 100 条带人工 binary success label 的 trajectory 上，以 judge success 大于 0.5 为阈值，论文报告 Gemini-1.5-Pro accuracy 78.0%、Llama-3.1-70B 81.7%、GPT-4o 82.6%。大规模 v2 run 改用 Qwen3-235B 作 zero-shot judge，而 SFT pool 只保留 success 等于 1 的样本。完整 confusion matrix、calibration、agreement、site/category slice 和底层 validation records 均未发布。

在报告的 Qwen3 实验中，Qwen3-1.7B 在 Qwen3-235B judge 下从 11.5% success 提升到训练后的 56.9%，绝对增加 45.3 percentage points。作者报告 top checkpoint 超过 Qwen3-235B collection policy 和 Llama-4-Maverick，并达到 Gemini-2.5-Flash 表现的 94.7%；secondary learned judges 的方向相同。这些是作者报告的 live-web、judge-mediated 结果，不是独立复现的 ground-truth success rate。

20K training ablation 保留 10.5K 条 endpoint judge success 为 1 的 Qwen3-235B trajectory。大规模 corpus 被描述为约 150K 条 trajectory，平均约 15 steps，共 2.2M 张 screenshot、2.2M 条 action/reasoning trace 和 150K 条 judge trace，成本为 1,200 V100 GPU-hours。官方 release 没有公开这些记录：HF organization 显示零个 public model，只有 v1/v2/v3 task datasets。

当前代码在 MIT license 下支持 task proposal、live collection、Playwright action、observation serialization、judging、SFT、evaluation 与 visualization。检查的代码 head 没有 tag 或 GitHub Release，且晚于 paper v2。它证明相关 recipe 可以运行，但没有把当前代码与确切的 paper task rows、trajectories、selection ledger、checkpoint 或 tables 绑定起来。
